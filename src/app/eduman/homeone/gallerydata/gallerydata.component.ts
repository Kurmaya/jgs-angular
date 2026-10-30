import { Component, OnInit, ViewEncapsulation } from '@angular/core';
interface Item {
    imageSrc: string;
    imageAlt: string;
  }
@Component({
  selector: 'app-gallerydata',
  templateUrl: './gallerydata.component.html',
  styleUrls: ['./gallerydata.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GallerydataComponent implements OnInit {
  data: Item[] = [
      {
        imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/01.jpg',
        imageAlt: '1'
      },
      {
        imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/02.jpg',
        imageAlt: '2'
      },
      {
        imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/03.jpg',
        imageAlt: '3'
      },
      {
        imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/04.jpg',
        imageAlt: '4'
      },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
