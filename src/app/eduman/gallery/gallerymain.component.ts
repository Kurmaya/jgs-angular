import { animate, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-gallerymain',
  templateUrl: './gallerymain.component.html',
  styleUrls: ['./gallerymain.component.scss'],
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
export class GallerymainComponent implements OnInit {
  @Input() showCount = false;
  currDiv: any = null;
  showblock: boolean = true;

  BookDay: Item[] = [
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/BookDay/03.jpg',
      imageAlt: '03'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/BookDay/10.jpg',
      imageAlt: '10'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/BookDay/12.jpg',
      imageAlt: '12'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/BookDay/14.jpg',
      imageAlt: '14'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/BookDay/15.jpg',
      imageAlt: '15'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/BookDay/19.jpg',
      imageAlt: '19'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/BookDay/22.jpg',
      imageAlt: '22'
    }
  ]

  bookDayPreview: Item[] = [
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/BookDay/03.jpg',
      imageAlt: '03'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/BookDay/10.jpg',
      imageAlt: '10'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/BookDay/12.jpg',
      imageAlt: '12'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/BookDay/14.jpg',
      imageAlt: '14'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/BookDay/15.jpg',
      imageAlt: '15'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/BookDay/19.jpg',
      imageAlt: '19'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/BookDay/22.jpg',
      imageAlt: '22'
    },
  ]

  Zoo: Item[] = [
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Zoo/01.jpg',
      imageAlt: '01'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Zoo/02.jpg',
      imageAlt: '02'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Zoo/04.jpg',
      imageAlt: '04'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Zoo/06.jpg',
      imageAlt: '06'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Zoo/07.jpg',
      imageAlt: '07'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Zoo/08.jpg',
      imageAlt: '08'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Zoo/09.jpg',
      imageAlt: '09'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Zoo/10.jpg',
      imageAlt: '10'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Zoo/11.jpg',
      imageAlt: '11'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Zoo/12.jpg',
      imageAlt: '12'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Zoo/13.jpg',
      imageAlt: '13'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Zoo/14.jpg',
      imageAlt: '14'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Zoo/15.jpg',
      imageAlt: '15'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Zoo/16.jpg',
      imageAlt: '16'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Zoo/17.jpg',
      imageAlt: '17'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Zoo/18.jpg',
      imageAlt: '18'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Zoo/20.jpg',
      imageAlt: '20'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Zoo/21.jpg',
      imageAlt: '21'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Zoo/22.jpg',
      imageAlt: '22'
    },
  ]

  zooPreview: Item[] = [
     {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Zoo/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Zoo/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Zoo/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Zoo/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Zoo/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Zoo/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Zoo/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Zoo/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Zoo/11.jpg',
    imageAlt: '11'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Zoo/12.jpg',
    imageAlt: '12'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Zoo/13.jpg',
    imageAlt: '13'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Zoo/14.jpg',
    imageAlt: '14'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Zoo/15.jpg',
    imageAlt: '15'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Zoo/16.jpg',
    imageAlt: '16'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Zoo/17.jpg',
    imageAlt: '17'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Zoo/18.jpg',
    imageAlt: '18'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Zoo/20.jpg',
    imageAlt: '20'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Zoo/21.jpg',
    imageAlt: '21'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Zoo/22.jpg',
    imageAlt: '22'
  },
  ]

  YogaDay: Item[] = [
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/YogaDay/01.jpg',
      imageAlt: '01'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/YogaDay/02.jpg',
      imageAlt: '02'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/YogaDay/03.jpg',
      imageAlt: '03'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/YogaDay/04.jpg',
      imageAlt: '04'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/YogaDay/05.jpg',
      imageAlt: '05'
    },
  ]

  yogaPreview: Item[] = [
    {
   imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/YogaDay/01.jpg',
   imageAlt: '01'
 },
 {
   imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/YogaDay/02.jpg',
   imageAlt: '02'
 },
 {
   imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/YogaDay/03.jpg',
   imageAlt: '03'
 },
 {
   imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/YogaDay/04.jpg',
   imageAlt: '04'
 },
 {
   imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/YogaDay/05.jpg',
   imageAlt: '05'
 },
 ]

 RakhiCelebration: Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/RakhiCelebration/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/RakhiCelebration/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/RakhiCelebration/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/RakhiCelebration/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/RakhiCelebration/05.jpg',
    imageAlt: '05'
  },
]

 rakhiPreview: Item[] = [
  {
 imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/RakhiCelebration/01.jpg',
 imageAlt: '01'
},
{
 imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/RakhiCelebration/02.jpg',
 imageAlt: '02'
},
{
 imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/RakhiCelebration/03.jpg',
 imageAlt: '03'
},
{
 imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/RakhiCelebration/04.jpg',
 imageAlt: '04'
},
{
 imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/RakhiCelebration/05.jpg',
 imageAlt: '05'
},
]

ParentOrientation: Item[] = [
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
      imageAlt: '04'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/05.jpg',
      imageAlt: '05'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/06.jpg',
      imageAlt: '06'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/07.jpg',
      imageAlt: '07'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/08.jpg',
      imageAlt: '08'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/09.jpg',
      imageAlt: '09'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/10.jpg',
      imageAlt: '10'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/11.jpg',
      imageAlt: '11'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/12.jpg',
      imageAlt: '12'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/13.jpg',
      imageAlt: '13'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/14.jpg',
      imageAlt: '14'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/15.jpg',
      imageAlt: '15'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/16.jpg',
      imageAlt: '16'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/17.jpg',
      imageAlt: '17'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/18.jpg',
      imageAlt: '18'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/19.jpg',
      imageAlt: '19'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/20.jpg',
      imageAlt: '20'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/21.jpg',
      imageAlt: '21'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/22.jpg',
      imageAlt: '22'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/23.jpg',
      imageAlt: '23'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/24.jpg',
      imageAlt: '24'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentOrientation/25.jpg',
      imageAlt: '25'
    },
  
]

parentOrientationPreview: Item[] = [
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
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/11.jpg',
    imageAlt: '11'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/12.jpg',
    imageAlt: '12'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/13.jpg',
    imageAlt: '13'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/14.jpg',
    imageAlt: '14'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/15.jpg',
    imageAlt: '15'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/16.jpg',
    imageAlt: '16'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/17.jpg',
    imageAlt: '17'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/18.jpg',
    imageAlt: '18'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/19.jpg',
    imageAlt: '19'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/20.jpg',
    imageAlt: '20'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/21.jpg',
    imageAlt: '21'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/22.jpg',
    imageAlt: '22'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/23.jpg',
    imageAlt: '23'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/24.jpg',
    imageAlt: '24'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentOrientation/25.jpg',
    imageAlt: '25'
  },
]

