import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-childlearn',
  templateUrl: './childlearn.component.html',
  styleUrls: ['./childlearn.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChildLearnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
