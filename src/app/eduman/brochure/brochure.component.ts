import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-brochure',
  templateUrl: './brochure.component.html',
  styleUrls: ['./brochure.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BrochureComponent implements OnInit {

  constructor(private title: Title, private meta:Meta) { }

  ngOnInit(): void {
    this.title.setTitle('IB PYP School - Best International Curriculum');
    this.meta.addTag({name: 'decsription', content: 'Best International School, now in Kokapet, Gachibowli.'})
  }

}
