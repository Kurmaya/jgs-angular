import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageSeo, SeoService, SITE_ORIGIN } from '../../seo.service';

const ORG_ID = `${SITE_ORIGIN}/#organization`;

/** SEO for the Contact Us page (/contact), L5. */
export const CONTACT_SEO: PageSeo = {
  title: 'Contact Us | Johnson Grammar School Kokapet & Mokila, Hyderabad',
  description: 'Contact Johnson Grammar School: call +91 95132 51488, WhatsApp +91 89770 06304 or email hello@jgschool.in. Addresses and maps for JGS Kokapet and the new JGS Mokila campus.',
  path: '/contact',
  shareTitle: 'Contact Johnson Grammar School, Hyderabad',
  shareDescription: 'Phone, WhatsApp, email and addresses for JGS Kokapet and JGS Mokila.',
  jsonLd: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${SITE_ORIGIN}/contact`,
        url: `${SITE_ORIGIN}/contact`,
        name: 'Contact Johnson Grammar School',
        about: { '@id': ORG_ID },
        inLanguage: 'en-IN'
      },
      {
        '@type': 'EducationalOrganization',
        '@id': ORG_ID,
        name: 'Johnson Grammar School',
        email: 'hello@jgschool.in',
        telephone: '+91-9513251488',
        contactPoint: [
          { '@type': 'ContactPoint', contactType: 'admissions', telephone: '+91-9513251488', email: 'hello@jgschool.in', areaServed: 'IN', availableLanguage: ['English'] },
          { '@type': 'ContactPoint', contactType: 'admissions', telephone: '+91-8977006304', areaServed: 'IN', description: 'WhatsApp' }
        ]
      }
    ]
  }
};

@Component({
  selector: 'app-contactmain',
  templateUrl: './contactmain.component.html',
  styleUrls: ['./contactmain.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactmainComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.apply(CONTACT_SEO);
  }
}
