
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { TrackingService } from '../tracking.service';
import { EnquiryPdfData, EnquiryPdfService } from './enquiry-pdf.service';
import { Prospectus, PROSPECTUSES } from './prospectuses';

/** Grades JGS Kokapet admits from 2027–28 (IB PYP, Nursery (EY1) to Grade 2). */
const KOKAPET_GRADES = [
  'Nursery',
  'PP1',
  'PP2',
  'Grade 1',
  'Grade 2'
];

/** Grades JGS Mokila admits for 2027–28 (Nursery to Grade 7). */
const MOKILA_GRADES = [...KOKAPET_GRADES, 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7'];

/** L17: the ICSE at JGS Mokila is planned for Grades 1 to 6. Nursery to PP2 and Grade 7 are IB only. */
const MOKILA_ICSE_GRADES = ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'];

/**
 * L17: curriculum choices on the full form. Wording rule: Mokila's IB and ICSE are planned,
 * subject to IB authorisation and CISCE affiliation.
 */
const CURRICULUM_OPTIONS: Record<string, { value: string; label: string }[]> = {
  Kokapet: [{ value: 'IB', label: 'IB Primary Years Programme (PYP)' }],
  Mokila: [
    { value: 'IB', label: 'IB PYP and MYP (planned)' },
    { value: 'ICSE', label: 'ICSE, Grades 1 to 6 (planned)' }
  ]
};

/** L17: Indian mobile number, 10 digits starting 6 to 9. */
const MOBILE_PATTERN = /^[6-9]\d{9}$/;

/** L17: enquiry number, e.g. MK-IB-482913: campus, curriculum and a random 6-digit number. */
function makeEnquiryNumber(campus: string, curriculum: string): string {
  const prefix = campus === 'Kokapet' ? 'KK' : 'MK';
  let n = Math.floor(Math.random() * 900000);
  if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
    const a = new Uint32Array(1);
    crypto.getRandomValues(a);
    n = a[0] % 900000;
  }
  return `${prefix}-${curriculum}-${100000 + n}`;
}

/** L17: PDF bytes as base64 text, to send to the enquiry Sheet. */
function toBase64(bytes: Uint8Array): string {
  let binary = '';
  for (let i = 0; i < bytes.length; i += 0x8000) {
    binary += String.fromCharCode.apply(null, Array.from(bytes.subarray(i, i + 0x8000)));
  }
  return btoa(binary);
}

/** L17: earliest date of birth accepted (Grade 7 for 2027–28, with room to spare). */
const DOB_EARLIEST = new Date(2011, 0, 1);

/** L17: reads a DD/MM/YYYY date. Returns null if it is not a real calendar date. */
function parseDob(value: string): Date | null {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value || '');
  if (!m) {
    return null;
  }
  const [day, month, year] = [Number(m[1]), Number(m[2]), Number(m[3])];
  const d = new Date(year, month - 1, day);
  return d.getFullYear() === year && d.getMonth() === month - 1 && d.getDate() === day ? d : null;
}

/** L17: a real DD/MM/YYYY date, not before 2011 and not in the future. */
function dobValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) {
    return null; // "required" reports an empty field
  }
  const d = parseDob(control.value);
  return d && d >= DOB_EARLIEST && d <= new Date() ? null : { dob: true };
}

/** reCAPTCHA is loaded only on pages that show this form (brief item A9). */
const RECAPTCHA_SCRIPT_ID = 'jgs-recaptcha-script';
const RECAPTCHA_SCRIPT_SRC = 'https://www.google.com/recaptcha/api.js?render=explicit';

declare const grecaptcha: any;

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.scss']
})
export class EnquiryFormComponent implements OnInit, AfterViewInit, OnDestroy {
  /**
   * true: show the form directly on the page (home page).
   * false (default): show it as a popup opened by openAdmissionModal() (/home).
   * Use only one instance per page, because the reCAPTCHA container has a fixed id.
   */
  @Input() inline = false;

  /**
   * true: after a successful enquiry, offer the campus prospectuses for download
   * (used on /enquiry-form). Prospectuses are listed in prospectuses.ts.
   */
  @Input() showProspectus = false;

