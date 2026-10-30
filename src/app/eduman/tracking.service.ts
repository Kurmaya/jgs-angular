import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Google Ads conversion action fired when an admission enquiry is submitted
 * successfully. This is the same conversion that used to fire on every page
 * load from index.html (brief item T1).
 */
const GOOGLE_ADS_ENQUIRY_CONVERSION = 'AW-11049467860/buKACKmD7IUYENT_5ZQp';

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
