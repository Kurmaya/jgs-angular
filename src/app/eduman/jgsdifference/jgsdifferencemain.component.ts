import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-jgsdifferencemain',
  templateUrl: './jgsdifferencemain.component.html',
  styleUrls: ['./jgsdifferencemain.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JgsdifferencemainComponent implements OnInit {

  constructor(private title:Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Best School in Mokila and Kokapet | Nursery Schools in Gachibowli Hyderabad');
    this.meta.addTag({name: 'decription', content: 'JGS is one of the best international schools in Mokila and Kokapet, HYD which offers programs based on a project-based learning approach. Best schools in Kokapet.'})
  }

}
