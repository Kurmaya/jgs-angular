import { PageSeo, SITE_ORIGIN } from '../seo.service';

/**
 * Home page text that is used in more than one place (on the page and in the
 * structured data). Edit it here so the page and the JSON-LD always match.
 * See the website change brief, items S3, S5, S6 and C11.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const HOME_FAQ: FaqItem[] = [
  {
    question: 'Which grades does JGS Kokapet offer?',
    answer: 'JGS Kokapet admits children from Nursery to Grade 5 and follows the International Baccalaureate Primary Years Programme (IB PYP).'
  },
  {
    question: 'Is JGS Kokapet an IB school?',
    answer: 'Yes. JGS Kokapet is an IB World School, authorised by the International Baccalaureate to offer the Primary Years Programme on 10 April 2025.'
  },
  {
    question: 'Where is JGS Kokapet?',
    answer: 'JGS Kokapet is at Plot No. 65/6, Brindavan Colony, Narsingi, Hyderabad 500075, close to the Financial District and Gachibowli in west Hyderabad.'
  },
  {
    question: 'When are admissions open?',
    answer: 'Admissions for the 2027–28 academic year are open. Send an enquiry using the form on this page, call +91 95132 51488 or message us on WhatsApp.'
  },
  {
    question: 'What are the fees at JGS Kokapet?',
    answer: 'The current fee structure can be downloaded from the admissions section of this page, and our admissions team will answer any questions about fees.'
  },
  {
    question: 'Does JGS provide school transport?',
    answer: 'Yes. JGS Kokapet provides safe school transport. Please contact our admissions team to check the routes for your area.'
  },
  {
    question: 'What is JGS Mokila?',
    answer: 'JGS Mokila is Johnson Grammar School’s new campus on SARC Garden Villas Road, Mokila, Shankarpally, Hyderabad. It is planned to offer the IB and ICSE curricula. JGS Mokila is not yet an IB World School or IB candidate school, and is not yet affiliated to the CISCE.'
  },
  {
    question: 'How do I contact the admissions team?',
    answer: 'Call +91 95132 51488, message us on WhatsApp at +91 89770 06304, or email hello@jgschool.in.'
  }
];

const ORG_ID = `${SITE_ORIGIN}/#organization`;

export const HOME_SEO: PageSeo = {
  title: 'JGS Kokapet & Mokila | IB PYP School in Hyderabad | Admissions 2027–28',
  description: 'Johnson Grammar School, Hyderabad since 1979. IB World School for the Primary Years Programme (Nursery to Grade 5) at Kokapet, and our new Mokila campus. Enquire now.',
  path: '/',
  shareTitle: 'JGS Kokapet & Mokila | Johnson Grammar School, Hyderabad',
  shareDescription: 'IB PYP school, Nursery to Grade 5, at Kokapet. Part of Johnson Grammar School, Hyderabad, since 1979.',
  jsonLd: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        '@id': ORG_ID,
        name: 'Johnson Grammar School',
        alternateName: 'JGS',
        url: `${SITE_ORIGIN}/`,
        logo: `${SITE_ORIGIN}/assets/img/whatsinaname/JGSNewwLogo.png`,
        foundingDate: '1979',
        email: 'hello@jgschool.in',
        telephone: '+91-9513251488',
        sameAs: [
          'https://www.facebook.com/JohnsonGrammarSchoolkokapet/',
          'https://www.instagram.com/jgskokapet/',
          'https://www.linkedin.com/school/johnson-grammar-schools/'
        ],
        subOrganization: [{ '@id': `${SITE_ORIGIN}/#kokapet` }, { '@id': `${SITE_ORIGIN}/#mokila` }]
      },
      {
        '@type': 'ElementarySchool',
        '@id': `${SITE_ORIGIN}/#kokapet`,
        name: 'Johnson Grammar School Kokapet',
        description: 'IB World School offering the International Baccalaureate Primary Years Programme from Nursery to Grade 5, authorised on 10 April 2025. IB school code 063066.',
        url: `${SITE_ORIGIN}/`,
        telephone: '+91-9513251488',
        email: 'hello@jgschool.in',
        parentOrganization: { '@id': ORG_ID },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Plot No. 65/6, Brindavan Colony, Narsingi',
          addressLocality: 'Hyderabad',
          addressRegion: 'Telangana',
          postalCode: '500075',
          addressCountry: 'IN'
        },
        // TODO (school): add "geo" coordinates and the Google Business Profile link from the Kokapet profile.
        sameAs: ['https://ibo.org/school/063066/']
      },
      {
        '@type': 'School',
        '@id': `${SITE_ORIGIN}/#mokila`,
        name: 'JGS Mokila',
        description: 'New Johnson Grammar School campus in Mokila, Hyderabad.',
        telephone: '+91-9513251488',
        email: 'hello@jgschool.in',
        parentOrganization: { '@id': ORG_ID },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Behind Vijetha Supermarket, SARC Garden Villas Road, Mokila, Shankarpally',
          addressLocality: 'Hyderabad',
          addressRegion: 'Telangana',
          // TODO (school): add the Mokila PIN code as "postalCode".
          addressCountry: 'IN'
        }
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_ORIGIN}/#website`,
        url: `${SITE_ORIGIN}/`,
        name: 'Johnson Grammar School Kokapet & Mokila',
        publisher: { '@id': ORG_ID },
        inLanguage: 'en-IN'
      },
      {
        '@type': 'FAQPage',
        mainEntity: HOME_FAQ.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer }
        }))
      }
    ]
  }
};
