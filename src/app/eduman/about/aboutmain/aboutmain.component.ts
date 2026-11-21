import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-aboutmain',
  templateUrl: './aboutmain.component.html',
  styleUrls: ['./aboutmain.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutmainComponent implements OnInit {

  constructor(private titleService:Title) { }

  ngOnInit(): void {
    // L18: switched off. This placeholder title overrode the About page's real title (set in aboutmission).
    // this.titleService.setTitle("your page title")
  }

}
