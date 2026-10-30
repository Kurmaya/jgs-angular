# Home page changes: tracking, SEO and new content

Branch: `seo-home-page-changes`. Item IDs (T1, S3, C4 ...) refer to the school's
"Website Change Brief: jgschool.in Home Page, Tracking and SEO", version 2.

Please review, test on a copy of the site, and deploy. Nothing here has been deployed.

## 1. What changed

### Tracking (src/index.html, src/app/eduman/tracking.service.ts)

| Item | Change |
|---|---|
| T1 | Removed the Google Ads conversion (`AW-11049467860/buKACKmD7IUYENT_5ZQp`) that fired on every page load. It now fires only after a successful enquiry submission, from `TrackingService.enquirySubmitted()`. |
| T2 | Call and WhatsApp links on the home page and footer send `call_click` / `whatsapp_click` to the dataLayer and GA4. Create the two Google Ads conversion actions in GTM or Google Ads from these events (set them as Secondary). |
| T3 | Meta Pixel now gets `Lead` on successful enquiry and `Contact` on call/WhatsApp clicks. The Conversions API (server side) is not done; it needs Meta Events Manager access. |
| T4 | Removed the second copy of the GTM-T57VRH2 snippet. |
| T5 | Removed Universal Analytics (UA-249305266-1). Kept GA4 G-QEZM6GNZ4W hard-coded and added `gtag('config', 'AW-11049467860')` so Google Ads conversions have their tag configured. Only one gtag.js loader remains. |

Events are fired directly from the site. **If you add GTM tags for these same events, remove the matching direct calls in `tracking.service.ts` first, or they will be counted twice.**

### SEO (src/app/eduman/seo.service.ts, src/app/eduman/homeone/home-content.ts)

| Item | Change |
|---|---|
| S1 | The home page is now prerendered: `dist/eduman/browser/index.html` contains the full page text, headings, FAQ and structured data. The one-second loading spinner that hid the content was removed from the home page. |
| S2 | Header logo links now go to `/` instead of `/home`. A self-referencing canonical link is set per page by `SeoService` (the old global canonical used curly quotes and pointed to jgsibpyp.org). Host redirects are in `deploy/htaccess-example`. |
| S3 | New home page title and meta description. |
| S4 | One H1 on the home page; section headings are H2s. |
| S5 | Removed the "ArchiveOrganization" JSON-LD (wrong type, old domain, wrong phone and coordinates) from index.html. The home page now outputs Organization, Kokapet school, Mokila school, WebSite and FAQPage structured data, built from `home-content.ts` so it always matches the page. |
| S6 | Open Graph and Twitter tags on the home page. |
| S7 | Fixed "image not found", "shape" and "..." alt text in the sections used on the home page. The history timeline (customslider) is no longer on the home page. |
| S11 | Footer email link now opens hello@jgschool.in (was hello@jgsibpyp.org); "Supermaket" and "Shankerpally" corrected in both footers and the contact page; phone link uses `tel:+919513251488`. |

### Home page content

