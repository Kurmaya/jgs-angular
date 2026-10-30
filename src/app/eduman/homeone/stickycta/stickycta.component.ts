import { Component } from '@angular/core';
import { TrackingService } from '../../tracking.service';

/**
 * Bar fixed to the bottom of the screen on phones: Call | WhatsApp | Enquire
 * (website change brief item A3). Hidden on tablets and desktops.
 */
@Component({
  selector: 'app-stickycta',
  templateUrl: './stickycta.component.html',
  styleUrls: ['./stickycta.component.scss']
})
export class StickyctaComponent {
  constructor(public tracking: TrackingService) {}
}
