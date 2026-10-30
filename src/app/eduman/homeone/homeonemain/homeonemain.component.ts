import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-homeonemain',
  templateUrl: './homeonemain.component.html',
  styleUrls: ['./homeonemain.component.scss']
})
export class HomeonemainComponent implements OnInit {
  loader=true;
  constructor(private title: Title, private meta: Meta) { 
  }

  ngOnInit(): void {
    this.title.setTitle('Best International School in Kokapet, HYD | Admissions | Academy');
    this.meta.addTag({name: 'description', content: 'Johnson Grammar School offers all the required amenities. Best IB School in Kokapet, Hyderabad. Careers | School Fees | Staff Directory | Admissions'})
    setTimeout(()=>{
      this.loader = false
    }, 1000);
  }

}
