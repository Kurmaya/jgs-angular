import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FacilitesComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Top School Facilities In HYD - Best School for Your Child | JGS');
    this.meta.addTag({name: 'decription', content: 'Choose the best school for your childs education. Get information on school infrastructure, amenities, sports facilities and more. Find the perfect school for your childs academic and personal development.'})
  }

}
