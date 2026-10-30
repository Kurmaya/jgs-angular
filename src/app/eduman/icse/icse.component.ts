import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-icse',
  templateUrl: './icse.component.html',
  styleUrls: ['./icse.component.scss']
})
export class IcseComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    if (window.location.hash === '#ICSE') {
      setTimeout(() => {
        const element = document.getElementById('ICSE');

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }
}