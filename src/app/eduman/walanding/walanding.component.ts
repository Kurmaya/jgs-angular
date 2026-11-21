import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SeoService, SITE_ORIGIN } from '../seo.service';
import { TrackingService } from '../tracking.service';
import { ENQUIRY_SHEET_URL } from '../enquiry-form/enquiry-form.component';

/** L23: the visitor's id and earlier visit, kept in this browser only (no personal details). */
const WA_VISITOR_KEY = 'jgs_wa_visitor';

/** L23: JGS Mokila admissions phone, used for Call and WhatsApp on this page. */
export const MOKILA_PHONE = '+919000287940';

/**
 * L23 (21 Nov 2026): /wa, the landing page for the school's JGS Mokila WhatsApp message campaign.
 *
 * - The link in the message is https://jgschool.in/wa (one link, no batch numbers: school decision).
 * - Each visit is counted in the "WhatsApp visits" tab of the "JGS Enquiry Form 2027-28" Sheet;
 *   the "WhatsApp summary" tab totals clicks and enquiries, overall and per day.
 * - Enquiries sent from here carry source "whatsapp" and campaign "wa-mokila", so they can be told
 *   apart in the Quick enquiries tab.
 * - WhatsApp's link preview fetches the page without running scripts, so previews are not counted.
 * - The page is pre-built (prerender) so the preview card has its own title, text and image,
 *   and it is kept out of Google (noindex).
 */
@Component({
  selector: 'app-walanding',
  templateUrl: './walanding.component.html',
  styleUrls: ['./walanding.component.scss']
})
export class WalandingComponent implements OnInit {
  readonly phone = MOKILA_PHONE;
  readonly phoneLabel = '+91 90002 87940';
  readonly whatsapp = MOKILA_PHONE.replace('+', '');
  readonly whatsappText = 'Hello. I would like to know more about admissions at JGS Mokila for 2027-28.';
  readonly whatsappHref = `https://wa.me/${this.whatsapp}?text=${encodeURIComponent(this.whatsappText)}`;
  readonly year = new Date().getFullYear();

  private readonly isBrowser: boolean;

  constructor(
    private seo: SeoService,
    public tracking: TrackingService,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.seo.apply({
      title: 'Admissions open 2027–28 | JGS Mokila, Hyderabad',
      description: 'Johnson Grammar School, shaping young minds in Hyderabad for 47 years, now opens at Mokila. ' +
        'Admissions open for 2027–28, Nursery to Grade 7. Enquire for a call back.',
      shareTitle: 'Admissions open 2027–28 at JGS Mokila',
      shareDescription: 'Johnson Grammar School, 47 years in Hyderabad, now opens at Mokila. ' +
        'Nursery to Grade 7. Enquire for a call back.',
      shareImage: `${SITE_ORIGIN}/assets/img/wa/mokila-share.jpg`,
      path: '/wa',
      robots: 'noindex, follow'
    });

    if (this.isBrowser) {
      this.countVisit();
    }
  }

  private countVisit(): void {
    const campaign = 'wa-mokila';

    // Enquiries sent from this visit are marked as coming from the WhatsApp campaign.
    // A link that carries its own utm_ tags keeps them.
    const params = new URLSearchParams(window.location.search);
    if (!params.get('utm_source')) {
      this.tracking.setAttribution({ utm_source: 'whatsapp', utm_medium: 'message', utm_campaign: campaign });
    }

    let visitorId = '';
    let returning = false;
    try {
      const saved = JSON.parse(window.localStorage.getItem(WA_VISITOR_KEY) || 'null');
      if (saved && typeof saved.id === 'string') {
        visitorId = saved.id;
        returning = true;
      }
    } catch { /* storage blocked: counted as a new visitor */ }
    if (!visitorId) {
      visitorId = Math.random().toString(36).slice(2, 10);
    }
    try {
      window.localStorage.setItem(WA_VISITOR_KEY, JSON.stringify({ id: visitorId, last: new Date().toISOString() }));
    } catch { /* ignore */ }

    const phone = window.matchMedia && window.matchMedia('(max-width: 767px)').matches;
    const visit = {
      formType: 'visit',
      page: '/wa',
      visit: returning ? 'Return visit' : 'New visitor',
      device: phone ? 'Phone' : 'Computer / tablet',
      visitorId,
      referrer: (document.referrer || '').slice(0, 200)
    };
    fetch(ENQUIRY_SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      keepalive: true,
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(visit)
    }).catch(() => { /* a missed count never affects the parent */ });

    this.tracking.pageEvent('wa_landing_visit', { campaign });
  }
}
