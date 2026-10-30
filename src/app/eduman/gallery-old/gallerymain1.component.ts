import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gallerymain1',
  templateUrl: './gallerymain1.component.html',
  styleUrls: ['./gallerymain1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GallerymainComponent1 implements OnInit {

  constructor(private title: Title, private meta:Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Best schools near Financial District - IB PYP');
    this.meta.addTag({name: 'description', content:'Johnson Grammar School now in Kokapet. Connect with us today.'})
  }

}