| Item | Change |
|---|---|
| C1 | New hero (`homeone/hero`): H1, sub-heading, brand line "All I want to Be...", four buttons. Mobile layout fixed so the longer text stays readable. |
| C2–C6 | New `app-homeintro` component: facts strip, About, Our campuses, Our curriculum, Why families choose JGS. |
| C7 | Chairman section heading is now "A message from our Chairman"; photo alt text added. |
| C8 | Facilities heading is now "Facilities at JGS Kokapet". (Items that appeared twice on the live site are Swiper's loop copies, not duplicates in the code.) |
| C9 | New `app-homeadmissions` section (id `enquire`) with the **enquiry form shown on the page** (the same Google Sheets form as /home), steps and document links. |
| C10 | Children's names removed from testimonials; heading "What parents say". |
| C11 | New `app-homefaq` section; questions and answers live in `home-content.ts`. |
| C12 | Blog heading is now "From our blog". |

### Enquiry form (src/app/eduman/enquiry-form)

- New `[inline]="true"` mode shows the form on the page; the default is still the popup used on /home. Use only one instance per page (the reCAPTCHA container has a fixed id).
- Kokapet now offers only Nursery to Grade 5 (choosing Kokapet clears a higher grade).
- Consent line with a Privacy Policy link added under the button (T7).
- Fires the conversions on success (T1, T3).
- No `document` access during server rendering.

### /home landing page (urgent fixes only)

- A1: the title and description no longer call Mokila an IB school.
- A6: "Possiblities" spelling fixed.
- The rest of Section 7 of the brief (A2 to A9) is not done yet.

### Build fixes needed for prerendering

- `tsconfig.server.json` pointed to the wrong file paths, so the server build never worked. Fixed.
- `src/assets/css/fontawesome-all.min.css` referenced five `.svg` font files that are not in the repository, which broke the build. The SVG references were removed; browsers use the .woff2/.woff files, which are present.
- `app.component.ts` and the mobile menu (MetisMenu) used browser-only code during server rendering; both now run only in the browser.
- `angular.json` prerender now renders `/` only (`guessRoutes: false`). Other pages still contain browser-only code; prerender them one at a time later.

## 2. How to build

Angular 13 needs older tooling. On Node 17 or later:

```bash
npm ci --legacy-peer-deps
export NODE_OPTIONS=--openssl-legacy-provider
npx ng run eduman:prerender
```

Output: `dist/eduman/browser/`. It contains `index.html` (the prerendered home page) and `index.original.html` (the plain app shell).

## 3. How to deploy (GoDaddy)

1. Back up the current site files and the current `.htaccess`.
2. Upload the contents of `dist/eduman/browser/`.
3. Update `.htaccess` using `deploy/htaccess-example`. **Other URLs must fall back to `index.original.html`, not `index.html`.** Otherwise every page would show the home page's text and canonical link to search engines.
4. Keep Google Ads pointing to `/home` for now (brief item A2).

### Staging check (Hostinger, 30 October 2026)

The first staging upload used a normal `ng build`, so the server sent an empty app shell and crawlers saw no text. Also, direct visits to `/about` and `/home` returned 404 because the staging site had no `.htaccess`. To fix:
- Upload the output of `npx ng run eduman:prerender` (not `ng build`), including `index.original.html`.
- Add the rewrite rules from `deploy/htaccess-example` to the staging `.htaccess` (Hostinger supports Apache rules).
- The staging `robots.txt` blocks Googlebot. That is right for staging; never copy it to the live site.

## 4. How to test after deploying

- `curl -s https://www.jgschool.in/ | grep "Nursery to Grade 5"` returns a match (S1).
- `curl -s https://www.jgschool.in/about | grep -c "Which grades does JGS Kokapet offer"` returns 0 (the fallback is correct).
- https://www.jgschool.in/blog/ and a blog post still open normally (the WordPress exception works).
- Google Tag Assistant: no Google Ads conversion on page load; exactly one after a test enquiry marked TEST.
- Meta Pixel Helper: one PageView on load, one Lead after the test enquiry, one Contact per call/WhatsApp click.
- Google Rich Results Test and validator.schema.org on https://www.jgschool.in/: no errors.
- WhatsApp and Facebook Sharing Debugger show the image, title and description.
- Phone (390 px wide) and desktop: the hero, form and FAQ display correctly.

## 5. Not done yet: needs access or decisions

**Inside the GTM container (GTM-T57VRH2).** These could not be changed from the code; please check the container:
- a second Meta Pixel tag (the live site initialises the pixel twice);
- a GA4 tag for G-1PKYS6BSDC (a second GA4 property; the school must choose one, T5);
- any tag that fires a Google Ads conversion on page view;
- whether AW-16775346810 (loaded in code on /home) is still in use (A8).

**Needs school input before it can go on the page:**
- Kokapet map coordinates and Google Business Profile link (JSON-LD `geo`, `sameAs`), and the Mokila PIN code.
- Transport areas served, fee range wording, admissions dates.
- Confirmation of the 500+ educators and 20,000+ alumni figures.
- Written parental consent for the testimonials and their photos (parent names and photos are still shown).
- Final Mokila wording after the IB replies. The current Mokila text is the interim wording from the brief.
- A 1200 x 630 social sharing image (`DEFAULT_SHARE_IMAGE` in `seo.service.ts`; the hero banner is used for now).
- **Header logo:** the logo file reads "MOKILA : KOKAPET, IB & ICSE" with the old "The Joy of being" tagline. A version without "IB & ICSE" is needed until Mokila's status is confirmed.

**Later items in the brief:** T3 Conversions API, T6 click IDs (needs new columns in the Google Sheet and Apps Script), S8 page speed, S9 PDF renames, S10 menu changes (with the new curriculum pages), S12 sitemap, L1/L2 landing pages, A2–A9 for /home.

## 6. WordPress blog (/blog/) and gallery (/gallery/)

These sections are not part of the Angular app, so they need their own changes.

- **Server config:** `deploy/htaccess-example` now passes `/blog/` and `/gallery/` straight through. Without this, WordPress post URLs (which are not real files) would be sent to the Angular app.
- **Tracking (T4, T5):** the blog and gallery load no Google Tag Manager, GA4 or Meta Pixel, so their visits and any enquiries that start there are not measured. Add the same GTM container (GTM-T57VRH2) and the same GA4 and Meta Pixel set-up as the main site (for WordPress, via a header-code or GTM plugin). Do **not** add a Google Ads conversion that fires on page load.
- **Blog titles:** every post's `<title>` is "My WordPress Site". In WordPress, set Settings > General > Site Title to "Johnson Grammar School" (the site name in the structured data currently reads "https://jgschool.in/"), and make sure the theme lets Yoast SEO control the title (theme support for `title-tag`, or Yoast's title settings), so each post shows its own SEO title.
- **Blog footer email:** check that it links to hello@jgschool.in.
- **Gallery:** /gallery/ is served as a plain HTML page (no WordPress files were found in its source). It has no meta description, canonical link or social tags, and all 24 photos have empty alt text. Add a description, `<link rel="canonical" href="https://www.jgschool.in/gallery/">`, Open Graph tags, and descriptive alt text (e.g. "Children in the library at JGS Kokapet, Hyderabad").
- **Sitemaps (S12):** `robots.txt` lists `https://jgschool.in/sitemap.xml` (without www). List the sitemaps on the www host, including the blog's Yoast sitemap:
  ```
  Sitemap: https://www.jgschool.in/sitemap.xml
  Sitemap: https://www.jgschool.in/blog/sitemap_index.xml
  ```
  Make sure the main `sitemap.xml` includes `/gallery/` and excludes `/home`.

## 7. Security note

`src/assets/JGS-Kokapet-enquiry-form _1_.html` (no longer linked from the site, but still deployed as a public file) contains a MyClassboard `api_key` for its enquiry API. Because this repository is public and the file is served publicly, check with MyClassboard whether the key is meant to be public; if not, ask them to rotate it and delete the file.
