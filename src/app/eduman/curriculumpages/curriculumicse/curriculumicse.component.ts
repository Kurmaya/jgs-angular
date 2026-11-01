import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../seo.service';
import { TrackingService } from '../../tracking.service';
import { ICSE_FAQ, ICSE_SEO } from '../curriculum-content';

/** ICSE page (/curriculum/icse): the ICSE planned at JGS Mokila, Grades 1 to 7, from 2027-28. */
@Component({
  selector: 'app-curriculumicse',
  templateUrl: './curriculumicse.component.html',
  styleUrls: ['../curriculum-pages.scss']
})
export class CurriculumicseComponent implements OnInit {
  readonly faq = ICSE_FAQ;

  constructor(private seo: SeoService, public tracking: TrackingService) {}

  ngOnInit(): void {
    this.seo.apply(ICSE_SEO);
  }
}
