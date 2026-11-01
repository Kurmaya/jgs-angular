import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Google Ads conversion action fired when an admission enquiry is submitted
 * successfully. This is the same conversion that used to fire on every page
 * load from index.html (brief item T1).
 */
const GOOGLE_ADS_ENQUIRY_CONVERSION = 'AW-11049467860/buKACKmD7IUYENT_5ZQp';

/** The site's Google Analytics 4 property (configured in src/index.html). */
const GA4_ID = 'G-QEZM6GNZ4W';

/** L13: where the parent came from (ad click, search, social, ...), kept in the browser for 90 days. */
const ATTRIBUTION_KEY = 'jgs_attribution';
const ATTRIBUTION_DAYS = 90;
const AD_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid', 'fbclid'];

export interface Attribution {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  gclid: string;
  gbraid: string;
  wbraid: string;
  fbclid: string;
  landing_page: string;
  referrer: string;
  first_seen: string;
}

/**
 * Sends enquiry and contact events to Google Ads, Google Analytics 4,
 * the Meta Pixel and the Google Tag Manager dataLayer.
 *
 * These events are fired directly from the site. If you also create tags for
 * them in Google Tag Manager, remove the matching direct calls here first,
 * or they will be counted twice.
 */
@Injectable({ providedIn: 'root' })
export class TrackingService {
  private readonly isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  /** Call once, after an admission enquiry has been submitted successfully. */
  enquirySubmitted(campus: string, grade: string): void {
    const w = this.win();
    if (!w) {
      return;
    }
    this.pushDataLayer({ event: 'enquiry_submitted', campus, grade });
    if (typeof w.gtag === 'function') {
      w.gtag('event', 'conversion', { send_to: GOOGLE_ADS_ENQUIRY_CONVERSION });
      w.gtag('event', 'generate_lead', { campus, grade });
    }
    if (typeof w.fbq === 'function') {
      w.fbq('track', 'Lead', { content_name: `Admission enquiry - ${campus}` });
    }
  }

  /** Call when a parent downloads a prospectus after submitting the enquiry form. */
  prospectusDownloaded(campus: string): void {
    const w = this.win();
    if (!w) {
      return;
    }
    this.pushDataLayer({ event: 'prospectus_download', campus });
    if (typeof w.gtag === 'function') {
      w.gtag('event', 'prospectus_download', { campus });
    }
  }

  /** Call after a message is sent from the Contact Us form (not an admission enquiry, so no Ads conversion). */
  contactMessageSent(): void {
    const w = this.win();
    if (!w) {
      return;
    }
    this.pushDataLayer({ event: 'contact_message' });
    if (typeof w.gtag === 'function') {
      w.gtag('event', 'contact_message');
    }
  }

  /**
   * L13: page view for moves between pages inside the site. The first page of a visit is counted
   * by the gtag config in index.html; Google Analytics does not see the later pages by itself.
   */
  pageView(path: string, title: string): void {
    const w = this.win();
    if (!w) {
      return;
    }
    this.pushDataLayer({ event: 'virtual_page_view', page_path: path, page_title: title });
    if (typeof w.gtag === 'function') {
      w.gtag('event', 'page_view', {
        send_to: GA4_ID,
        page_location: w.location.origin + path,
        page_path: path,
        page_title: title
      });
    }
  }

  /** L13: the parent scrolled this far down the page (25, 50, 75 or 90 per cent). */
  scrollDepth(percent: number, path: string): void {
    const w = this.win();
    if (!w) {
      return;
    }
    this.pushDataLayer({ event: 'scroll_depth', percent_scrolled: percent, page_path: path });
    if (typeof w.gtag === 'function') {
      w.gtag('event', 'scroll_depth', { percent_scrolled: percent, page_path: path });
    }
  }

  /** L13: the parent started filling in the admission enquiry form (first field touched). */
  enquiryFormStarted(path: string): void {
    const w = this.win();
    if (!w) {
      return;
    }
    this.pushDataLayer({ event: 'enquiry_form_start', form_page: path });
    if (typeof w.gtag === 'function') {
      w.gtag('event', 'enquiry_form_start', { form_page: path });
    }
  }

  /** L13: a PDF (prospectus, fee structure, policy) was opened from a link. */
  pdfOpened(fileName: string, linkText: string, path: string): void {
    const w = this.win();
    if (!w) {
      return;
    }
    const campus = /mokila/i.test(fileName) ? 'Mokila' : /brochure|prospectus/i.test(fileName) ? 'Kokapet' : '';
    const data = { file_name: fileName, link_text: linkText, page_path: path, campus };
    this.pushDataLayer({ event: 'pdf_open', ...data });
    if (typeof w.gtag === 'function') {
      w.gtag('event', 'pdf_open', data);
    }
  }

  /**
   * L13: remember where this visitor came from (ad, search, social, referral, direct).
   * A new ad or campaign link replaces what was stored; a plain visit keeps the earlier source.
   * Call once when the site loads.
   */
  captureAttribution(): void {
    const w = this.win();
    if (!w) {
      return;
    }
    try {
      const params = new URLSearchParams(w.location.search);
      const hasAdParams = AD_PARAMS.some((k) => params.get(k));
      const stored = this.readAttribution();
      if (stored && !hasAdParams) {
        return;
      }
      const a: Attribution = {
        utm_source: '', utm_medium: '', utm_campaign: '', utm_term: '', utm_content: '',
        gclid: '', gbraid: '', wbraid: '', fbclid: '',
        landing_page: w.location.pathname,
        referrer: (w.document.referrer || '').slice(0, 200),
        first_seen: new Date().toISOString()
      };
      AD_PARAMS.forEach((k) => ((a as any)[k] = (params.get(k) || '').slice(0, 200)));
      w.localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(a));
    } catch {
      // Storage blocked (private mode etc.): attribution is simply not recorded.
    }
  }

  /** L13: the stored source, sent with an admission enquiry. Empty values if unknown. */
  getAttribution(): Attribution {
    const empty: Attribution = {
      utm_source: '', utm_medium: '', utm_campaign: '', utm_term: '', utm_content: '',
      gclid: '', gbraid: '', wbraid: '', fbclid: '', landing_page: '', referrer: '', first_seen: ''
    };
    return { ...empty, ...(this.readAttribution() || {}) };
  }

  private readAttribution(): Attribution | null {
    const w = this.win();
    try {
      const raw = w ? w.localStorage.getItem(ATTRIBUTION_KEY) : null;
      if (!raw) {
        return null;
      }
      const a = JSON.parse(raw) as Attribution;
      const age = Date.now() - new Date(a.first_seen).getTime();
      return age >= 0 && age < ATTRIBUTION_DAYS * 86400000 ? a : null;
    } catch {
      return null;
    }
  }

  /** Call when a parent taps a phone or WhatsApp link. */
  contactClicked(method: 'call' | 'whatsapp'): void {
    const w = this.win();
    if (!w) {
      return;
    }
    const eventName = method === 'call' ? 'call_click' : 'whatsapp_click';
    this.pushDataLayer({ event: eventName });
    if (typeof w.gtag === 'function') {
      w.gtag('event', eventName);
    }
    if (typeof w.fbq === 'function') {
      w.fbq('track', 'Contact', { content_name: method });
    }
  }

  private pushDataLayer(data: Record<string, unknown>): void {
    const w = this.win();
    if (!w) {
      return;
    }
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push(data);
  }

  private win(): any {
    return this.isBrowser && typeof window !== 'undefined' ? (window as any) : null;
  }
}