ParentsDay: Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentsDay/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentsDay/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentsDay/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentsDay/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentsDay/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentsDay/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentsDay/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentsDay/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentsDay/11.jpg',
    imageAlt: '11'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentsDay/12.jpg',
    imageAlt: '12'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentsDay/13.jpg',
    imageAlt: '13'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentsDay/14.jpg',
    imageAlt: '14'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ParentsDay/15.jpg',
    imageAlt: '15'
  },
]

parentsDayPreview: Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentsDay/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentsDay/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentsDay/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentsDay/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentsDay/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentsDay/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentsDay/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentsDay/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentsDay/11.jpg',
    imageAlt: '11'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentsDay/12.jpg',
    imageAlt: '12'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentsDay/13.jpg',
    imageAlt: '13'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentsDay/14.jpg',
    imageAlt: '14'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ParentsDay/15.jpg',
    imageAlt: '15'
  }
]

Onam: Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Onam/01.jpg',
    imageAlt: '15'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Onam/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Onam/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Onam/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Onam/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Onam/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Onam/07.jpg',
    imageAlt: '07'
  },
]

onamPreview: Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Onam/01.jpg',
    imageAlt: '15'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Onam/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Onam/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Onam/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Onam/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Onam/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Onam/07.jpg',
    imageAlt: '07'
  },
]

Gurupoornima: Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Gurupoornima/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Gurupoornima/02.jpg',
    imageAlt: '02'
  },
]

gurupoornimaPreview: Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Gurupoornima/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Gurupoornima/02.jpg',
    imageAlt: '02'
  },
]

Friendship: Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Friendship/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Friendship/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Friendship/03.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Friendship/06.jpg',
    imageAlt: '02'
  },
]

friendshipPreview: Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Friendship/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Friendship/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Friendship/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Friendship/06.jpg',
    imageAlt: '06'
  },
]

Independence: Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Independence/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Independence/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Independence/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Independence/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Independence/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Independence/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Independence/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Independence/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Independence/11.jpg',
    imageAlt: '11'
  },
]

independencePreview: Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Independence/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Independence/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Independence/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Independence/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Independence/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Independence/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Independence/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Independence/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Independence/11.jpg',
    imageAlt: '11'
  },
]

WorldHeartDay: Item[] = [
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/WorldHeartDay/01.jpg',
      imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/WorldHeartDay/02.jpg',
    imageAlt: '02'
},
{
  imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/WorldHeartDay/03.jpg',
  imageAlt: '03'
},
{
  imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/WorldHeartDay/04.jpg',
  imageAlt: '04'
},
{
  imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/WorldHeartDay/05.jpg',
  imageAlt: '05'
},
{
  imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/WorldHeartDay/06.jpg',
  imageAlt: '06'
},
]

WorldHeartDayPreview: Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/WorldHeartDay/01.jpg',
    imageAlt: '01'
},
{
  imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/WorldHeartDay/02.jpg',
  imageAlt: '02'
},
{
imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/WorldHeartDay/03.jpg',
imageAlt: '03'
},
{
imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/WorldHeartDay/04.jpg',
imageAlt: '04'
},
{
imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/WorldHeartDay/05.jpg',
imageAlt: '05'
},
{
imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/WorldHeartDay/06.jpg',
imageAlt: '06'
},

]
HealthCheckUp: Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HealthCheckup/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HealthCheckup/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HealthCheckup/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HealthCheckup/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HealthCheckup/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HealthCheckup/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HealthCheckup/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HealthCheckup/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HealthCheckup/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HealthCheckup/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HealthCheckup/11.jpg',
    imageAlt: '11'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HealthCheckup/12.jpg',
    imageAlt: '12'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HealthCheckup/13.jpg',
    imageAlt: '13'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HealthCheckup/14.jpg',
    imageAlt: '14'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HealthCheckup/15.jpg',
    imageAlt: '15'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HealthCheckup/16.jpg',
    imageAlt: '16'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HealthCheckup/17.jpg',
    imageAlt: '17'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HealthCheckup/18.jpg',
    imageAlt: '18'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HealthCheckup/19.jpg',
    imageAlt: '19'
  },
]

