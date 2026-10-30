import { Component } from '@angular/core';

/** "Your child's safety" section: the school's safety measures, listed one by one. */
@Component({
  selector: 'app-homesafety',
  templateUrl: './homesafety.component.html',
  styleUrls: ['./homesafety.component.scss']
})
export class HomesafetyComponent {
  readonly items = [
    { title: 'Background-verified staff', text: 'Our staff are background-verified before they join JGS.' },
    { title: 'CCTV surveillance', text: 'The campus is under 24x7 CCTV surveillance.' },
    { title: 'POCSO policy', text: 'A written child protection policy under the Protection of Children from Sexual Offences (POCSO) Act, 2012.' },
    { title: 'GPS-tracked transport', text: 'School buses are GPS-tracked.' },
    { title: '24x7 security', text: 'Security guards on duty round the clock.' },
    { title: 'Health care on campus', text: 'A full-time nurse, an on-call doctor and annual health check-ups.' }
  ];
}
