import { animate, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

/** L8: the home page gallery shows only the planned JGS Mokila campus (architect's renders). */
const MOKILA_ITEMS: Item[] = [
  { imageSrc: 'assets/img/whatsinaname/GalleryNew/Mokila2.jpeg', imageAlt: 'JGS Mokila campus from above (artist’s impression)' },
  { imageSrc: 'assets/img/whatsinaname/GalleryNew/Mokila.jpeg', imageAlt: 'JGS Mokila campus entrance (artist’s impression)' },
  { imageSrc: 'assets/img/whatsinaname/GalleryNew/Mokila3.jpeg', imageAlt: 'JGS Mokila school buildings and playing field (artist’s impression)' },
  { imageSrc: 'assets/img/whatsinaname/GalleryNew/mokila/mokila-atrium.jpg', imageAlt: 'JGS Mokila central atrium (artist’s impression)' },
  { imageSrc: 'assets/img/whatsinaname/GalleryNew/mokila/mokila-library.jpg', imageAlt: 'JGS Mokila library (artist’s impression)' },
  { imageSrc: 'assets/img/whatsinaname/GalleryNew/mokila/mokila-early-years.jpg', imageAlt: 'JGS Mokila Early Years classroom (artist’s impression)' }
];

@Component({
  selector: 'app-galleryhome',
  templateUrl: './galleryhome.component.html',
  styleUrls: ['./galleryhome.component.scss'],
  animations:[
    trigger('animation',[
      transition('void => visible',[
        style({transform:'scale(0.5)'}),
        animate('150ms',style({transform:'scale(1)'}))
      ]),
      transition('visible => void',[
        style({transform:'scale(1)'}),
        animate('150ms',style({transform:'scale(0.5)'}))
      ]),
    ]),
    trigger('animation2',[
      transition(':leave',[
        style({opacity:1}),
        animate('50ms',style({opacity:0.8}))
      ]),
      transition('visible => void',[
        style({transform:'scale(1)'}),
        animate('150ms',style({transform:'scale(0.5)'}))
      ]),
    ]),
  ],
  encapsulation: ViewEncapsulation.None
})
export class GalleryHomeComponent implements OnInit {
  @Input() showCount = false;
  /** true: show only the JGS Mokila campus renders (home page). */
  @Input() mokilaOnly = false;
  data: Item[] = [
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/Mokila.jpeg',
      imageAlt: '21'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/Mokila2.jpeg',
      imageAlt: '22'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/Mokila3.jpeg',
      imageAlt: '23'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/Auditorium.jpeg',
      imageAlt: '24'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/library.jpg',
      imageAlt: '25'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/03.jpg',
      imageAlt: '26'
    },
];
dataPreview: Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/Mokila.jpeg',
    imageAlt: '21'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/Mokila2.jpeg',
    imageAlt: '22'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/Mokila3.jpeg',
    imageAlt: '23'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/Auditorium.jpeg',
    imageAlt: '24'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/library.jpg',
    imageAlt: '25'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/03.jpg',
    imageAlt: '26'
  },
];
previewImage = false;
showMask=false;
currentLightBoxImage: Item = this.data[0];
currentIndex=0;
controls =true;
totalImageCount = 0;
  constructor() { }

  ngOnInit(): void {
   if (this.mokilaOnly) {
     this.data = MOKILA_ITEMS;
     this.dataPreview = MOKILA_ITEMS;
     this.currentLightBoxImage = this.data[0];
   }
   this.totalImageCount = this.data.length;
  }
  onPreviewImage(index: number): void {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightBoxImage = this.dataPreview[index];
  }
  onAnimationEnd(event: AnimationEvent){
    if(event.toState==='void'){
      this.showMask=false;
    }
  }
  onClosePreview(){
    this.previewImage=false;
  }
  next(): void {
    this.currentIndex=this.currentIndex + 1;
    if(this.currentIndex > this.dataPreview.length - 1){
      this.currentIndex=0;
    }
    this.currentLightBoxImage = this.dataPreview[this.currentIndex];
  }
  prev(): void {
    this.currentIndex=this.currentIndex - 1;
    if(this.currentIndex < 0){
      this.currentIndex = this.dataPreview.length - 1;
    }
    this.currentLightBoxImage = this.dataPreview[this.currentIndex];
  }
}
