import { Component, Input } from '@angular/core';

/** Admissions section (website change brief item C9). */
@Component({
  selector: 'app-homeadmissions',
  templateUrl: './homeadmissions.component.html',
  styleUrls: ['./homeadmissions.component.scss']
})
export class HomeadmissionsComponent {
  /**
   * true (home page): show the enquiry form here; this section is the "#enquire" target.
   * false (/home): show only the steps and documents; the form is in the hero there.
   */
  @Input() showForm = true;
}
