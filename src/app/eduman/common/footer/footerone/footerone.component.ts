import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TrackingService } from '../../../tracking.service';

@Component({
  selector: 'app-footerone',
  templateUrl: './footerone.component.html',
  styleUrls: ['./footerone.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooteroneComponent implements OnInit {

  constructor(public tracking: TrackingService) { }

  ngOnInit(): void {
    
  }

}
