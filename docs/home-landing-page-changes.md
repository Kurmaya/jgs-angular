# /home ad landing page changes

Branch: `home-landing-page`. Item IDs refer to Section 7 of the school's
"Website Change Brief: jgschool.in Home Page, Tracking and SEO", version 2.

This branch also carries two commits that were pushed after pull request #1 was merged:
`b880a8f` (section links stop below the sticky header) and `c253faf` (`deploy/htaccess-example`
based on the live server file). The `.htaccess` is already live.

## What changed

| Item | Change |
|---|---|
| A2 | `/home` now has `<meta name="robots" content="noindex, follow">` and a self-referencing canonical, set via `SeoService`. Keep it out of the sitemap. Do not redirect `/home` while ads point to it. |
| A3 | **School decision: parents look through the page first, then fill the form.** The enquiry form is on the page (it was only in a popup), in the Admissions section near the end (`#enquire`). Hero buttons "Explore JGS" (to `#why`) and "Enquire for 2027–28" (to `#enquire`), and on phones a sticky **Call \| WhatsApp \| Enquire** bar (`app-stickycta`), jump to it. The sticky bar replaces the header "Call Now" button and floating WhatsApp icon on phones. |
| A4 | Form fields are unchanged, by the school's decision, so the Google Sheet script needs no change. Grades now depend on the campus: **Kokapet Nursery–Grade 5, Mokila Nursery–Grade 7** (school decision). Before a campus is chosen, Nursery–Grade 7 is shown. Choosing a campus clears a grade it doesn't offer. |
| A5 | On success, the form fires the Google Ads enquiry conversion, GA4 `generate_lead` and Meta `Lead` (same as the home page). It shows the existing thank-you message; there is no separate `/thank-you` page. |
| A6 | New hero: H1 "Admissions 2027–28 at JGS Kokapet & Mokila, Hyderabad", a sub-heading (IB PYP named for Kokapet only; Mokila described without IB), the brand line, and three proof points. The second and broken H1s are gone. |
| A7 | Page sections: hero, Why families choose JGS, **Your child's safety comes first** (new), Facilities, Testimonials, Gallery, Admissions with the form, FAQ, footer. Removed from `/home`: the Chairman's message, timeline, "4 decades" section, old counters, old "Why JGS?" and blog. |
| A8 | **Not changed.** `AW-16775346810` is still loaded on `/home`; the school is confirming which Google Ads account runs the campaigns. |
| A9 | The one-second loading spinner is removed from `/home`. The 1.3 MB hero image is replaced by a 29 KB WebP (`landing-hero-child.webp`). The hidden "JGS Brochure" popup, which loaded `assets/brochures.html` on every page but could not be opened, is removed from both footers. reCAPTCHA now loads only on pages that show the form (`/` and `/home`), not on every page. |
| T2 | Call and WhatsApp taps in the `/home` header, sticky bar and footer send `call_click` / `whatsapp_click` and Meta `Contact`. |

New or reorganised components:
- `homeone/homewhy`: "Why families choose JGS", now shared by `/` and `/home`.
- `homeone/home-shared.scss`: card styles shared by these sections.
- `homeone/stickycta`: the sticky bar for phones.
- `homeadmissions` has a new `[showForm]` input. It is `false` on `/home`, where the form is in the hero.

### Safety section (school request)

New `homeone/homesafety` component, used on `/home`, lists: background-verified staff, CCTV surveillance, POCSO policy, GPS-tracked transport, 24x7 security, and health care on campus. The shared "Safe campus" and "Safe transport" cards (on `/` and `/home`) and the transport FAQ answer (page and JSON-LD on `/`) now mention background verification, the POCSO policy and GPS tracking.

## Build and deploy

Same as before: `npm ci --legacy-peer-deps`, then `NODE_OPTIONS=--openssl-legacy-provider npx ng run eduman:prerender`. Upload `dist/eduman/browser/`, including `index.html` and `index.original.html`. The live `.htaccess` already has the right rules.

## Tested (local build)

- `/home`: title and description unchanged; `noindex, follow`; one H1; form in the Admissions section near the end. "Explore JGS" scrolls to `#why`, and the hero "Enquire" button and the phone sticky bar scroll to `#enquire`.
- Safety section shows all six items. On `/`, the FAQ JSON-LD and page text both carry the GPS-tracked transport answer.
- Grades: 10 before a campus is chosen, 10 for Mokila, 8 for Kokapet; Grade 7 is cleared when Kokapet is chosen.
- Phone (390 px): sticky bar shown; header "Call Now" and floating WhatsApp hidden; tapping Enquire scrolls to the form; Call and WhatsApp send `call_click` / `whatsapp_click` and Meta `Contact`.
- `/about` no longer loads reCAPTCHA or the brochure frame. The home page `/` still prerenders with all its sections.

## Please check after deploying

1. Submit one enquiry from `/home` marked **TEST**. Confirm it reaches the Google Sheet, with exactly one Google Ads conversion (Tag Assistant) and one Meta Lead (Pixel Helper).
2. Check that the reCAPTCHA box appears on `/` and `/home` (it now loads with the form).
3. Run PageSpeed Insights (mobile) on `https://www.jgschool.in/home` and compare with before.
