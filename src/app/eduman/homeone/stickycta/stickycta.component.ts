import { Component, Input } from '@angular/core';
import { TrackingService } from '../../tracking.service';

/**
 * Bar fixed to the bottom of the screen on phones: Call | WhatsApp | Enquire
 * (website change brief item A3). Hidden on tablets and desktops.
 * L23: the numbers can be set per page (/wa uses the JGS Mokila number); the defaults are unchanged.
 */
@Component({
  selector: 'app-stickycta',
  templateUrl: './stickycta.component.html',
  styleUrls: ['./stickycta.component.scss']
})
export class StickyctaComponent {
  @Input() phone = '+919513251488';
  @Input() whatsapp = '918977006304';
  @Input() whatsappText = 'Hello. I would like to know more about the admission process';

  constructor(public tracking: TrackingService) {}

  get whatsappHref(): string {
    return `https://wa.me/${this.whatsapp}?text=${encodeURIComponent(this.whatsappText)}`;
  }
}
