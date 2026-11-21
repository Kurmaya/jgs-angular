import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FacilitesComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    // Title, description, canonical link and social sharing tags.
    // (The old code set the description under a misspelt name, "decription", so search engines never saw it.)
    this.seo.apply({
      title: 'Facilities | Johnson Grammar School Kokapet & Mokila, Hyderabad',
      description: 'Facilities at JGS Kokapet and JGS Mokila, Hyderabad: CCTV across campus, trained security guards, a full-time nurse and annual health checkups, air-conditioned GPS-tracked buses, an amphitheatre, a library and play areas.',
      path: '/facilities'
    });
  }

}
