
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactformComponent implements OnInit {

  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  formData = {
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  async submitForm(form: NgForm): Promise<void> {

    // Check required fields
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    try {

      const response = await fetch(
        'https://formsubmit.co/ajax/hello@jgschool.in',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },

          body: JSON.stringify({

            name: this.formData.name,
            phone: this.formData.phone,
            email: this.formData.email,
            subject: this.formData.subject,
            message: this.formData.message,

            _subject: 'New Contact Form Submission - JG School',
            _captcha: 'true'

          })
        }
      );

      const result = await response.json();

      console.log('FormSubmit response:', result);

      if (response.ok && result.success) {

        this.successMessage =
          'Thank you! Your message has been sent successfully.';

        // Clear the form
        form.resetForm();

      } else {

        this.errorMessage =
          'Unable to send your message. Please try again.';

        console.error('FormSubmit error:', result);
      }

    } catch (error) {

      console.error('FormSubmit request failed:', error);

      this.errorMessage =
        'Something went wrong. Please try again later.';

    } finally {

      this.isSubmitting = false;
    }
  }

}

