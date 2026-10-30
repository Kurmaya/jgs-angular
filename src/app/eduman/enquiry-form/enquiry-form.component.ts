
import {
  Component,
  HostListener,
  OnDestroy
} from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

declare const grecaptcha: any;

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.scss']
})
export class EnquiryFormComponent implements OnDestroy {
  private readonly scriptUrl =
    'https://script.google.com/macros/s/AKfycbzhNZeGQy2r5D8UAYjzRvqpPVP4ZBop58JvHHzEDVVkVSjO_gTAIoV9J-qiEriejbW9/exec';

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

  grades: string[] = [
    'Nursery',
    'PP1',
    'PP2',
    'Grade 1',
    'Grade 2',
    'Grade 3',
    'Grade 4',
    'Grade 5',
    'Grade 6',
    'Grade 7',
    'Grade 8',
    'Grade 9',
    'Grade 10',
    'Grade 11',
    'Grade 12'
  ];

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
    location: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

 
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
  if (!this.showAdmissionModal) {
    return;
  }

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

      if (this.captchaRenderAttempts < 20) {
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

  if (!container || !this.showAdmissionModal) {
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

    if (this.form.invalid || this.submitting) {
      return;
    }

    if (!this.recaptchaToken) {
      this.errorMessage = 'Please complete the reCAPTCHA verification.';
      return;
    }

    if (
      !this.scriptUrl.startsWith('https://script.google.com/macros/s/') ||
      !this.scriptUrl.endsWith('/exec')
    ) {
      this.errorMessage =
        'The Google Sheets integration has not been configured yet.';
      return;
    }

    const values = this.form.getRawValue();

    if (
      !values.studentName?.trim() ||
      !values.motherName?.trim() ||
      !values.fatherName?.trim() ||
      !values.phoneNumber?.trim() ||
      !values.emailAddress?.trim() ||
      !values.studentGrade ||
      !values.location
    ) {
      this.errorMessage = 'Please complete all required fields.';
      return;
    }

    if (!['Kokapet', 'Mokila'].includes(values.location)) {
      this.errorMessage = 'Please select a valid school location.';
      return;
    }

    this.submitting = true;

    try {
      await fetch(this.scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
          studentName: values.studentName.trim(),
          studentGrade: values.studentGrade,
          motherName: values.motherName.trim(),
          fatherName: values.fatherName.trim(),
          phoneNumber: values.phoneNumber.trim(),
          emailAddress: values.emailAddress.trim(),
          academicYear: '2027-2028',
          location: values.location,
          recaptchaToken: this.recaptchaToken
        })
      });

      // With no-cors, this does not confirm that Apps Script saved the row.
      this.submitted = true;

    } catch (error) {
      console.error('Admission enquiry submission error:', error);

      this.errorMessage =
        'Unable to send your enquiry. Please check your connection and try again.';
    } finally {
      this.submitting = false;
    }
  }



startAnotherEnquiry(): void {
  window.location.reload();
}



  ngOnDestroy(): void {
    document.body.style.overflow = '';

    if (this.captchaRenderTimer !== null) {
      clearTimeout(this.captchaRenderTimer);
    }
  }
}
