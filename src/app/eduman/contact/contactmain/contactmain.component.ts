import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contactmain',
  templateUrl: './contactmain.component.html',
  styleUrls: ['./contactmain.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactmainComponent implements OnInit {

  constructor(private title:Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Find the best Schools in Hyderabad | Ranking & Reviews - JGS');
    this.meta.addTag({name: 'description', content: 'Discover the top schools in Kokapet, Hyderabad with our comprehensive guide. Browse rankings reviews and Key information to help you choose the best school for your child'});
  }

}