  /**
   * L17: true shows the full form (used on /enquiry-form only): campus first, then curriculum,
   * then the child's name, gender, date of birth and grade, then the parents' details and address.
   * false (default) keeps the short form everywhere else (home page, /home, the popup).
   */
  @Input() fullForm = false;

  readonly genderOptions = ['Male', 'Female'];

  /** L17: choices on the full form, as on the school's printed enquiry form. */
  readonly yesNo = ['Yes', 'No'];
  readonly boardOptions = ['IB', 'ICSE', 'CBSE', 'SSC'];
  readonly heardFromOptions = [
    'Google',
    'Social media',
    'Educational fairs',
    'Newspaper / print ads',
    'Hoardings / signages',
    'Word of mouth',
    'Referral'
  ];
  readonly parentSections = [
    { key: 'father', title: 'Father / guardian details' },
    { key: 'mother', title: 'Mother / guardian details' }
  ];

  /** L17: shown after a submit attempt with neither parent's details. */
  parentErrorShown = false;

  /** L17: the details of a sent full-form enquiry, used for the PDF download. */
  pdfData: EnquiryPdfData | null = null;
  private pdfBytes: Uint8Array | null = null;
  pdfBusy = false;
  pdfError = '';

  /** L13: "enquiry_form_start" is sent once per page load. */
  private formStarted = false;

  readonly academicYearLabel = '2027\u201328';

  private readonly isBrowser: boolean;
  private locationSub?: Subscription;

  private readonly scriptUrl =
    'https://script.google.com/macros/s/AKfycbzhNZeGQy2r5D8UAYjzRvqpPVP4ZBop58JvHHzEDVVkVSjO_gTAIoV9J-qiEriejbW9/exec';

  /**
   * L17: the separate Google Sheet "JGS Enquiry Form 2027-28" for the full form on /enquiry-form
   * (apps-script/enquiry-form/Code.gs), deployed from the school's Google account on 13 Nov 2026.
   * The web app must be deployed with "Who has access: Anyone", or parents' enquiries cannot reach it.
   */
  private readonly fullFormScriptUrl =
    'https://script.google.com/macros/s/AKfycbxGF8PPtPzN3F9qV3uQsVGCcpgHDTHhzfBen7j4vQLJdanWJ3XLbM2GtV14HmRlRQu_/exec';

  private readonly recaptchaSiteKey = '6Lc9uOstAAAAAOzhMr1_pxOgktswK3zk5nY5LRSk';

private captchaRenderAttempts = 0;
private captchaWidgetId: number | null = null;
private captchaRenderTimer: ReturnType<typeof setTimeout> | null = null;


  showAdmissionModal = false;
  submitting = false;
  submitted = false;
  errorMessage = '';

  recaptchaToken = '';
  captchaAttempted = false;


  form = this.fb.group({
    studentName: ['', [
      Validators.required,
      Validators.maxLength(100)
    ]],
    studentGrade: ['', Validators.required],
    motherName: ['', [
      Validators.required,
      Validators.maxLength(100)
    ]],
    fatherName: ['', [
      Validators.required,
      Validators.maxLength(100)
    ]],
    phoneNumber: ['', [
      Validators.required,
      Validators.pattern(/^[6-9]\d{9}$/)
    ]],
    emailAddress: ['', [
      Validators.required,
      Validators.email,
      Validators.maxLength(254)
    ]],
    academicYear: [
      { value: '2027-2028', disabled: true },
      Validators.required
    ],
    location: ['', Validators.required],
    // L17: full form only. Made required in ngOnInit when fullForm is true.
    curriculum: [''],
    gender: [''],
    dateOfBirth: [''],
    residentialAddress: [''],
    previousSchooling: [''],
    previousSchoolName: [''],
    previousBoard: [''],
    previousClass: [''],
    siblingAtJgs: [''],
    siblingName: [''],
    siblingClassSection: [''],
    fatherQualification: [''],
    fatherOrganisation: [''],
    fatherMobile: [''],
    fatherEmail: [''],
    motherQualification: [''],
    motherOrganisation: [''],
    motherMobile: [''],
    motherEmail: [''],
    heardFrom: [''],
    referralName: ['']
  });

