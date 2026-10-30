import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CurriculumComponent implements OnInit {

  constructor(private title: Title, private meta:Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Schools in Manikonda Hyderabad - Johnson Grammar School');
    //this.meta.addTag({name: 'decsription', content: 'Best International School, now in Kokapet, Gachibowli.'})
    this.meta.updateTag({ 
      name: 'description',
      content: 'The Johnsons Grammer School was introduced Especially for 3-12 aged children. The main motto of the program is the Learner, Learning and teaching the learner community'
  });
  }

}