healthCheckupPreview: Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HealthCheckup/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HealthCheckup/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HealthCheckup/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HealthCheckup/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HealthCheckup/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HealthCheckup/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HealthCheckup/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HealthCheckup/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HealthCheckup/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HealthCheckup/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HealthCheckup/11.jpg',
    imageAlt: '11'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HealthCheckup/12.jpg',
    imageAlt: '12'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HealthCheckup/13.jpg',
    imageAlt: '13'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HealthCheckup/14.jpg',
    imageAlt: '14'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HealthCheckup/15.jpg',
    imageAlt: '15'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HealthCheckup/16.jpg',
    imageAlt: '16'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HealthCheckup/17.jpg',
    imageAlt: '17'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HealthCheckup/18.jpg',
    imageAlt: '18'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HealthCheckup/19.jpg',
    imageAlt: '19'
  },
]
HindiDiwas: Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HindiDiwas/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HindiDiwas/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HindiDiwas/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HindiDiwas/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HindiDiwas/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HindiDiwas/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HindiDiwas/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HindiDiwas/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/HindiDiwas/09.jpg',
    imageAlt: '09'
  },
]
hindiDiwasPreview: Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HindiDiwas/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HindiDiwas/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HindiDiwas/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HindiDiwas/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HindiDiwas/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HindiDiwas/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HindiDiwas/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HindiDiwas/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/HindiDiwas/09.jpg',
    imageAlt: '09'
  },
]
Halloween: Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Halloween/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Halloween/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Halloween/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Halloween/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Halloween/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Halloween/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Halloween/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Halloween/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Halloween/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Halloween/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Halloween/11.jpg',
    imageAlt: '11'
  },
]
halloweenPreview: Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Halloween/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Halloween/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Halloween/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Halloween/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Halloween/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Halloween/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Halloween/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Halloween/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Halloween/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Halloween/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Halloween/11.jpg',
    imageAlt: '11'
  },
]
Janmashtami: Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Janmashtami/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Janmashtami/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Janmashtami/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Janmashtami/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Janmashtami/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Janmashtami/06.jpg',
    imageAlt: '06'
  },{
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Janmashtami/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Janmashtami/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Janmashtami/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Janmashtami/10.jpg',
    imageAlt: '10'
  },
]
janmashtamiPreview: Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Janmashtami/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Janmashtami/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Janmashtami/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Janmashtami/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Janmashtami/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Janmashtami/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Janmashtami/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Janmashtami/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Janmashtami/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Janmashtami/10.jpg',
    imageAlt: '10'
  },
]
NumismaticExhibition:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NumismaticExhibition/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NumismaticExhibition/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NumismaticExhibition/03.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NumismaticExhibition/04.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NumismaticExhibition/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NumismaticExhibition/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NumismaticExhibition/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NumismaticExhibition/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NumismaticExhibition/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NumismaticExhibition/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NumismaticExhibition/11.jpg',
    imageAlt: '11'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NumismaticExhibition/12.jpg',
    imageAlt: '12'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NumismaticExhibition/13.jpg',
    imageAlt: '13'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NumismaticExhibition/14.jpg',
    imageAlt: '14'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NumismaticExhibition/15.jpg',
    imageAlt: '15'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NumismaticExhibition/16.jpg',
    imageAlt: '16'
  },
]
numismaticExhibitionPreview: Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NumismaticExhibition/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NumismaticExhibition/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NumismaticExhibition/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NumismaticExhibition/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NumismaticExhibition/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NumismaticExhibition/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NumismaticExhibition/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NumismaticExhibition/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NumismaticExhibition/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NumismaticExhibition/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NumismaticExhibition/11.jpg',
    imageAlt: '11'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NumismaticExhibition/12.jpg',
    imageAlt: '12'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NumismaticExhibition/13.jpg',
    imageAlt: '13'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NumismaticExhibition/14.jpg',
    imageAlt: '14'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NumismaticExhibition/15.jpg',
    imageAlt: '15'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NumismaticExhibition/16.jpg',
    imageAlt: '16'
  },
]
  data: Item[] = [
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day1-2/01.jpg',
      imageAlt: '01'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day1-2/02.jpg',
      imageAlt: '02'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day1-2/03.jpg',
      imageAlt: '03'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day1-2/04.jpg',
      imageAlt: '04'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day3/01.jpg',
      imageAlt: '01'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day3/02.jpg',
      imageAlt: '02'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day3/03.jpg',
      imageAlt: '03'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day3/04.jpg',
      imageAlt: '04'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day3/05.jpg',
      imageAlt: '05'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day4/01.jpg',
      imageAlt: '01'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day4/02.jpg',
      imageAlt: '02'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day4/03.jpg',
      imageAlt: '03'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day4/04.jpg',
      imageAlt: '04'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day4/05.jpg',
      imageAlt: '05'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day5/01.jpg',
      imageAlt: '01'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day5/02.jpg',
      imageAlt: '02'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day5/03.jpg',
      imageAlt: '03'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day5/04.jpg',
      imageAlt: '04'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day5/05.jpg',
      imageAlt: '05'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day5/06.jpg',
      imageAlt: '06'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day5/07.jpg',
      imageAlt: '07'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day5/08.jpg',
      imageAlt: '08'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day5/09.jpg',
      imageAlt: '09'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day5/10.jpg',
      imageAlt: '10'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day5/11.jpg',
      imageAlt: '11'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day5/12.jpg',
      imageAlt: '12'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day6/01.jpg',
      imageAlt: '01'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day6/02.jpg',
      imageAlt: '02'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day6/03.jpg',
      imageAlt: '03'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day6/04.jpg',
      imageAlt: '04'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day6/05.jpg',
      imageAlt: '05'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day6/06.jpg',
      imageAlt: '06'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day6/07.jpg',
      imageAlt: '07'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day6/08.jpg',
      imageAlt: '08'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day6/09.jpg',
      imageAlt: '09'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day7/01.jpg',
      imageAlt: '01'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day7/02.jpg',
      imageAlt: '02'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day7/03.jpg',
      imageAlt: '03'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day7/04.jpg',
      imageAlt: '04'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day7/05.jpg',
      imageAlt: '05'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day7/06.jpg',
      imageAlt: '06'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day7/07.jpg',
      imageAlt: '07'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day7/08.jpg',
      imageAlt: '08'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day7/09.jpg',
      imageAlt: '09'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day8/01.jpg',
      imageAlt: '01'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day8/02.jpg',
      imageAlt: '02'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day8/03.jpg',
      imageAlt: '03'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Days/Day8/04.jpg',
      imageAlt: '04'
    },
    
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/21.jpg',
      imageAlt: '21'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/22.jpg',
      imageAlt: '22'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/23.jpg',
      imageAlt: '23'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/24.jpg',
      imageAlt: '24'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/25.jpg',
      imageAlt: '25'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/26.jpg',
      imageAlt: '26'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/27.jpg',
      imageAlt: '27'
    },
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
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/05.jpg',
      imageAlt: '5'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/06.jpg',
      imageAlt: '6'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/07.jpg',
      imageAlt: '7'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/08.jpg',
      imageAlt: '8'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/09.jpg',
      imageAlt: '9'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/10.jpg',
      imageAlt: '10'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/11.jpg',
      imageAlt: '11'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/12.jpg',
      imageAlt: '12'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/13.jpg',
      imageAlt: '13'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/14.jpg',
      imageAlt: '14'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/15.jpg',
      imageAlt: '15'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/16.jpg',
      imageAlt: '16'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/17.jpg',
      imageAlt: '17'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/18.jpg',
      imageAlt: '18'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/19.jpg',
      imageAlt: '19'
    },
    {
      imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/20.jpg',
      imageAlt: '20'
    },
];

dataPreview: Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day1-2/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day1-2/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day1-2/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day1-2/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day3/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day3/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day3/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day3/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day3/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day4/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day4/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day4/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day4/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day4/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day5/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day5/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day5/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day5/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day5/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day5/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day5/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day5/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day5/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day5/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day5/11.jpg',
    imageAlt: '11'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day5/12.jpg',
    imageAlt: '12'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day6/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day6/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day6/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day6/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day6/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day6/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day6/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day6/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day6/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day7/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day7/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day7/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day7/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day7/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day7/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day7/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day7/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day7/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day8/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day8/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day8/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Days/Day8/04.jpg',
    imageAlt: '04'
  },
  
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/21.jpg',
    imageAlt: '21'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/22.jpg',
    imageAlt: '22'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/23.jpg',
    imageAlt: '23'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/24.jpg',
    imageAlt: '24'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/25.jpg',
    imageAlt: '25'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/26.jpg',
    imageAlt: '26'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/27.jpg',
    imageAlt: '27'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/01.jpg',
    imageAlt: '1'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/02.jpg',
    imageAlt: '2'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/03.jpg',
    imageAlt: '3'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/04.jpg',
    imageAlt: '4'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/05.jpg',
    imageAlt: '5'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/06.jpg',
    imageAlt: '6'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/07.jpg',
    imageAlt: '7'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/08.jpg',
    imageAlt: '8'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/09.jpg',
    imageAlt: '9'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/11.jpg',
    imageAlt: '11'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/12.jpg',
    imageAlt: '12'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/13.jpg',
    imageAlt: '13'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/14.jpg',
    imageAlt: '14'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/15.jpg',
    imageAlt: '15'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/16.jpg',
    imageAlt: '16'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/17.jpg',
    imageAlt: '17'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/18.jpg',
    imageAlt: '18'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/19.jpg',
    imageAlt: '19'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/20.jpg',
    imageAlt: '20'
  },

];

