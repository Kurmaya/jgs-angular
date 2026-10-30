
import {
  Component,
  OnInit,
  Renderer2,
  Inject
} from '@angular/core';

import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-newlandingpage',
  templateUrl: './newlandingpage.component.html',
  styleUrls: ['./newlandingpage.component.scss']
})
export class NewlandingpageComponent implements OnInit {

  loader = true;

  private readonly googleAdsId = 'AW-16775346810';

  constructor(
    private title: Title,
    private meta: Meta,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {

    // SEO title
    this.title.setTitle(
      'Best International School in Mokila, Kokapet, HYD | Admissions | Academy'
    );

    // SEO description
    this.meta.updateTag({
      name: 'description',
      content: 'Johnson Grammar School offers all the required amenities. Best IB School in Mokila, Kokapet, Hyderabad. Careers | School Fees | Staff Directory | Admissions'
    });

    // Load Google Ads tag
    this.loadGoogleAds();

    // Existing loader
    setTimeout(() => {
      this.loader = false;
    }, 1000);
  }

  private loadGoogleAds(): void {

    const win = this.document.defaultView as any;

    // Browser-only execution
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
