import { animate, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

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
