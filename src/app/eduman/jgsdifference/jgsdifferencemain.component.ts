import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-jgsdifferencemain',
  templateUrl: './jgsdifferencemain.component.html',
  styleUrls: ['./jgsdifferencemain.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JgsdifferencemainComponent implements OnInit {

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    // Title, description, canonical link and social sharing tags.
    // (The old code set the description under a misspelt name, "decription", so Google never saw it.)
    this.seo.apply({
      title: 'The JGS Difference | Small Classes, Safety & Care | JGS Kokapet & Mokila',
      description: 'Why parents choose Johnson Grammar School in Hyderabad: a maximum of 24 students per class, background-verified staff, CCTV, a POCSO policy, GPS-tracked buses and 47 years of experience.',
      path: '/jgsdifference',
      shareTitle: 'The JGS Difference | Johnson Grammar School, Hyderabad',
      shareDescription: 'Small classes of up to 24, child safety first, and 47 years of experience in Hyderabad.'
    });
  }
}
