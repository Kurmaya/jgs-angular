import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumbComponent implements OnInit {

  @Input() breadcrumbTitle: string | undefined;
  @Input() breadcrumbSubTitle: string | undefined;
  @Input() imgName: string | undefined;
  @Input() imgMobName: string | undefined;
  @Input() lineOne: string | undefined;
  @Input() lineTwo: string | undefined;
  /**
   * true (default): the banner tagline is an <h2>, as before.
   * false: it is styled the same but is not a heading, for pages whose real
   * <h1> is in the page body (the banner appears twice, for desktop and mobile).
   */
  @Input() taglineAsHeading = true;

  
  constructor() { }

  ngOnInit(): void {
  }

}
