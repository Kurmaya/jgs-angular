import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([ Pagination, Autoplay])

@Component({
  selector: 'app-facilitiesslider',
  templateUrl: './facilitiesslider.component.html',
  styleUrls: ['./facilitiesslider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FacilitiessliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}
