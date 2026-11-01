import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../seo.service';
import { TrackingService } from '../../tracking.service';
import { IB_FAQ, IB_SEO } from '../curriculum-content';

/** IB page (/curriculum/ib): JGS Kokapet (PYP, authorised) and JGS Mokila (planned PYP, MYP, DP). */
@Component({
  selector: 'app-curriculumib',
  templateUrl: './curriculumib.component.html',
  styleUrls: ['../curriculum-pages.scss']
})
export class CurriculumibComponent implements OnInit {
  readonly faq = IB_FAQ;

  constructor(private seo: SeoService, public tracking: TrackingService) {}

  ngOnInit(): void {
    this.seo.apply(IB_SEO);
  }
}
