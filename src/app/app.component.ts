import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'eduman';

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    // Scrolling only exists in the browser (not during prerendering).
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      // Leave links to a section (e.g. /#enquire) to the router's anchor scrolling.
      if (evt.urlAfterRedirects.includes('#')) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
