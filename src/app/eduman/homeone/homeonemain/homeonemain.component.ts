import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../seo.service';
import { HOME_SEO } from '../home-content';

@Component({
  selector: 'app-homeonemain',
  templateUrl: './homeonemain.component.html',
  styleUrls: ['./homeonemain.component.scss']
})
export class HomeonemainComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    // Title, description, canonical link, social sharing tags and structured data
    // (website change brief items S2, S3, S5, S6).
    this.seo.apply(HOME_SEO);
  }
}
