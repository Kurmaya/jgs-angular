import { animate, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-gallerylanding',
  templateUrl: './gallerylanding.component.html',
  styleUrls: ['./gallerylanding.component.scss'],
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
export class GallerylandingComponent implements OnInit {
  @Input() showCount = false;
  data: Item[] = [
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/01.jpg',
      imageAlt: '01'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/02.jpg',
      imageAlt: '02'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/03.jpg',
      imageAlt: '03'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/04.jpg',
      imageAlt: '03'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/05.jpg',
      imageAlt: '03'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/06.jpg',
      imageAlt: '03'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/07.jpg',
      imageAlt: '03'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/08.jpg',
      imageAlt: '03'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/09.jpg',
      imageAlt: '03'
    },
];
dataPreview: Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/04.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/05.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/06.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/07.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/08.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/09.jpg',
    imageAlt: '03'
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
