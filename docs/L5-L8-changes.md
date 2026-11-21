# L5–L8: Contact Us, enquiry form look, home page, footer

**Apply on top of L3** (the prospectus release, commit `4f1b503`, which is live). The patch has these commits, in order:

| Commit | Release | What |
|---|---|---|
| `5dc72fd` | (with L4) | Footers: dead "News" link removed; Blog links use `https://www.jgschool.in/blog/` |
| `f53afe2` | **L6** | Enquiry form: light cream card, fine border, gold top edge; "JOHNSON GRAMMAR SCHOOL" label 16px / extra bold |
| `3cb9363` | **L5** | Contact Us page rebuilt: H1 and intro for both campuses, admissions box → /enquiry-form, tap-to-call / WhatsApp / email, campus cards, message form with spam trap and validation (GA4 `contact_message`), SEO and JSON-LD, prerendered |
| `ba512f3` | **L8** | Home: campuses and curriculum sections removed; logo reloads the home page; original hero text with Know More / Admissions; neutral "Why families choose JGS" cards; new section order; Mokila-only gallery (6 renders, labelled); "Load More" → /gallery/ |
| `f88e878` | **L8** | Footer: #0f3460, four even columns, compact (main footer only; the /home footer is unchanged) |
| `bf80540` | **L8** | Facts band under the hero: #0f3460 |

If the footer patch sent with L4 (`jgs-footer-news-blog.patch`) was **already applied**, skip the first commit: `git am` will report it as already applied, so run `git am --skip` and continue.

## Deploy
1. Apply: `git am jgs-L5-L8.patch`
2. Build: `npm ci --legacy-peer-deps`, then `NODE_OPTIONS=--openssl-legacy-provider npx ng run eduman:prerender`
3. Upload all of `dist/eduman/browser/`. New items:
   - the `contact/` folder (prerendered Contact Us);
   - `assets/img/whatsinaname/GalleryNew/mokila/` (3 images).
4. **`.htaccess` (one change):** delete these two lines, so that `/contact` is served from the new prerendered `contact/index.html`:
   ```apache
   # Explicitly handle Angular contact route
   RewriteRule ^contact/?$ /index.original.html [L,NC]
   ```
   If they are left in, the page still works, but Google gets the empty app shell instead of the page text.

## Check after upload
- Home page:
  - the hero shows "Good for your kid. Good for the world." with **Know More** and **Admissions**;
  - clicking the logo reloads the page;
  - the gallery shows six Mokila images, each tagged "Artist's impression";
  - the footer and the band under the hero are dark blue #0f3460.
- /contact:
  - send one test message, which should arrive at hello@jgschool.in. FormSubmit may first email that inbox an **activation link**: click it once.
  - view the page source: it should contain "Contact Johnson Grammar School".
- /enquiry-form: the form card is cream and the "JOHNSON GRAMMAR SCHOOL" label is larger.