TeachersDay:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/TeacherDay/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/TeacherDay/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/TeacherDay/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/TeacherDay/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/TeacherDay/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/TeacherDay/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/TeacherDay/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/TeacherDay/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/TeacherDay/09.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/TeacherDay/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/TeacherDay/11.jpg',
    imageAlt: '11'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/TeacherDay/12.jpg',
    imageAlt: '12'
  },
]
teachersDayPreview:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/TeacherDay/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/TeacherDay/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/TeacherDay/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/TeacherDay/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/TeacherDay/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/TeacherDay/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/TeacherDay/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/TeacherDay/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/TeacherDay/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/TeacherDay/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/TeacherDay/11.jpg',
    imageAlt: '11'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/TeacherDay/12.jpg',
    imageAlt: '12'
  },
]

SubStaff:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Substaff/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Substaff/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Substaff/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Substaff/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Substaff/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Substaff/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Substaff/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Substaff/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Substaff/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Substaff/10.jpg',
    imageAlt: '10'
  },
]
subStaffPreview:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Substaff/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Substaff/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Substaff/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Substaff/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Substaff/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Substaff/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Substaff/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Substaff/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Substaff/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Substaff/10.jpg',
    imageAlt: '10'
  },
]
ThanksgivingDay:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ThanksgivingDay/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ThanksgivingDay/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ThanksgivingDay/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ThanksgivingDay/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ThanksgivingDay/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ThanksgivingDay/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ThanksgivingDay/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ThanksgivingDay/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ThanksgivingDay/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ThanksgivingDay/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ThanksgivingDay/11.jpg',
    imageAlt: '11'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ThanksgivingDay/12.jpg',
    imageAlt: '12'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ThanksgivingDay/13.jpg',
    imageAlt: '13'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ThanksgivingDay/14.jpg',
    imageAlt: '14'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ThanksgivingDay/15.jpg',
    imageAlt: '15'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ThanksgivingDay/16.jpg',
    imageAlt: '16'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ThanksgivingDay/17.jpg',
    imageAlt: '17'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ThanksgivingDay/18.jpg',
    imageAlt: '18'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ThanksgivingDay/19.jpg',
    imageAlt: '19'
  },
]
thanksgivingDayPreview:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ThanksgivingDay/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ThanksgivingDay/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ThanksgivingDay/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ThanksgivingDay/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ThanksgivingDay/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ThanksgivingDay/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ThanksgivingDay/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ThanksgivingDay/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ThanksgivingDay/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ThanksgivingDay/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ThanksgivingDay/11.jpg',
    imageAlt: '11'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ThanksgivingDay/12.jpg',
    imageAlt: '12'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ThanksgivingDay/13.jpg',
    imageAlt: '13'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ThanksgivingDay/14.jpg',
    imageAlt: '14'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ThanksgivingDay/15.jpg',
    imageAlt: '15'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ThanksgivingDay/16.jpg',
    imageAlt: '16'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ThanksgivingDay/17.jpg',
    imageAlt: '17'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ThanksgivingDay/18.jpg',
    imageAlt: '18'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ThanksgivingDay/19.jpg',
    imageAlt: '19'
  },
]