  /** L17: rules that always apply to a field on the full form; "required" is added when it applies. */
  private readonly baseValidators: Record<string, ValidatorFn[]> = {
    fatherMobile: [Validators.pattern(MOBILE_PATTERN)],
    motherMobile: [Validators.pattern(MOBILE_PATTERN)],
    fatherEmail: [Validators.email, Validators.maxLength(254)],
    motherEmail: [Validators.email, Validators.maxLength(254)],
    previousClass: [Validators.maxLength(30)],
    siblingClassSection: [Validators.maxLength(40)]
  };

  private fullFormSubs: Subscription[] = [];

  /** L20: reCAPTCHA loads when the on-page form comes near the screen. */
  private formObserver?: IntersectionObserver;
  private captchaStarted = false;

  private curriculumSub?: Subscription;

  constructor(
    private fb: FormBuilder,
    private tracking: TrackingService,
    private enquiryPdf: EnquiryPdfService,
    private host: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    // Kokapet admits only up to Grade 2: clear a grade that does not apply to the chosen campus.
    this.locationSub = this.form.controls.location.valueChanges.subscribe((campus) => {
      if (this.fullForm) {
        // L17: Kokapet has one curriculum, so it is chosen for the parent. Mokila needs a choice.
        const options = CURRICULUM_OPTIONS[campus] || [];
        const current = this.form.controls.curriculum.value;
        if (options.length === 1) {
          this.form.controls.curriculum.setValue(options[0].value);
        } else if (!options.some((o) => o.value === current)) {
          this.form.controls.curriculum.setValue('');
        }
      }
      this.clearGradeIfUnavailable();
    });

    this.curriculumSub = this.form.controls.curriculum.valueChanges.subscribe(() => {
      this.clearGradeIfUnavailable();
    });
  }

  ngOnInit(): void {
    if (this.fullForm) {
      const c = this.form.controls;
      c.curriculum.setValidators(Validators.required);
      c.gender.setValidators(Validators.required);
      c.dateOfBirth.setValidators([Validators.required, dobValidator]);
      c.residentialAddress.setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(300)]);
      c.previousSchooling.setValidators(Validators.required);
      c.siblingAtJgs.setValidators(Validators.required);
      c.heardFrom.setValidators(Validators.required);
      // One parent is enough: names, phone and email are checked per parent section instead.
      c.motherName.setValidators(Validators.maxLength(100));
      c.fatherName.setValidators(Validators.maxLength(100));
      c.phoneNumber.clearValidators();
      c.emailAddress.clearValidators();
      Object.keys(this.form.controls).forEach((name) => {
        const ctrl = this.form.get(name)!;
        if (this.baseValidators[name]) {
          ctrl.setValidators(this.baseValidators[name]);
        }
        ctrl.updateValueAndValidity({ emitEvent: false });
      });

