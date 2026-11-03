import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrackingService } from '../../tracking.service';

/**
 * Contact Us page body (/contact): contact details, campuses, and a general message form.
 * Messages are emailed to hello@jgschool.in through FormSubmit (https://formsubmit.co).
 * Admission enquiries are sent to /enquiry-form instead.
 */
@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactformComponent {
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  formData = {
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    honey: ''
  };

  constructor(public tracking: TrackingService) {}

  async submitForm(form: NgForm): Promise<void> {
    this.successMessage = '';
    this.errorMessage = '';

    if (form.invalid) {
      form.control.markAllAsTouched();
      this.errorMessage = 'Please fill in your name, a valid 10-digit phone number, a valid email address and your message.';
      return;
    }

    // Spam trap filled in: pretend it worked and send nothing.
    if (this.formData.honey) {
      this.successMessage = 'Thank you! Your message has been sent.';
      form.resetForm();
      return;
    }

    this.isSubmitting = true;

    try {
      const response = await fetch('https://formsubmit.co/ajax/hello@jgschool.in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: this.formData.name.trim(),
          phone: this.formData.phone.trim(),
          email: this.formData.email.trim(),
          subject: this.formData.subject.trim(),
          message: this.formData.message.trim(),
          _subject: 'New website message - Johnson Grammar School',
          _template: 'table',
          _honey: this.formData.honey
        })
      });
      const result = await response.json().catch(() => ({}));

      if (response.ok && (result.success === true || result.success === 'true')) {
        this.successMessage = 'Thank you! Your message has been sent. We will get back to you soon.';
        this.tracking.contactMessageSent();
        form.resetForm();
      } else {
        this.errorMessage = 'Sorry, your message could not be sent. Please try again, or email hello@jgschool.in.';
      }
    } catch {
      this.errorMessage = 'Sorry, your message could not be sent. Please check your connection, or email hello@jgschool.in.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
