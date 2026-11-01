import { PageSeo, SITE_ORIGIN } from '../seo.service';
import { FaqItem } from '../homeone/home-content';

/**
 * Text for the Admission Enquiry page (/enquiry-form) that is used on the page and in
 * the structured data. Edit it here so the two always match.
 *
 * Wording rule: JGS Mokila is "planned" / "subject to IB approval" / "subject to CISCE
 * affiliation". Do not say Mokila offers, or is authorised for, the IB or the ICSE.
 */
export const ENQUIRY_FAQ: FaqItem[] = [
  {
    question: 'Which grades can I apply for in 2027–28?',
    answer: 'At JGS Kokapet, Nursery (EY1) to Grade 2. At our new JGS Mokila campus, admissions enquiries are open for Nursery to Grade 7.'
  },
  {
    question: 'Which curriculum does each campus follow?',
    answer: 'JGS Kokapet is an IB World School for the Primary Years Programme (PYP), authorised on 10 April 2025. JGS Mokila plans to offer the IB PYP and MYP, and the ICSE for Grades 1 to 7, subject to IB approval and CISCE affiliation.'
  },
  {
    question: 'Can I download the school brochure?',
    answer: 'Yes. After you submit the enquiry form on this page, a link to download the brochure appears straight away.'
  },
  {
    question: 'What happens after I send an enquiry?',
    answer: 'Our admissions team will contact you to answer your questions and invite you to visit the campus. They will then guide you through the admission process.'
  },
  {
    question: 'Where can I find the fees and the admission policy?',
    answer: 'You can download the fee structure and the admission policy from the Useful documents section of this page. Our admissions team will also answer any questions about fees.'
  },
  {
    question: 'How do I contact the admissions team?',
    answer: 'Call +91 95132 51488, message us on WhatsApp at +91 89770 06304, or email hello@jgschool.in.'
  }
];

const PAGE_URL = `${SITE_ORIGIN}/enquiry-form`;

export const ENQUIRY_SEO: PageSeo = {
  title: 'Admission Enquiry 2027–28 | JGS Kokapet & Mokila, Hyderabad | Johnson Grammar School',
  description: 'Enquire about admissions for 2027–28 at Johnson Grammar School: JGS Kokapet (IB PYP, Nursery to Grade 2) and our new JGS Mokila campus (Nursery to Grade 7). Download the brochure.',
  path: '/enquiry-form',
  shareTitle: 'Admission Enquiry 2027–28 | Johnson Grammar School, Hyderabad',
  shareDescription: 'Send an admission enquiry for JGS Kokapet or JGS Mokila and download our brochure.',
  jsonLd: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': PAGE_URL,
        url: PAGE_URL,
        name: 'Admission Enquiry 2027–28',
        about: { '@id': `${SITE_ORIGIN}/#organization` },
        inLanguage: 'en-IN'
      },
      {
        '@type': 'FAQPage',
        mainEntity: ENQUIRY_FAQ.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer }
        }))
      }
    ]
  }
};
