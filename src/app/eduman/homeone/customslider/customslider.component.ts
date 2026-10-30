import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $: any; 
@Component({
  selector: 'app-customslider',
  templateUrl: './customslider.component.html',
  styleUrls: ['./customslider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomsliderComponent implements OnInit {
  //declare var $: any;
  constructor() { }

  ngOnInit(): void {
    $(document).ready(() => {  
      var attrValue = $(this).attr('data-bs-slide-to');

      var click = $(this).trigger('click');
      
      $("#carouselExampleIndicators .carousel-indicators li").hover(function(){
      var goto = parseInt((attrValue));
     // alert(goto);
        $("#carouselExampleIndicators").carousel(goto);  
       // console.log(attrValue);
      });

      $('.carousel-indicators  button').on('mouseover',function(){
       click;

        ;
    })
      
  });
  }
 

}
