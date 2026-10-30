import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AdmissionsComponent implements OnInit {
  
  constructor(private title: Title, private meta: Meta) { 
    //this.addTag();
    this.title.setTitle('Top Schools in Narsingi | Kokapte | Enquiry - JGS');
    this.meta.addTag({property:'og:title', content: 'Looking for the best schools in Hyderabad. Our school inquiry page provides information on the top school in HYD, including admission procedures, fees, and facilities for your childs education today.'},true)
  //let metaE1: HTMLMetaElement | null = this.meta.getTag('name = "description');
  //console.log(metaE1)
  }

  ngOnInit(): void {
    
  }

}
