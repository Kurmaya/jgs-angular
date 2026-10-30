import {
  AfterViewInit,
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { Meta, Title } from '@angular/platform-browser';

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

@Component({
  selector: 'app-aboutmission',
  templateUrl: './aboutmission.component.html',
  styleUrls: ['./aboutmission.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutmissionComponent implements OnInit, AfterViewInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle(
      'International Schools in Kokapet | Top Schools in Narsingi - JGS'
    );

    this.meta.addTag({
      name: 'description',
      content:
        'Johnson Grammar School is the best international school in Kokapet. They have been transforming childrens lives for 40 years. Uniquely, their world-class educators impart the finest experiential learning along with classroom learning.'
    });
  }

  ngAfterViewInit(): void {
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