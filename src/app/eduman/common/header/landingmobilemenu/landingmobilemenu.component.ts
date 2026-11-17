import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-landingmobilemenu',
  templateUrl: './landingmobilemenu.component.html',
  styleUrls: ['./landingmobilemenu.component.scss']
})
export class LandingmobilemenuComponent {
  /**
   * L20: the phone menu library (metis-menu) needs a real browser. It is left out while /home is
   * prerendered and added as soon as the page starts in the browser, as in the main site's menu.
   */
  readonly isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
}
