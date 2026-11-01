import { PageSeo, SITE_ORIGIN } from '../seo.service';
import { FaqItem } from '../homeone/home-content';

/**
 * Text used in more than one place on the curriculum pages (on the page and in
 * the structured data). Edit it here so the page and the JSON-LD always match.
 *
 * IB wording rules (from the IB's guidance for schools): JGS Mokila is NOT yet an
 * IB World School. Describe it only as "planned", with
 * "intends to apply" and "subject to IB approval"; never "offers" or "will offer"
 * with a date, and never with an IB logo. The same applies to CISCE affiliation.
 */

const ORG_ID = `${SITE_ORIGIN}/#organization`;

export const IB_FAQ: FaqItem[] = [
  {
    question: 'Is JGS Kokapet an IB school?',
    answer: 'Yes. JGS Kokapet is an IB World School, authorised by the International Baccalaureate to offer the Primary Years Programme (PYP) on 10 April 2025.'
  },
  {
    question: 'Which grades does JGS Kokapet offer from 2027–28?',
    answer: 'From the 2027–28 academic year, JGS Kokapet admits children from Nursery (EY1) to Grade 2: Nursery (EY1), PP1 (EY2), PP2 (EY3), Grade 1 and Grade 2, all following the IB Primary Years Programme.'
  },
  {
    question: 'Will JGS Mokila offer the IB?',
    answer: 'Johnson Grammar School plans for JGS Mokila to offer the IB Primary Years Programme (Nursery to Grade 5), the Middle Years Programme (starting with Grades 6 and 7 and adding a grade each year up to Grade 10) and the Diploma Programme (Grades 11 and 12). JGS intends to apply to the IB for PYP and MYP candidacy in 2027. JGS Mokila is not yet an IB World School, and only schools authorised by the IB can offer its programmes.'
  },
  {
    question: 'What is the IB Middle Years Programme (MYP)?',
    answer: 'The MYP is the IB’s programme for students aged 11 to 16 (Grades 6 to 10). Students study eight subject groups, learn through key concepts linked to real-world contexts, take part in service as action, and complete a Personal Project in the final year. At JGS Mokila, the MYP is planned to start with Grades 6 and 7 and add one grade each year up to Grade 10.'
  },
  {
    question: 'When will the IB Diploma Programme move to JGS Mokila?',
    answer: 'Subject to approval by the International Baccalaureate, JGS plans to move its IB Diploma Programme from JGS IBDP, Mallapur, to JGS Mokila from the 2028–29 academic year. Until then, the Diploma Programme continues at JGS IBDP, Mallapur, where it has been offered since 2008.'
  },
  {
    question: 'Is the IB Diploma recognised by Indian universities?',
    answer: 'Yes. The IB Diploma is recognised by universities in India and around the world, and the Association of Indian Universities (AIU) treats it as equivalent to the Class 12 qualification of Indian boards. Families should check the subject requirements of specific courses and entrance examinations.'
  },
  {
    question: 'How long has Johnson Grammar School offered the IB?',
    answer: 'Since 2008. JGS IBDP, Mallapur, was authorised to offer the IB Diploma Programme on 25 March 2008, and JGS Kokapet was authorised to offer the IB Primary Years Programme on 10 April 2025.'
  },
  {
    question: 'How do I apply?',
    answer: 'Send an enquiry using the form on our home page, call +91 95132 51488, message us on WhatsApp at +91 89770 06304, or email hello@jgschool.in. Admissions are open for 2027–28.'
  }
];

export const ICSE_FAQ: FaqItem[] = [
  {
    question: 'Will JGS Mokila offer the ICSE curriculum?',
    answer: 'Yes, that is our plan. JGS Mokila is planned to offer the ICSE curriculum from Grade 1 to Grade 7 from the 2027–28 academic year, subject to affiliation to the Council for the Indian School Certificate Examinations (CISCE). JGS Mokila is awaiting CISCE affiliation.'
  },
  {
    question: 'Which grades will follow the ICSE at JGS Mokila?',
    answer: 'Grade 1 to Grade 7, from the 2027–28 academic year, subject to CISCE affiliation.'
  },
  {
    question: 'Does Johnson Grammar School have experience with the ICSE?',
    answer: 'Yes. Johnson Grammar School was founded in Hyderabad in 1979 and has offered the ICSE ever since. Our Habsiguda and Mallapur campuses offer the ICSE and ISC today.'
  },
  {
    question: 'Are there board examinations in Grades 1 to 7?',
    answer: 'No. In Grades 1 to 7, students are assessed by the school through class work, projects and examinations. The first CISCE board examination is the ICSE at the end of Class 10.'
  },
  {
    question: 'Is the ICSE recognised for higher studies?',
    answer: 'Yes. CISCE certificates are recognised across India. After the ICSE (Class 10), students can continue to the ISC, move to another board such as CBSE or a state board, or join the IB Diploma Programme for Classes 11 and 12.'
  },
  {
    question: 'What is the difference between the IB and the ICSE?',
    answer: 'Both are rigorous, English-medium curricula. The ICSE follows a structured, subject-based national syllabus known for its breadth and strong emphasis on English, with a board examination at the end of Class 10. The IB is an international framework built on inquiry and concepts, with continuous, criteria-based assessment in the primary and middle years. JGS Mokila plans to offer both, so families can choose the pathway that suits their child.'
  },
  {
    question: 'How do I apply?',
    answer: 'Send an enquiry using the form on our home page, call +91 95132 51488, message us on WhatsApp at +91 89770 06304, or email hello@jgschool.in. Admissions enquiries are open for 2027–28.'
  }
];

