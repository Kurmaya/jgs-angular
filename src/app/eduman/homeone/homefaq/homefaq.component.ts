import { Component } from '@angular/core';
import { HOME_FAQ } from '../home-content';

/**
 * Home page FAQ (website change brief item C11). The questions and answers come
 * from home-content.ts, which also feeds the FAQ structured data, so they always match.
 */
@Component({
  selector: 'app-homefaq',
  templateUrl: './homefaq.component.html',
  styleUrls: ['./homefaq.component.scss']
})
export class HomefaqComponent {
  readonly faq = HOME_FAQ;
}
