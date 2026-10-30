import { Component } from '@angular/core';

/**
 * Home page sections after the hero: facts strip, about, campuses, curriculum
 * and "Why families choose JGS" (website change brief items C2 to C6).
 */
@Component({
  selector: 'app-homeintro',
  templateUrl: './homeintro.component.html',
  styleUrls: ['./homeintro.component.scss']
})
export class HomeintroComponent {
  readonly facts = [
    { value: 'Since 1979', label: '47 years in Hyderabad' },
    { value: 'IB DP', label: 'IB Diploma Programme since 2008' },
    { value: 'IB PYP', label: 'At JGS Kokapet since 2025' },
    { value: '500+', label: 'Educators' },
    { value: '20,000+', label: 'Alumni' }
  ];
}