function faqJsonLd(faq: FaqItem[]): object {
  return {
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer }
    }))
  };
}

const KOKAPET = {
  '@type': 'ElementarySchool',
  '@id': `${SITE_ORIGIN}/#kokapet`,
  name: 'Johnson Grammar School Kokapet',
  description: 'IB World School offering the International Baccalaureate Primary Years Programme, authorised on 10 April 2025 (IB school code 063066). From 2027–28, admits Nursery (EY1) to Grade 2.',
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
  sameAs: ['https://ibo.org/school/063066/']
};

const MOKILA_ADDRESS = {
  '@type': 'PostalAddress',
  postalCode: '501203',
  streetAddress: 'Behind Vijetha Supermarket, SARK Garden Villas Road, Mokila, Shankarpally',
  addressLocality: 'Hyderabad',
  addressRegion: 'Telangana',
  addressCountry: 'IN'
};

export const IB_SEO: PageSeo = {
  title: 'IB PYP School in Kokapet, Hyderabad | IB at JGS Kokapet & Mokila | Johnson Grammar School',
  description: 'JGS Kokapet is an IB World School for the Primary Years Programme, admitting Nursery (EY1) to Grade 2 from 2027–28. Read about the PYP, MYP and DP planned at JGS Mokila.',
  path: '/curriculum/ib',
  shareTitle: 'The IB at JGS Kokapet and JGS Mokila | Johnson Grammar School',
  shareDescription: 'IB PYP at JGS Kokapet (IB World School since 2025), and the IB journey planned at JGS Mokila.',
  jsonLd: {
    '@context': 'https://schema.org',
    '@graph': [
      KOKAPET,
      {
        '@type': 'School',
        '@id': `${SITE_ORIGIN}/#mokila`,
        name: 'JGS Mokila',
        description: 'New Johnson Grammar School campus in Mokila, Hyderabad. JGS plans for JGS Mokila to offer the IB PYP, MYP and DP; JGS intends to apply for PYP and MYP candidacy in 2027. JGS Mokila is not yet an IB World School.',
        telephone: '+91-9000287940',
        parentOrganization: { '@id': ORG_ID },
        address: MOKILA_ADDRESS
      },
      {
        '@type': 'HighSchool',
        '@id': `${SITE_ORIGIN}/#ibdp-mallapur`,
        name: 'Johnson Grammar School IBDP',
        description: 'IB World School offering the International Baccalaureate Diploma Programme since 25 March 2008 (IB school code 003528).',
        telephone: '+91-8297131222',
        parentOrganization: { '@id': ORG_ID },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Plot No. A/16, Mallapur Road, Nacharam',
          addressLocality: 'Hyderabad',
          addressRegion: 'Telangana',
          postalCode: '500076',
          addressCountry: 'IN'
        },
        sameAs: ['https://ibo.org/school/003528/']
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_ORIGIN}/curriculum/ib`,
        url: `${SITE_ORIGIN}/curriculum/ib`,
        name: 'The International Baccalaureate (IB) at JGS Kokapet and JGS Mokila',
        about: { '@id': ORG_ID },
        inLanguage: 'en-IN'
      },
      faqJsonLd(IB_FAQ)
    ]
  }
};

export const ICSE_SEO: PageSeo = {
  title: 'ICSE at JGS Mokila, Hyderabad | Grades 1 to 7, Planned from 2027–28 | Johnson Grammar School',
  description: 'JGS Mokila plans to offer the ICSE curriculum from Grade 1 to Grade 7 from 2027–28, subject to CISCE affiliation, building on Johnson Grammar School’s ICSE experience since 1979.',
  path: '/curriculum/icse',
  shareTitle: 'ICSE at JGS Mokila (planned) | Johnson Grammar School',
  shareDescription: 'The ICSE, Grades 1 to 7, planned at JGS Mokila from 2027–28, from a school that has taught the ICSE since 1979.',
  jsonLd: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'School',
        '@id': `${SITE_ORIGIN}/#mokila`,
        name: 'JGS Mokila',
        description: 'New Johnson Grammar School campus in Mokila, Hyderabad, planned to offer the ICSE curriculum from Grade 1 to Grade 7 from 2027–28, subject to CISCE affiliation.',
        telephone: '+91-9000287940',
        parentOrganization: { '@id': ORG_ID },
        address: MOKILA_ADDRESS
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_ORIGIN}/curriculum/icse`,
        url: `${SITE_ORIGIN}/curriculum/icse`,
        name: 'ICSE at JGS Mokila: Grades 1 to 7, planned from 2027–28',
        about: { '@id': ORG_ID },
        inLanguage: 'en-IN'
      },
      faqJsonLd(ICSE_FAQ)
    ]
  }
};

export const CURRICULUM_HUB_SEO: PageSeo = {
  title: 'Curriculum at Johnson Grammar School Kokapet & Mokila | IB and ICSE',
  description: 'The IB Primary Years Programme at JGS Kokapet, and the IB and ICSE curricula planned at JGS Mokila. Choose a curriculum to learn more.',
  path: '/curriculum'
};