WorldSmileDay:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/WorldSmileDay/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/WorldSmileDay/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/WorldSmileDay/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/WorldSmileDay/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/WorldSmileDay/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/WorldSmileDay/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/WorldSmileDay/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/WorldSmileDay/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/WorldSmileDay/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/WorldSmileDay/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/WorldSmileDay/11.jpg',
    imageAlt: '11'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/WorldSmileDay/12.jpg',
    imageAlt: '12'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/WorldSmileDay/13.jpg',
    imageAlt: '13'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/WorldSmileDay/14.jpg',
    imageAlt: '14'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/WorldSmileDay/15.jpg',
    imageAlt: '15'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/WorldSmileDay/16.jpg',
    imageAlt: '16'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/WorldSmileDay/17.jpg',
    imageAlt: '17'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/WorldSmileDay/18.jpg',
    imageAlt: '18'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/WorldSmileDay/19.jpg',
    imageAlt: '19'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/WorldSmileDay/20.jpg',
    imageAlt: '20'
  },
]
worldSmileDayPreview:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/WorldSmileDay/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/WorldSmileDay/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/WorldSmileDay/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/WorldSmileDay/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/WorldSmileDay/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/WorldSmileDay/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/WorldSmileDay/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/WorldSmileDay/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/WorldSmileDay/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/WorldSmileDay/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/WorldSmileDay/11.jpg',
    imageAlt: '11'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/WorldSmileDay/12.jpg',
    imageAlt: '12'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/WorldSmileDay/13.jpg',
    imageAlt: '13'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/WorldSmileDay/14.jpg',
    imageAlt: '14'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/WorldSmileDay/15.jpg',
    imageAlt: '15'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/WorldSmileDay/16.jpg',
    imageAlt: '16'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/WorldSmileDay/17.jpg',
    imageAlt: '17'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/WorldSmileDay/18.jpg',
    imageAlt: '18'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/WorldSmileDay/19.jpg',
    imageAlt: '19'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/WorldSmileDay/20.jpg',
    imageAlt: '20'
  },
]
ChildrensDay:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ChildrensDay/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ChildrensDay/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ChildrensDay/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ChildrensDay/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ChildrensDay/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ChildrensDay/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ChildrensDay/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ChildrensDay/08.jpg',
    imageAlt: '08'
  },
]
childrensDayPreview:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ChildrensDay/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ChildrensDay/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ChildrensDay/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ChildrensDay/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ChildrensDay/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ChildrensDay/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ChildrensDay/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ChildrensDay/08.jpg',
    imageAlt: '08'
  },
]
Diwali:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Diwali/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Diwali/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Diwali/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Diwali/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Diwali/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Diwali/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Diwali/07.jpg',
    imageAlt: '07'
  },
]
diwaliPreview:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Diwali/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Diwali/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Diwali/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Diwali/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Diwali/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Diwali/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Diwali/07.jpg',
    imageAlt: '07'
  },
]
Dusshera:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Dusshera/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Dusshera/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Dusshera/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Dusshera/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/Dusshera/05.jpg',
    imageAlt: '05'
  },
]
dussheraPreview:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Dusshera/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Dusshera/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Dusshera/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Dusshera/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/Dusshera/05.jpg',
    imageAlt: '05'
  },
]
GaneshChaturthi:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/GaneshChaturthi/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/GaneshChaturthi/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/GaneshChaturthi/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/GaneshChaturthi/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/GaneshChaturthi/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/GaneshChaturthi/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/GaneshChaturthi/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/GaneshChaturthi/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/GaneshChaturthi/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/GaneshChaturthi/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/GaneshChaturthi/11.jpg',
    imageAlt: '11'
  },
]
ganeshChaturthiPreview:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/GaneshChaturthi/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/GaneshChaturthi/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/GaneshChaturthi/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/GaneshChaturthi/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/GaneshChaturthi/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/GaneshChaturthi/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/GaneshChaturthi/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/GaneshChaturthi/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/GaneshChaturthi/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/GaneshChaturthi/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/GaneshChaturthi/11.jpg',
    imageAlt: '11'
  },
]
GrandparentsDay:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/GrandparentsDay/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/GrandparentsDay/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/GrandparentsDay/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/GrandparentsDay/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/GrandparentsDay/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/GrandparentsDay/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/GrandparentsDay/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/GrandparentsDay/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/GrandparentsDay/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/GrandparentsDay/10.jpg',
    imageAlt: '10'
  },
]
grandparentsDayPreview:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/GrandparentsDay/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/GrandparentsDay/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/GrandparentsDay/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/GrandparentsDay/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/GrandparentsDay/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/GrandparentsDay/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/GrandparentsDay/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/GrandparentsDay/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/GrandparentsDay/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/GrandparentsDay/10.jpg',
    imageAlt: '10'
  },
]
ProfilesDay:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ProfilesDay/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ProfilesDay/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ProfilesDay/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ProfilesDay/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ProfilesDay/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ProfilesDay/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ProfilesDay/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ProfilesDay/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ProfilesDay/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ProfilesDay/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ProfilesDay/11.jpg',
    imageAlt: '11'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ProfilesDay/12.jpg',
    imageAlt: '12'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ProfilesDay/13.jpg',
    imageAlt: '13'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ProfilesDay/14.jpg',
    imageAlt: '14'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ProfilesDay/15.jpg',
    imageAlt: '15'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ProfilesDay/16.jpg',
    imageAlt: '16'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ProfilesDay/17.jpg',
    imageAlt: '17'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ProfilesDay/18.jpg',
    imageAlt: '18'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ProfilesDay/19.jpg',
    imageAlt: '19'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ProfilesDay/20.jpg',
    imageAlt: '20'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ProfilesDay/21.jpg',
    imageAlt: '21'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ProfilesDay/22.jpg',
    imageAlt: '22'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ProfilesDay/23.jpg',
    imageAlt: '23'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ProfilesDay/24.jpg',
    imageAlt: '24'
  },
]
profilesDayPreview:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ProfilesDay/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ProfilesDay/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ProfilesDay/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ProfilesDay/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ProfilesDay/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ProfilesDay/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ProfilesDay/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ProfilesDay/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ProfilesDay/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ProfilesDay/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ProfilesDay/11.jpg',
    imageAlt: '11'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ProfilesDay/12.jpg',
    imageAlt: '12'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ProfilesDay/13.jpg',
    imageAlt: '13'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ProfilesDay/14.jpg',
    imageAlt: '14'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ProfilesDay/15.jpg',
    imageAlt: '15'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ProfilesDay/16.jpg',
    imageAlt: '16'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ProfilesDay/17.jpg',
    imageAlt: '17'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ProfilesDay/18.jpg',
    imageAlt: '18'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ProfilesDay/19.jpg',
    imageAlt: '19'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ProfilesDay/20.jpg',
    imageAlt: '20'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ProfilesDay/21.jpg',
    imageAlt: '21'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ProfilesDay/22.jpg',
    imageAlt: '22'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ProfilesDay/23.jpg',
    imageAlt: '23'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ProfilesDay/24.jpg',
    imageAlt: '24'
  },
]
NatureWalk:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NatureWalk/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NatureWalk/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NatureWalk/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NatureWalk/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NatureWalk/05.jpg',
    imageAlt: '05'
  },
]
natureWalkPreview:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NatureWalk/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NatureWalk/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NatureWalk/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NatureWalk/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NatureWalk/05.jpg',
    imageAlt: '05'
  },
]
NationalMathematicsDay:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NationalMathematicsDay/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NationalMathematicsDay/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NationalMathematicsDay/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NationalMathematicsDay/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NationalMathematicsDay/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NationalMathematicsDay/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NationalMathematicsDay/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NationalMathematicsDay/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NationalMathematicsDay/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NationalMathematicsDay/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NationalMathematicsDay/11.jpg',
    imageAlt: '11'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NationalMathematicsDay/12.jpg',
    imageAlt: '12'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NationalMathematicsDay/13.jpg',
    imageAlt: '13'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NationalMathematicsDay/14.jpg',
    imageAlt: '14'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NationalMathematicsDay/15.jpg',
    imageAlt: '15'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/NationalMathematicsDay/16.jpg',
    imageAlt: '16'
  },
]
nationalMathematicsDayPreview:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NationalMathematicsDay/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NationalMathematicsDay/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NationalMathematicsDay/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NationalMathematicsDay/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NationalMathematicsDay/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NationalMathematicsDay/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NationalMathematicsDay/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NationalMathematicsDay/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NationalMathematicsDay/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NationalMathematicsDay/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NationalMathematicsDay/11.jpg',
    imageAlt: '11'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NationalMathematicsDay/12.jpg',
    imageAlt: '12'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NationalMathematicsDay/13.jpg',
    imageAlt: '13'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NationalMathematicsDay/14.jpg',
    imageAlt: '14'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NationalMathematicsDay/15.jpg',
    imageAlt: '15'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/NationalMathematicsDay/16.jpg',
    imageAlt: '16'
  },
]
ChristmasCelebrations:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ChristmasCelebrations/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ChristmasCelebrations/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ChristmasCelebrations/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ChristmasCelebrations/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ChristmasCelebrations/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ChristmasCelebrations/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ChristmasCelebrations/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/ChristmasCelebrations/08.jpg',
    imageAlt: '08'
  },
]
christmasCelebrationsPreview:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ChristmasCelebrations/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ChristmasCelebrations/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ChristmasCelebrations/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ChristmasCelebrations/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ChristmasCelebrations/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ChristmasCelebrations/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ChristmasCelebrations/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/ChristmasCelebrations/08.jpg',
    imageAlt: '08'
  },
]
SankranthiCelebrations:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/SankranthiCelebrations/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/SankranthiCelebrations/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/SankranthiCelebrations/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/SankranthiCelebrations/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/SankranthiCelebrations/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/SankranthiCelebrations/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/SankranthiCelebrations/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/SankranthiCelebrations/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/SankranthiCelebrations/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/SankranthiCelebrations/10.jpg',
    imageAlt: '10'
  },
]
sankranthiCelebrationsPreview:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/SankranthiCelebrations/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/SankranthiCelebrations/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/SankranthiCelebrations/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/SankranthiCelebrations/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/SankranthiCelebrations/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/SankranthiCelebrations/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/SankranthiCelebrations/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/SankranthiCelebrations/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/SankranthiCelebrations/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/SankranthiCelebrations/10.jpg',
    imageAlt: '10'
  },
]
RepublicDay:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/RepublicDay/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/RepublicDay/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/RepublicDay/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/RepublicDay/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/RepublicDay/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/RepublicDay/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/RepublicDay/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/RepublicDay/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/RepublicDay/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/RepublicDay/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/RepublicDay/11.jpg',
    imageAlt: '11'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/RepublicDay/12.jpg',
    imageAlt: '12'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/RepublicDay/13.jpg',
    imageAlt: '13'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/RepublicDay/14.jpg',
    imageAlt: '14'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/RepublicDay/15.jpg',
    imageAlt: '15'
  },
]
republicDayPreview:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/RepublicDay/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/RepublicDay/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/RepublicDay/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/RepublicDay/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/RepublicDay/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/RepublicDay/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/RepublicDay/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/RepublicDay/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/RepublicDay/09.jpg',
    imageAlt: '09'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/RepublicDay/10.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/RepublicDay/11.jpg',
    imageAlt: '11'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/RepublicDay/12.jpg',
    imageAlt: '12'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/RepublicDay/13.jpg',
    imageAlt: '13'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/RepublicDay/14.jpg',
    imageAlt: '14'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/RepublicDay/15.jpg',
    imageAlt: '15'
  },
]
FieldTripBotanicalGarden:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/FieldTripBotanicalGarden/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/FieldTripBotanicalGarden/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/FieldTripBotanicalGarden/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/FieldTripBotanicalGarden/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/FieldTripBotanicalGarden/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/FieldTripBotanicalGarden/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/FieldTripBotanicalGarden/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/FieldTripBotanicalGarden/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/417x504/FieldTripBotanicalGarden/09.jpg',
    imageAlt: '09'
  },
]
fieldTripBotanicalGardenPreview:Item[] = [
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/FieldTripBotanicalGarden/01.jpg',
    imageAlt: '01'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/FieldTripBotanicalGarden/02.jpg',
    imageAlt: '02'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/FieldTripBotanicalGarden/03.jpg',
    imageAlt: '03'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/FieldTripBotanicalGarden/04.jpg',
    imageAlt: '04'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/FieldTripBotanicalGarden/05.jpg',
    imageAlt: '05'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/FieldTripBotanicalGarden/06.jpg',
    imageAlt: '06'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/FieldTripBotanicalGarden/07.jpg',
    imageAlt: '07'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/FieldTripBotanicalGarden/08.jpg',
    imageAlt: '08'
  },
  {
    imageSrc: 'assets/img/whatsinaname/GalleryNew/1200x800/FieldTripBotanicalGarden/09.jpg',
    imageAlt: '09'
  },
]

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
  onPreviewImage(index: number, curDiv: string): void {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    if(curDiv == 'Halloween'){
      this.currentLightBoxImage = this.halloweenPreview[index];
    }
    if(curDiv == 'HindiDiwas'){
      this.currentLightBoxImage = this.hindiDiwasPreview[index];
    }
    if(curDiv == 'HealthCheckUp'){
      this.currentLightBoxImage = this.healthCheckupPreview[index];
    }
    if(curDiv == 'WorldHeartDay'){
      this.currentLightBoxImage = this.WorldHeartDayPreview[index];
    }
    if(curDiv == 'Independence'){
      this.currentLightBoxImage = this.independencePreview[index];
    }
    if(curDiv == 'Friendship'){
      this.currentLightBoxImage = this.friendshipPreview[index];
    }
    if(curDiv == 'Gurupoornima'){
      this.currentLightBoxImage = this.gurupoornimaPreview[index];
    }
    if(curDiv == 'Onam'){
      this.currentLightBoxImage = this.onamPreview[index];
    }
    if(curDiv == 'ParentsDay'){
      this.currentLightBoxImage = this.parentsDayPreview[index];
    }
    if(curDiv == 'ParentOrientation'){
      this.currentLightBoxImage = this.parentOrientationPreview[index];
    }
    if(curDiv == 'RakhiCelebration'){
      this.currentLightBoxImage = this.rakhiPreview[index];
    }
    if(curDiv == 'YogaDay'){
      this.currentLightBoxImage = this.yogaPreview[index];
    }
    if(curDiv == 'Zoo'){
      this.currentLightBoxImage = this.zooPreview[index];
    }
    if(curDiv == 'BookDay'){
      this.currentLightBoxImage = this.bookDayPreview[index];
    }
    if(curDiv == 'Janmashtami'){
      this.currentLightBoxImage = this.janmashtamiPreview[index];
    }
    if(curDiv == 'NumismaticExhibition'){
      this.currentLightBoxImage = this.numismaticExhibitionPreview[index];
    }
    if(curDiv == 'TeachersDay'){
      this.currentLightBoxImage = this.teachersDayPreview[index];
    }
    if(curDiv == 'SubStaff'){
      this.currentLightBoxImage = this.subStaffPreview[index];
    }
    if(curDiv == 'ThanksgivingDay'){
      this.currentLightBoxImage = this.thanksgivingDayPreview[index];
    }
    if(curDiv == 'WorldSmileDay'){
      this.currentLightBoxImage = this.worldSmileDayPreview[index];
    }
    if(curDiv == 'ChildrensDay'){
      this.currentLightBoxImage = this.childrensDayPreview[index];
    }
    if(curDiv == 'Diwali'){
      this.currentLightBoxImage = this.diwaliPreview[index];
    }
    if(curDiv == 'Dusshera'){
      this.currentLightBoxImage = this.dussheraPreview[index];
    }
    if(curDiv == 'GaneshChaturthi'){
      this.currentLightBoxImage = this.ganeshChaturthiPreview[index];
    }
    if(curDiv == 'GrandparentsDay'){
      this.currentLightBoxImage = this.grandparentsDayPreview[index];
    }
    if(curDiv == 'ProfilesDay'){
      this.currentLightBoxImage = this.profilesDayPreview[index];
    }
    if(curDiv == 'NatureWalk'){
      this.currentLightBoxImage = this.natureWalkPreview[index];
    }
    if(curDiv == 'NationalMathematicsDay'){
      this.currentLightBoxImage = this.nationalMathematicsDayPreview[index];
    }
    if(curDiv == 'ChristmasCelebrations'){
      this.currentLightBoxImage = this.christmasCelebrationsPreview[index];
    }
    if(curDiv == 'SankranthiCelebrations'){
      this.currentLightBoxImage = this.sankranthiCelebrationsPreview[index];
    }
    if(curDiv == 'RepublicDay'){
      this.currentLightBoxImage = this.republicDayPreview[index];
    }
    if(curDiv == 'FieldTripBotanicalGarden'){
      this.currentLightBoxImage = this.fieldTripBotanicalGardenPreview[index];
    }
    if(curDiv == 'others'){
      this.currentLightBoxImage = this.dataPreview[index];
    }
  }
  onAnimationEnd(event: AnimationEvent){
    if(event.toState==='void'){
      this.showMask=false;
    }
  }
  onClosePreview(){
    this.previewImage=false;
  }
  next(curDiv: string): void {
    this.currentIndex=this.currentIndex + 1;
    if(curDiv == 'others'){
      if(this.currentIndex > this.dataPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.dataPreview[this.currentIndex];
    }
    if(curDiv == 'Halloween'){
      if(this.currentIndex > this.halloweenPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.halloweenPreview[this.currentIndex];
    }
    if(curDiv == 'HindiDiwas'){
      if(this.currentIndex > this.hindiDiwasPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.hindiDiwasPreview[this.currentIndex];
    }
    if(curDiv == 'HealthCheckUp'){
      if(this.currentIndex > this.healthCheckupPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.healthCheckupPreview[this.currentIndex];
    }
    if(curDiv == 'WorldHeartDay'){
      if(this.currentIndex > this.WorldHeartDayPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.WorldHeartDayPreview[this.currentIndex];
    }
    if(curDiv == 'Independence'){
      if(this.currentIndex > this.independencePreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.independencePreview[this.currentIndex];
    }
    if(curDiv == 'Friendship'){
      if(this.currentIndex > this.friendshipPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.friendshipPreview[this.currentIndex];
    }
    if(curDiv == 'Gurupoornima'){
      if(this.currentIndex > this.gurupoornimaPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.gurupoornimaPreview[this.currentIndex];
    }
    if(curDiv == 'Onam'){
      if(this.currentIndex > this.onamPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.onamPreview[this.currentIndex];
    }
    if(curDiv == 'ParentsDay'){
      if(this.currentIndex > this.parentsDayPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.parentsDayPreview[this.currentIndex];
    }
    if(curDiv == 'ParentOrientation'){
      if(this.currentIndex > this.parentOrientationPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.parentOrientationPreview[this.currentIndex];
    }
    if(curDiv == 'RakhiCelebration'){
      if(this.currentIndex > this.rakhiPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.rakhiPreview[this.currentIndex];
    }
    if(curDiv == 'YogaDay'){
      if(this.currentIndex > this.yogaPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.yogaPreview[this.currentIndex];
    }
    if(curDiv == 'Zoo'){
      if(this.currentIndex > this.zooPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.zooPreview[this.currentIndex];
    }
    
    if(curDiv == 'BookDay'){
      if(this.currentIndex > this.bookDayPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.bookDayPreview[this.currentIndex];
    }

    if(curDiv == 'Janmashtami'){
      if(this.currentIndex > this.janmashtamiPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.janmashtamiPreview[this.currentIndex];
    }
    if(curDiv == 'NumismaticExhibition'){
      if(this.currentIndex > this.numismaticExhibitionPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.numismaticExhibitionPreview[this.currentIndex];
    }
    if(curDiv == 'TeachersDay'){
      if(this.currentIndex > this.teachersDayPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.teachersDayPreview[this.currentIndex];
    }
    if(curDiv == 'SubStaff'){
      if(this.currentIndex > this.subStaffPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.subStaffPreview[this.currentIndex];
    }
    if(curDiv == 'ThanksgivingDay'){
      if(this.currentIndex > this.thanksgivingDayPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.thanksgivingDayPreview[this.currentIndex];
    }
    if(curDiv == 'WorldSmileDay'){
      if(this.currentIndex > this.worldSmileDayPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.worldSmileDayPreview[this.currentIndex];
    }
    if(curDiv == 'ChildrensDay'){
      if(this.currentIndex > this.childrensDayPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.childrensDayPreview[this.currentIndex];
    }
    if(curDiv == 'Diwali'){
      if(this.currentIndex > this.diwaliPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.diwaliPreview[this.currentIndex];
    }
    if(curDiv == 'Dusshera'){
      if(this.currentIndex > this.dussheraPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.dussheraPreview[this.currentIndex];
    }
    if(curDiv == 'GaneshChaturthi'){
      if(this.currentIndex > this.ganeshChaturthiPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.ganeshChaturthiPreview[this.currentIndex];
    }
    if(curDiv == 'GrandparentsDay'){
      if(this.currentIndex > this.grandparentsDayPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.grandparentsDayPreview[this.currentIndex];
    }
    if(curDiv == 'ProfilesDay'){
      if(this.currentIndex > this.profilesDayPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.profilesDayPreview[this.currentIndex];
    }
    if(curDiv == 'NatureWalk'){
      if(this.currentIndex > this.natureWalkPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.natureWalkPreview[this.currentIndex];
    }
    if(curDiv == 'NationalMathematicsDay'){
      if(this.currentIndex > this.nationalMathematicsDayPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.nationalMathematicsDayPreview[this.currentIndex];
    }
    if(curDiv == 'ChristmasCelebrations'){
      if(this.currentIndex > this.christmasCelebrationsPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.christmasCelebrationsPreview[this.currentIndex];
    }
    if(curDiv == 'SankranthiCelebrations'){
      if(this.currentIndex > this.sankranthiCelebrationsPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.sankranthiCelebrationsPreview[this.currentIndex];
    }
    if(curDiv == 'RepublicDay'){
      if(this.currentIndex > this.republicDayPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.republicDayPreview[this.currentIndex];
    }
    if(curDiv == 'FieldTripBotanicalGarden'){
      if(this.currentIndex > this.fieldTripBotanicalGardenPreview.length - 1){
        this.currentIndex=0;
      }
      this.currentLightBoxImage = this.fieldTripBotanicalGardenPreview[this.currentIndex];
    }
  }
  prev(curDiv: string): void {
    this.currentIndex=this.currentIndex - 1;
    if(curDiv == 'others'){
      if(this.currentIndex < 0){
        this.currentIndex = this.dataPreview.length - 1;
      }
      this.currentLightBoxImage = this.dataPreview[this.currentIndex];
    }
    if(curDiv == 'Halloween'){
      if(this.currentIndex < 0){
        this.currentIndex = this.halloweenPreview.length - 1;
      }
      this.currentLightBoxImage = this.halloweenPreview[this.currentIndex];
    }
    if(curDiv == 'HindiDiwas'){
      if(this.currentIndex < 0){
        this.currentIndex = this.hindiDiwasPreview.length - 1;
      }
      this.currentLightBoxImage = this.hindiDiwasPreview[this.currentIndex];
    }
    if(curDiv == 'HealthCheckUp'){
      if(this.currentIndex < 0){
        this.currentIndex = this.healthCheckupPreview.length - 1;
      }
      this.currentLightBoxImage = this.healthCheckupPreview[this.currentIndex];
    }
    if(curDiv == 'WorldHeartDay'){
      if(this.currentIndex < 0){
        this.currentIndex = this.WorldHeartDayPreview.length - 1;
      }
      this.currentLightBoxImage = this.WorldHeartDayPreview[this.currentIndex];
    }
    if(curDiv == 'Independence'){
      if(this.currentIndex < 0){
        this.currentIndex = this.independencePreview.length - 1;
      }
      this.currentLightBoxImage = this.independencePreview[this.currentIndex];
    }
    if(curDiv == 'Friendship'){
      if(this.currentIndex < 0){
        this.currentIndex = this.friendshipPreview.length - 1;
      }
      this.currentLightBoxImage = this.friendshipPreview[this.currentIndex];
    }
    if(curDiv == 'Gurupoornima'){
      if(this.currentIndex < 0){
        this.currentIndex = this.gurupoornimaPreview.length - 1;
      }
      this.currentLightBoxImage = this.gurupoornimaPreview[this.currentIndex];
    }
    if(curDiv == 'Onam'){
      if(this.currentIndex < 0){
        this.currentIndex = this.onamPreview.length - 1;
      }
      this.currentLightBoxImage = this.onamPreview[this.currentIndex];
    }
    if(curDiv == 'ParentsDay'){
      if(this.currentIndex < 0){
        this.currentIndex = this.parentsDayPreview.length - 1;
      }
      this.currentLightBoxImage = this.parentsDayPreview[this.currentIndex];
    }
    if(curDiv == 'ParentOrientation'){
      if(this.currentIndex < 0){
        this.currentIndex = this.parentOrientationPreview.length - 1;
      }
      this.currentLightBoxImage = this.parentOrientationPreview[this.currentIndex];
    }
    if(curDiv == 'RakhiCelebration'){
      if(this.currentIndex < 0){
        this.currentIndex = this.rakhiPreview.length - 1;
      }
      this.currentLightBoxImage = this.rakhiPreview[this.currentIndex];
    }
    if(curDiv == 'YogaDay'){
      if(this.currentIndex < 0){
        this.currentIndex = this.yogaPreview.length - 1;
      }
      this.currentLightBoxImage = this.yogaPreview[this.currentIndex];
    }
    if(curDiv == 'Zoo'){
      if(this.currentIndex < 0){
        this.currentIndex = this.zooPreview.length - 1;
      }
      this.currentLightBoxImage = this.zooPreview[this.currentIndex];
    }
    if(curDiv == 'BookDay'){
      if(this.currentIndex < 0){
        this.currentIndex = this.bookDayPreview.length - 1;
      }
      this.currentLightBoxImage = this.bookDayPreview[this.currentIndex];
    }
    if(curDiv == 'Janmashtami'){
      if(this.currentIndex < 0){
        this.currentIndex = this.janmashtamiPreview.length - 1;
      }
      this.currentLightBoxImage = this.janmashtamiPreview[this.currentIndex];
    }
    if(curDiv == 'NumismaticExhibition'){
      if(this.currentIndex < 0){
        this.currentIndex = this.numismaticExhibitionPreview.length - 1;
      }
      this.currentLightBoxImage = this.numismaticExhibitionPreview[this.currentIndex];
    }
    if(curDiv == 'TeachersDay'){
      if(this.currentIndex < 0){
        this.currentIndex = this.teachersDayPreview.length - 1;
      }
      this.currentLightBoxImage = this.teachersDayPreview[this.currentIndex];
    }
    if(curDiv == 'SubStaff'){
      if(this.currentIndex < 0){
        this.currentIndex = this.subStaffPreview.length - 1;
      }
      this.currentLightBoxImage = this.subStaffPreview[this.currentIndex];
    }
    if(curDiv == 'ThanksgivingDay'){
      if(this.currentIndex < 0){
        this.currentIndex = this.thanksgivingDayPreview.length - 1;
      }
      this.currentLightBoxImage = this.thanksgivingDayPreview[this.currentIndex];
    }
    if(curDiv == 'WorldSmileDay'){
      if(this.currentIndex < 0){
        this.currentIndex = this.worldSmileDayPreview.length - 1;
      }
      this.currentLightBoxImage = this.worldSmileDayPreview[this.currentIndex];
    }
    if(curDiv == 'ChildrensDay'){
      if(this.currentIndex < 0){
        this.currentIndex = this.childrensDayPreview.length - 1;
      }
      this.currentLightBoxImage = this.childrensDayPreview[this.currentIndex];
    }
    if(curDiv == 'Diwali'){
      if(this.currentIndex < 0){
        this.currentIndex = this.diwaliPreview.length - 1;
      }
      this.currentLightBoxImage = this.diwaliPreview[this.currentIndex];
    }
    if(curDiv == 'Dusshera'){
      if(this.currentIndex < 0){
        this.currentIndex = this.dussheraPreview.length - 1;
      }
      this.currentLightBoxImage = this.dussheraPreview[this.currentIndex];
    }
    if(curDiv == 'GaneshChaturthi'){
      if(this.currentIndex < 0){
        this.currentIndex = this.ganeshChaturthiPreview.length - 1;
      }
      this.currentLightBoxImage = this.ganeshChaturthiPreview[this.currentIndex];
    }
    if(curDiv == 'GrandparentsDay'){
      if(this.currentIndex < 0){
        this.currentIndex = this.grandparentsDayPreview.length - 1;
      }
      this.currentLightBoxImage = this.grandparentsDayPreview[this.currentIndex];
    }
    if(curDiv == 'ProfilesDay'){
      if(this.currentIndex < 0){
        this.currentIndex = this.profilesDayPreview.length - 1;
      }
      this.currentLightBoxImage = this.profilesDayPreview[this.currentIndex];
    }
    if(curDiv == 'NatureWalk'){
      if(this.currentIndex < 0){
        this.currentIndex = this.natureWalkPreview.length - 1;
      }
      this.currentLightBoxImage = this.natureWalkPreview[this.currentIndex];
    }
    if(curDiv == 'NationalMathematicsDay'){
      if(this.currentIndex < 0){
        this.currentIndex = this.nationalMathematicsDayPreview.length - 1;
      }
      this.currentLightBoxImage = this.nationalMathematicsDayPreview[this.currentIndex];
    }
    if(curDiv == 'ChristmasCelebrations'){
      if(this.currentIndex < 0){
        this.currentIndex = this.christmasCelebrationsPreview.length - 1;
      }
      this.currentLightBoxImage = this.christmasCelebrationsPreview[this.currentIndex];
    }
    if(curDiv == 'SankranthiCelebrations'){
      if(this.currentIndex < 0){
        this.currentIndex = this.sankranthiCelebrationsPreview.length - 1;
      }
      this.currentLightBoxImage = this.sankranthiCelebrationsPreview[this.currentIndex];
    }
    if(curDiv == 'RepublicDay'){
      if(this.currentIndex < 0){
        this.currentIndex = this.republicDayPreview.length - 1;
      }
      this.currentLightBoxImage = this.republicDayPreview[this.currentIndex];
    }
    if(curDiv == 'FieldTripBotanicalGarden'){
      if(this.currentIndex < 0){
        this.currentIndex = this.fieldTripBotanicalGardenPreview.length - 1;
      }
      this.currentLightBoxImage = this.fieldTripBotanicalGardenPreview[this.currentIndex];
    }
  }

  ShowDiv(divVal: string) {
    this.currDiv = divVal;
    this.showblock=false;
  }
  ShowBlock() {
    this.currDiv = null;
    this.showblock=true;
  }

}