      // Questions that open more questions: those become required only when they apply.
      const watch = (name: string, applies: (v: string) => boolean, fields: string[], clearWhenOff: boolean) =>
        this.fullFormSubs.push(
          this.form.get(name)!.valueChanges.subscribe((v) => this.setRequired(fields, applies(v || ''), clearWhenOff))
        );
      watch('previousSchooling', (v) => v === 'Yes', ['previousSchoolName', 'previousBoard', 'previousClass'], true);
      watch('siblingAtJgs', (v) => v === 'Yes', ['siblingName', 'siblingClassSection'], true);
      watch('heardFrom', (v) => v === 'Referral', ['referralName'], true);
      // Clears the "details are missing" message once everything is filled in.
      this.fullFormSubs.push(
        this.form.valueChanges.subscribe(() => {
          if (this.errorMessage && this.form.valid && !this.parentMissing && !this.submitting) {
            this.errorMessage = '';
          }
          if (!this.parentMissing) {
            this.parentErrorShown = false;
          }
        })
      );
      for (const parent of ['father', 'mother']) {
        watch(
          `${parent}Name`,
          (v) => !!v.trim(),
          [`${parent}Qualification`, `${parent}Organisation`, `${parent}Mobile`, `${parent}Email`],
          false
        );
      }
    }
  }

  /** L17: makes fields required (or not), keeping their other rules. */
  private setRequired(fields: string[], required: boolean, clearWhenOff: boolean): void {
    for (const name of fields) {
      const ctrl = this.form.get(name)!;
      const base = this.baseValidators[name] || [Validators.maxLength(100)];
      ctrl.setValidators(required ? [Validators.required, ...base] : base);
      if (!required && clearWhenOff) {
        ctrl.setValue('', { emitEvent: false });
        ctrl.markAsUntouched();
      }
      ctrl.updateValueAndValidity({ emitEvent: false });
    }
  }

  /** L17: on the long form, takes the parent to the first field that needs attention. */
  private scrollToFirstProblem(): void {
    if (!this.isBrowser) {
      return;
    }
    setTimeout(() => {
      const el = document.querySelector('.admission-inline-full .invalid-field, .admission-inline-full .captcha-error') as HTMLElement | null;
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 0);
  }

  private parentName(key: string): string {
    return String(this.form.get(`${key}Name`)?.value || '').trim();
  }

  /** L17: a parent's section is optional once the other parent's name is filled in and this one is empty. */
  parentOptional(key: string): boolean {
    const other = key === 'father' ? 'mother' : 'father';
    return !this.parentName(key) && !!this.parentName(other);
  }

  /** L17: whether to show the red * on a full-form field. */
  showStar(id: string): boolean {
    const m = /^(father|mother)/.exec(id);
    return m ? !this.parentOptional(m[1]) : true;
  }

  /** L17: true when neither parent's name has been entered on the full form. */
  get parentMissing(): boolean {
    const v = this.form.getRawValue();
    return this.fullForm && !String(v.fatherName || '').trim() && !String(v.motherName || '').trim();
  }

  /** L17: keeps only digits and adds the slashes, so the date always reads DD/MM/YYYY. */
  onDobInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const digits = input.value.replace(/\D/g, '').slice(0, 8);
    let formatted = digits;
    if (digits.length > 4) {
      formatted = `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
    } else if (digits.length > 2) {
      formatted = `${digits.slice(0, 2)}/${digits.slice(2)}`;
    }
    if (formatted !== input.value) {
      input.value = formatted;
      this.form.controls.dateOfBirth.setValue(formatted);
    }
  }

  /** L17: curriculum choices for the campus selected on the full form. */
  get curriculumOptions(): { value: string; label: string }[] {
    return CURRICULUM_OPTIONS[this.form.controls.location.value] || [];
  }

  /** Clears a grade that does not apply to the chosen campus (and, on the full form, curriculum). */
  private clearGradeIfUnavailable(): void {
    const grade = this.form.controls.studentGrade.value;
    if (grade && !this.availableGrades.includes(grade)) {
      this.form.controls.studentGrade.setValue('');
    }
  }

  /** Prospectuses with a file, the parent's chosen campus first. */
  get availableProspectuses(): Prospectus[] {
    const chosen = this.form.controls.location.value;
    return PROSPECTUSES
      .filter((p) => !!p.file)
      .sort((a, b) => (a.campus === chosen ? -1 : b.campus === chosen ? 1 : 0));
  }

  onWhatsAppClick(): void {
    this.tracking.contactClicked('whatsapp');
  }

  /** L13: first time the parent touches the form on this page. */
  onFormFocus(): void {
    if (this.formStarted || !this.isBrowser) {
      return;
    }
    this.formStarted = true;
    this.tracking.enquiryFormStarted(window.location.pathname);
    // L20: if the form was reached without scrolling (e.g. a link to #enquire), start reCAPTCHA now.
    this.startRecaptcha();
    // L17: start loading the PDF tools in the background, so they are ready when the form is sent.
    if (this.fullForm) {
      this.enquiryPdf.preload();
    }
  }

  onProspectusClick(prospectus: Prospectus): void {
    this.tracking.prospectusDownloaded(prospectus.campus);
  }

  /** Grades offered for the campus currently selected in the form. */
  get availableGrades(): string[] {
    if (
      this.fullForm &&
      this.form.controls.location.value === 'Mokila' &&
      this.form.controls.curriculum.value === 'ICSE'
    ) {
      return MOKILA_ICSE_GRADES;
    }
    // Before a campus is chosen, show every grade either campus admits.
    return this.form.controls.location.value === 'Kokapet' ? KOKAPET_GRADES : MOKILA_GRADES;
  }

  /** Adds the reCAPTCHA script to the page the first time the form is shown. */
  private ensureRecaptchaScript(): void {
    if (!this.isBrowser || document.getElementById(RECAPTCHA_SCRIPT_ID)) {
      return;
    }
    const script = document.createElement('script');
    script.id = RECAPTCHA_SCRIPT_ID;
    script.src = RECAPTCHA_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }

  ngAfterViewInit(): void {
    if (!this.inline || !this.isBrowser) {
      return;
    }
    // L20 (GADS Patch): reCAPTCHA is about 350 KB. It now loads only when the form scrolls into view
    // (or the parent starts typing), so parents who only browse the page never download it.
    if (typeof IntersectionObserver === 'undefined') {
      this.startRecaptcha();
      return;
    }
    this.formObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          this.startRecaptcha();
        }
      },
      // L21: starts when the form itself scrolls into view. The checkbox sits by the Submit button,
      // so it is ready long before the parent has filled in the fields.
      { rootMargin: '0px 0px 50px 0px' }
    );
    // Watch the visible form box: the component's own tag has no size of its own.
    const target = (this.host.nativeElement.querySelector('.admission-inline') as HTMLElement | null) || this.host.nativeElement;
    this.formObserver.observe(target);
  }

  /** L20: loads and shows reCAPTCHA for the on-page form, once. */
  private startRecaptcha(): void {
    if (!this.inline || !this.isBrowser || this.captchaStarted) {
      return;
    }
    this.captchaStarted = true;
    this.formObserver?.disconnect();
    this.formObserver = undefined;
    this.captchaRenderAttempts = 0;
    this.waitForRecaptcha();
  }

  /** The form is visible either as the on-page form or as an open popup. */
  private isActive(): boolean {
    return this.inline || this.showAdmissionModal;
  }

 
openAdmissionModal(): void {
  if (this.showAdmissionModal) {
    return;
  }

  this.showAdmissionModal = true;
  this.errorMessage = '';

  if (this.submitted) {
    this.startAnotherEnquiry();
  }

  document.body.style.overflow = 'hidden';
  this.resetRecaptcha();

  if (this.captchaRenderTimer !== null) {
    clearTimeout(this.captchaRenderTimer);
    this.captchaRenderTimer = null;
  }

  this.captchaRenderAttempts = 0;
  this.waitForRecaptcha();
}

private waitForRecaptcha(): void {
  if (!this.isActive() || !this.isBrowser) {
    return;
  }

  this.ensureRecaptchaScript();

  this.captchaRenderTimer = setTimeout(() => {
    this.captchaRenderTimer = null;

    const container = document.getElementById('admission-recaptcha');

    if (!container) {
      this.waitForRecaptcha();
      return;
    }

    if (
      typeof grecaptcha === 'undefined' ||
      typeof grecaptcha.render !== 'function'
    ) {
      this.captchaRenderAttempts++;

      // The on-page form starts before the reCAPTCHA script may have loaded, so it waits longer.
      if (this.captchaRenderAttempts < (this.inline ? 120 : 20)) {
        this.waitForRecaptcha();
      } else {
        this.errorMessage =
          'reCAPTCHA could not load. Please refresh the page and try again.';
      }

      return;
    }

    this.renderRecaptcha();
  }, 250);
}


 
private renderRecaptcha(): void {
  const container = document.getElementById('admission-recaptcha');

  if (!container || !this.isActive()) {
    return;
  }

  if (
    typeof grecaptcha === 'undefined' ||
    typeof grecaptcha.render !== 'function'
  ) {
    this.errorMessage = 'reCAPTCHA is still loading. Please wait.';

    this.waitForRecaptcha();
    return;
  }

  if (this.captchaWidgetId !== null) {
    grecaptcha.reset(this.captchaWidgetId);
    return;
  }

  try {
    this.captchaWidgetId = grecaptcha.render(container, {
      sitekey: this.recaptchaSiteKey,

      callback: (token: string) => {
        this.recaptchaToken = token;
        this.captchaAttempted = false;
        this.errorMessage = '';
      },

      'expired-callback': () => {
        this.recaptchaToken = '';
      },

      'error-callback': () => {
        this.recaptchaToken = '';
        this.errorMessage =
          'CAPTCHA could not load. Please check your connection and try again.';
      }
    });

    this.errorMessage = '';
  } catch (error) {
    console.error('reCAPTCHA render error:', error);
    this.errorMessage =
      'Unable to display reCAPTCHA. Please refresh the page and try again.';
  }
}


  private resetRecaptcha(): void {
    this.recaptchaToken = '';
    this.captchaAttempted = false;

    if (
      this.captchaWidgetId !== null &&
      typeof grecaptcha !== 'undefined' &&
      typeof grecaptcha.reset === 'function'
    ) {
      grecaptcha.reset(this.captchaWidgetId);
    }
  }

  closeAdmissionModal(): void {
    if (this.submitting) {
      return;
    }

    this.showAdmissionModal = false;
    document.body.style.overflow = '';

    if (this.captchaRenderTimer !== null) {
      clearTimeout(this.captchaRenderTimer);
      this.captchaRenderTimer = null;
    }
  }

  onBackdropClick(): void {
    this.closeAdmissionModal();
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.closeAdmissionModal();
  }

  async submitForm(): Promise<void> {
    this.form.markAllAsTouched();
    this.errorMessage = '';
    this.captchaAttempted = true;

    if (this.parentMissing) {
      this.parentErrorShown = true;
      this.errorMessage = this.form.invalid
        ? 'Some details are missing. Please check the fields marked in red, and fill in the details of at least one parent or guardian.'
        : 'Please fill in the details of at least one parent or guardian.';
      this.scrollToFirstProblem();
      return;
    }

    if (this.form.invalid || this.submitting) {
      if (this.fullForm && !this.submitting) {
        this.errorMessage = 'Some details are missing. Please check the fields marked in red.';
        this.scrollToFirstProblem();
      }
      return;
    }

    if (!this.recaptchaToken) {
      this.errorMessage = 'Please complete the reCAPTCHA verification.';
      return;
    }

    const isScriptUrl = (u: string) => u.startsWith('https://script.google.com/macros/s/') && u.endsWith('/exec');
    const useEnquirySheet = this.fullForm && isScriptUrl(this.fullFormScriptUrl);
    const targetUrl = useEnquirySheet ? this.fullFormScriptUrl : this.scriptUrl;
    if (!isScriptUrl(targetUrl)) {
      this.errorMessage =
        'The Google Sheets integration has not been configured yet.';
      return;
    }

    const values = this.form.getRawValue();

    if (
      !values.studentName?.trim() ||
      (!this.fullForm &&
        (!values.motherName?.trim() ||
          !values.fatherName?.trim() ||
          !values.phoneNumber?.trim() ||
          !values.emailAddress?.trim())) ||
      !values.studentGrade ||
      !values.location
    ) {
      this.errorMessage = 'Please complete all required fields.';
      return;
    }

    if (!['Kokapet', 'Mokila'].includes(values.location)) {
      this.errorMessage = 'Please select a valid campus.';
      return;
    }

    if (
      this.fullForm &&
      (!this.curriculumOptions.some((o) => o.value === values.curriculum) ||
        !this.genderOptions.includes(values.gender) ||
        dobValidator(this.form.controls.dateOfBirth) !== null ||
        !values.dateOfBirth ||
        !values.residentialAddress?.trim())
    ) {
      this.errorMessage = 'Please check the curriculum, gender, date of birth and address.';
      return;
    }

    // L17: on the full form, the main phone and email are those of the first parent filled in.
    const t = (v: unknown) => String(v || '').trim();
    let phone = t(values.phoneNumber);
    let email = t(values.emailAddress);
    let fullDetails: Record<string, string> = {};
    let enquiryNo = '';
    if (this.fullForm) {
      const main = t(values.fatherName) ? 'father' : 'mother';
      phone = t(values[`${main}Mobile`]);
      email = t(values[`${main}Email`]);
      enquiryNo = makeEnquiryNumber(values.location, values.curriculum);
      fullDetails = {
        enquiryNo,
        curriculum: values.curriculum,
        gender: values.gender,
        dateOfBirth: values.dateOfBirth,
        previousSchooling: values.previousSchooling,
        previousSchoolName: t(values.previousSchoolName),
        previousBoard: values.previousBoard || '',
        previousClass: t(values.previousClass),
        siblingAtJgs: values.siblingAtJgs,
        siblingName: t(values.siblingName),
        siblingClassSection: t(values.siblingClassSection),
        fatherQualification: t(values.fatherQualification),
        fatherOrganisation: t(values.fatherOrganisation),
        fatherMobile: t(values.fatherMobile),
        fatherEmail: t(values.fatherEmail),
        motherQualification: t(values.motherQualification),
        motherOrganisation: t(values.motherOrganisation),
        motherMobile: t(values.motherMobile),
        motherEmail: t(values.motherEmail),
        residentialAddress: t(values.residentialAddress).replace(/\s*\n\s*/g, ', '),
        heardFrom: values.heardFrom,
        referralName: t(values.referralName)
      };
    }

    this.submitting = true;

    // L17: the parent's enquiry form PDF, made now so the same file goes to the school and to the parent.
    let pdfBase64 = '';
    if (this.fullForm) {
      this.pdfData = {
        ...fullDetails,
        submittedAt: new Date(),
        campus: values.location,
        curriculumLabel: (this.curriculumOptions.find((o) => o.value === values.curriculum) || { label: values.curriculum }).label,
        studentName: t(values.studentName),
        grade: values.studentGrade,
        fatherName: t(values.fatherName),
        motherName: t(values.motherName)
      } as EnquiryPdfData;
      try {
        // Never hold up the enquiry for long: after 15 seconds it is sent without the PDF.
        this.pdfBytes = await Promise.race([
          this.enquiryPdf.build(this.pdfData),
          new Promise<Uint8Array>((_, reject) => setTimeout(() => reject(new Error('PDF timed out')), 15000))
        ]);
        if (useEnquirySheet) {
          pdfBase64 = toBase64(this.pdfBytes);
        }
      } catch (error) {
        // The enquiry is still sent; the parent can try the download again afterwards.
        console.error('Enquiry PDF error:', error);
        this.pdfBytes = null;
      }
    }

    try {
      await fetch(targetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
          studentName: values.studentName.trim(),
          studentGrade: values.studentGrade,
          motherName: t(values.motherName),
          fatherName: t(values.fatherName),
          phoneNumber: phone,
          emailAddress: email,
          academicYear: '2027-2028',
          location: values.location,
          // L17: sent from the full form only (/enquiry-form). The Google Sheet script stores
          // them once its new columns are added; until then it ignores them.
          ...fullDetails,
          ...(pdfBase64 ? { pdfBase64 } : {}),
          recaptchaToken: this.recaptchaToken,
          // L13: where the parent came from (ad campaign, search, social...) and where they sent the form.
          // Extra fields: the Google Sheet script stores them once its new columns are added.
          ...this.tracking.getAttribution(),
          form_page: window.location.pathname
        })
      });

      // With no-cors, this does not confirm that Apps Script saved the row.
      this.submitted = true;


      // Google Ads conversion, GA4 generate_lead and Meta Lead (brief items T1 and T3).
      this.tracking.enquirySubmitted(values.location, values.studentGrade, this.fullForm ? values.curriculum : undefined);

    } catch (error) {
      console.error('Admission enquiry submission error:', error);
      this.pdfData = null;

      this.errorMessage =
        'Unable to send your enquiry. Please check your connection and try again.';
    } finally {
      this.submitting = false;
    }
  }



  /** L17: builds the parent's enquiry form PDF in the browser and downloads it. */
  async downloadEnquiryPdf(): Promise<void> {
    if (!this.pdfData || this.pdfBusy) {
      return;
    }
    this.pdfBusy = true;
    this.pdfError = '';
    try {
      await this.enquiryPdf.download(this.pdfData, this.pdfBytes || undefined);
      this.tracking.enquiryPdfDownloaded(this.pdfData.campus);
    } catch (error) {
      console.error('Enquiry PDF error:', error);
      this.pdfError = 'The PDF could not be created. Please try again, or contact us on +91 95132 51488.';
    } finally {
      this.pdfBusy = false;
    }
  }

startAnotherEnquiry(): void {
  window.location.reload();
}



  ngOnDestroy(): void {
    this.locationSub?.unsubscribe();
    this.curriculumSub?.unsubscribe();
    this.fullFormSubs.forEach((sub) => sub.unsubscribe());
    this.formObserver?.disconnect();

    if (!this.isBrowser) {
      return;
    }

    document.body.style.overflow = '';

    if (this.captchaRenderTimer !== null) {
      clearTimeout(this.captchaRenderTimer);
    }
  }
}
