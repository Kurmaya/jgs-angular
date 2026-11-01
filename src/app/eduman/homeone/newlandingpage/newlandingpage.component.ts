
import {
  Component,
  OnInit,
  Renderer2,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-newlandingpage',
  templateUrl: './newlandingpage.component.html',
  styleUrls: ['./newlandingpage.component.scss']
})
export class NewlandingpageComponent implements OnInit {

  private readonly googleAdsId = 'AW-16775346810';

  constructor(
    private seo: SeoService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    // /home is the Google Ads landing page. Keep it out of search results (brief item A2):
    // the main home page (/) is the page to rank.
    this.seo.apply({
      title: 'Admissions 2027\u201328 | JGS Kokapet, IB PYP School, Hyderabad',
      description: 'Admissions open at JGS Kokapet, an IB World School for the Primary Years Programme, Nursery to Grade 5, in Hyderabad. Part of Johnson Grammar School since 1979. Enquire today.',
      path: '/home',
      robots: 'noindex, follow'
    });

    // Google Ads tag for the second account (brief item A8: the school is confirming
    // which account runs the campaigns; remove this if AW-16775346810 is not in use).
    this.loadGoogleAds();
  }

  private loadGoogleAds(): void {

    // Browser-only execution
    if (!isPlatformBrowser(this.platformId)) return;

    const win = this.document.defaultView as any;
    if (!win) return;

    // Initialize Google dataLayer
    win.dataLayer = win.dataLayer || [];

    // Define gtag if it doesn't exist
    if (typeof win.gtag !== 'function') {
      win.gtag = function() {
        win.dataLayer.push(arguments);
      };

      win.gtag('js', new Date());
    }

    // Prevent duplicate script injection
    const scriptId = 'google-ads-gtag';

    if (!this.document.getElementById(scriptId)) {

      const script = this.renderer.createElement('script');

      script.id = scriptId;
      script.async = true;
      script.src =
        `https://www.googletagmanager.com/gtag/js?id=${this.googleAdsId}`;

      this.renderer.appendChild(this.document.head, script);
    }

    // Configure Google Ads tracking
    win.gtag('config', this.googleAdsId);
  }
}
