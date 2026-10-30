import { Component } from '@angular/core';
import { TrackingService } from '../../../tracking.service';

@Component({
  selector: 'app-landingfooter',
  templateUrl: './landingfooter.component.html',
  styleUrls: ['./landingfooter.component.scss']
})
export class LandingfooterComponent {
  constructor(public tracking: TrackingService) {}
}
