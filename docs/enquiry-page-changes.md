# Enquiry page, brochure downloads and brochure menu

Three commits on top of the curriculum changes (`665e700`).

## /enquiry-form
- Uses the same Admission Enquiry 2027–28 form as the home page: Google Sheet, reCAPTCHA, and Google Ads / GA4 / Meta tracking. The MyClassboard "Registration Form" button is removed.
- New content:
  - admissions at a glance, including the IB/CISCE status note for Mokila;
  - what happens next;
  - call, WhatsApp and email;
  - campus addresses with map links;
  - fee structure and admission policy;
  - six admissions FAQs.
- SEO: new title, description, canonical and share tags, plus JSON-LD (ContactPage and FAQPage). The text lives in `admissions/admissions-content.ts`.
- The page is now prerendered: `angular.json` prerender routes include `/enquiry-form`.

## Enquiry form (all pages)
- The success message now reads: **"Thank you! Our admissions team will contact you shortly. If you would like to reach us sooner, please WhatsApp +91 89770 06304."** The number links to WhatsApp, and a tap is tracked as `whatsapp_click`.
- After a successful enquiry, the form offers the brochure download on /enquiry-form, the home page and /home (`[showBrochures]="true"`). Brochures are listed in `enquiry-form/brochures.ts`. Downloads send a `brochure_download` event (GA4 and the dataLayer).

## Admissions menu
- Admissions ▸ View Brochure ▸ **JGS Kokapet** | **JGS Mokila**, in both the desktop and phone menus.
- `assets/pdfs/JGS-Mokila-brochure.pdf` is a one-page "coming soon" sheet with admissions contacts.
- When the designer's Mokila brochure arrives:
  1. Upload it over that file, keeping the same name. The menu link then works with no code change.
  2. Set the Mokila `file` in `enquiry-form/brochures.ts` so the brochure is also offered after the form.
- The Kokapet brochure is unchanged (`assets/pdfs/JGS brochure.pdf`). The designer's corrected version can replace it with the same name.

## Deploy
1. Build: `npm ci --legacy-peer-deps`, then `NODE_OPTIONS=--openssl-legacy-provider npx ng run eduman:prerender`.
2. Upload all of `dist/eduman/browser/`. Make sure these are included:
   - the new `enquiry-form/index.html`;
   - `assets/pdfs/JGS-Mokila-brochure.pdf`.
3. No `.htaccess` change is needed for this release. The `/icse` 301 rule from the curriculum release is still missing on the live server.

## After going live
Send one real test enquiry from /enquiry-form. Check that:
- the row appears in the Google Sheet;
- the brochure button appears;
- the PDF opens.
