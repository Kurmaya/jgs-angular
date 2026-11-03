import { Component, Inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, ViewportScroller } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { TrackingService } from './eduman/tracking.service';

/** L13: scroll depths reported once per page view. */
const SCROLL_MARKS = [25, 50, 75, 90];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'eduman';

  private firstNavigation = true;
  private scrollMarksSent = new Set<number>();
  private scrollCheckQueued = false;

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
    private tracking: TrackingService,
    private zone: NgZone,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    // Scrolling and tracking only exist in the browser (not during prerendering).
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    // L13: remember where the visitor came from (ad, search, social...) for the enquiry form.
    this.tracking.captureAttribution();

    // Links to a section (e.g. /#enquire) stop below the sticky header instead of under it.
    this.viewportScroller.setOffset([0, 110]);
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.onPageChange(evt.urlAfterRedirects);
      // Leave links to a section (e.g. /#enquire) to the router's anchor scrolling.
      if (evt.urlAfterRedirects.includes('#')) {
        return;
      }
      window.scrollTo(0, 0);
    });

    // L13: scroll depth and PDF clicks. Listeners run outside Angular so they never slow the page down.
    this.zone.runOutsideAngular(() => {
      window.addEventListener('scroll', () => this.queueScrollCheck(), { passive: true });
      document.addEventListener('click', (e) => this.onDocumentClick(e), true);
    });
  }

  /** L13: count the new page in Google Analytics (it does not see moves inside the site by itself). */
  private onPageChange(url: string): void {
    const path = url.split('#')[0].split('?')[0] || '/';
    this.scrollMarksSent.clear();
    if (this.firstNavigation) {
      // The first page of the visit is already counted by the gtag config in index.html.
      this.firstNavigation = false;
      return;
    }
    // Wait for the page to set its own title before sending it.
    setTimeout(() => this.tracking.pageView(path, document.title), 300);
  }

  private queueScrollCheck(): void {
    if (this.scrollCheckQueued) {
      return;
    }
    this.scrollCheckQueued = true;
    window.setTimeout(() => {
      this.scrollCheckQueued = false;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) {
        return;
      }
      const percent = Math.round((window.scrollY / scrollable) * 100);
      for (const mark of SCROLL_MARKS) {
        if (percent >= mark && !this.scrollMarksSent.has(mark)) {
          this.scrollMarksSent.add(mark);
          this.tracking.scrollDepth(mark, window.location.pathname);
        }
      }
    }, 250);
  }

  private onDocumentClick(e: MouseEvent): void {
    const target = e.target as HTMLElement | null;
    const link = target && target.closest ? (target.closest('a[href]') as HTMLAnchorElement | null) : null;
    if (!link) {
      return;
    }
    const href = link.getAttribute('href') || '';
    if (!/\.pdf(\?|#|$)/i.test(href)) {
      return;
    }
    // Prospectus downloads after an enquiry are already counted as "prospectus_download".
    if (link.closest('.prospectus-downloads')) {
      return;
    }
    const fileName = decodeURIComponent(href.split('/').pop() || href).split('?')[0];
    this.tracking.pdfOpened(fileName, (link.textContent || '').trim().slice(0, 80), window.location.pathname);
  }
}
