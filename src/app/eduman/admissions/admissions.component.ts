import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';
import { TrackingService } from '../tracking.service';
import { ENQUIRY_FAQ, ENQUIRY_SEO } from './admissions-content';

/** Admission Enquiry page (/enquiry-form). */
@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['../curriculumpages/curriculum-pages.scss', './admissions.component.scss']
})
export class AdmissionsComponent implements OnInit {
  readonly faq = ENQUIRY_FAQ;

  constructor(private seo: SeoService, public tracking: TrackingService) {}

  ngOnInit(): void {
    this.seo.apply(ENQUIRY_SEO);
  }
}
