import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../seo.service';
import { CURRICULUM_HUB_SEO } from '../curriculum-content';

/** /curriculum: landing page with links to the IB and ICSE pages. */
@Component({
  selector: 'app-curriculumhub',
  templateUrl: './curriculumhub.component.html',
  styleUrls: ['../curriculum-pages.scss']
})
export class CurriculumhubComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.apply(CURRICULUM_HUB_SEO);
  }
}
