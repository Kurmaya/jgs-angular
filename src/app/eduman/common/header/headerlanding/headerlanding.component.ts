import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-headerlanding',
  templateUrl: './headerlanding.component.html',
  styleUrls: ['./headerlanding.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderLandingComponent implements OnInit {
  //topbar hide 
  noteContentActive:boolean=false;
  noteButton(){
    if(this.noteContentActive==false){
      this.noteContentActive=true;
    }
    else {
      this.noteContentActive=false;
    }
  }
  //topbar hide 


  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 50;
  }

  constructor() {}

  ngOnInit(): void {}

}
