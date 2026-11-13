import { Injectable } from '@angular/core';

/**
 * L17: the parent's copy of the enquiry form as a PDF, made in the browser after they submit /enquiry-form.
 *
 * The PDF is built on the parent's phone or computer from what they typed; a copy goes to the school's enquiry Sheet.
 * The PDF tools (pdf-lib, fontkit), the fonts and the header artwork are in src/assets/enquiry-pdf/ and are
 * loaded in the background once the parent starts filling in the form, so they do not slow the page down.
 * The PDF is made when the form is sent: the same file goes to the school's enquiry Sheet and to the parent.
 */
export interface EnquiryPdfData {
  enquiryNo: string;
  submittedAt: Date;
  campus: string;
  curriculum: string;
  curriculumLabel: string;
  studentName: string;
  gender: string;
  dateOfBirth: string;
  grade: string;
  previousSchooling: string;
  previousSchoolName: string;
  previousBoard: string;
  previousClass: string;
  siblingAtJgs: string;
  siblingName: string;
  siblingClassSection: string;
  fatherName: string;
  fatherQualification: string;
  fatherOrganisation: string;
  fatherMobile: string;
  fatherEmail: string;
  motherName: string;
  motherQualification: string;
  motherOrganisation: string;
  motherMobile: string;
  motherEmail: string;
  residentialAddress: string;
  heardFrom: string;
  referralName: string;
}

const BASE = 'assets/enquiry-pdf/';
const SCRIPTS = ['pdf-lib.min.js', 'fontkit.min.js', 'enquiry-pdf.js'];

@Injectable({ providedIn: 'root' })
export class EnquiryPdfService {
  private scriptsLoaded?: Promise<void>;

  /** Builds the PDF and starts the download (on iPhones it opens in the PDF viewer, from where it can be saved). */
  async download(data: EnquiryPdfData, ready?: Uint8Array): Promise<void> {
    const bytes = ready || (await this.build(data));
    const blob = new Blob([bytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `JGS-Enquiry-Form-${data.enquiryNo}.pdf`;
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 60000);
  }

  /** Starts loading the PDF tools in the background (when the parent starts the form). */
  preload(): void {
    this.loadScripts().catch(() => {
      // Tried again when the PDF is needed.
    });
  }

  async build(data: EnquiryPdfData): Promise<Uint8Array> {
    await this.loadScripts();
    const header = data.campus === 'Kokapet' ? 'header-kokapet.png' : 'header-mokila.png';
    const [headerBytes, regular, medium, semibold] = await Promise.all(
      [header, 'Poppins-Regular.ttf', 'Poppins-Medium.ttf', 'Poppins-SemiBold.ttf'].map((f) => this.fetchBytes(f))
    );
    const w = window as any;
    return w.JGSEnquiryPdf.buildEnquiryPdf(w.PDFLib, w.fontkit, { header: headerBytes, fonts: { regular, medium, semibold } }, data);
  }

  private async fetchBytes(file: string): Promise<ArrayBuffer> {
    const res = await fetch(BASE + file);
    if (!res.ok) {
      throw new Error(`Could not load ${file} (${res.status})`);
    }
    return res.arrayBuffer();
  }

  /** Adds the three scripts once, in order. */
  private loadScripts(): Promise<void> {
    if (!this.scriptsLoaded) {
      this.scriptsLoaded = SCRIPTS.reduce(
        (chain, file) => chain.then(() => this.addScript(BASE + file)),
        Promise.resolve()
      ).catch((error) => {
        this.scriptsLoaded = undefined; // allow a retry
        throw error;
      });
    }
    return this.scriptsLoaded;
  }

  private addScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Could not load ${src}`));
      document.head.appendChild(script);
    });
  }
}
