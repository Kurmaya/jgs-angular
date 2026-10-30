import { Component, ViewEncapsulation } from '@angular/core';
import { TrackingService } from '../../tracking.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeroComponent {
  constructor(public tracking: TrackingService) {}
}
