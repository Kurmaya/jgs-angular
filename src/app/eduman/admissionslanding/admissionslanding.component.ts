import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-admissionslanding',
  templateUrl: './admissionslanding.component.html',
  styleUrls: ['./admissionslanding.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdmissionsLandingComponent implements OnInit {
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
  showLanding = true;
  showTerms=false;
  showPrivacy=false;
  constructor(private title: Title, private meta:Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Admissions Open | International School In Kokapet - JGS');
    this.meta.addTag({name: 'decsription', content: 'Admissions open for AY 24-25, an esteemed international school in Kokapet. Open your childs doors to a world-class education, global opportunities, and a nurturing environment. Apply now and secure a bright future for your kid.'});
  }

  admissions():void{
    this.showTerms=false;
    this.showLanding = true;
    this.showPrivacy=false;
  }
  terms():void{
    this.showTerms=true;
    this.showLanding = false;
    this.showPrivacy=false;
  }
  privacy():void{
    this.showPrivacy=true;
    this.showLanding = false;
    this.showTerms=false;
  }

}
