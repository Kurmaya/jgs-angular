import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewEncapsulation
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { SeoService } from '../../seo.service';

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

@Component({
  selector: 'app-aboutmission',
  templateUrl: './aboutmission.component.html',
  styleUrls: ['./aboutmission.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutmissionComponent implements OnInit, AfterViewInit {

  constructor(
    private seo: SeoService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    // Title, description, canonical link and social sharing tags.
    this.seo.apply({
      title: 'About Johnson Grammar School | Since 1979 | JGS Kokapet & Mokila, Hyderabad',
      description: 'Johnson Grammar School has educated children in Hyderabad since 1979: 500+ educators, 20,000+ alumni and the IB Diploma at Mallapur since 2008. Now in west Hyderabad at JGS Kokapet (IB PYP) and the new JGS Mokila campus.',
      path: '/about'
    });
  }

  ngAfterViewInit(): void {
    // The slider needs a real browser, so it is skipped while the page is prerendered.
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    new Swiper('.aboutSwiper', {
      modules: [Navigation, Pagination, Autoplay],

      loop: true,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },

      slidesPerView: 1,

      spaceBetween: 20,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },

      breakpoints: {
        768: {
          slidesPerView: 1
        },

        992: {
          slidesPerView:1
        }
      }
    });
  }
}