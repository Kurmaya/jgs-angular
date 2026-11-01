# Curriculum pages: IB and ICSE

Branch: `curriculum-ib-icse` (based on `fix-blog-gallery-403`, so it includes the `.htaccess` 403 fixes from PR #5).

## Menu
Curriculum ▸ **IB** (`/curriculum/ib`) | **ICSE** (`/curriculum/icse`). The changes are in the desktop header, the mobile menu and the /home menu. "IB PYP" and "IBDP" are removed; the Diploma Programme is covered on the IB page.

## New pages (`src/app/eduman/curriculumpages/`)
- `curriculumib`: the IB page, in two parts:
  - **Part 1, JGS Kokapet:** IB World School for the PYP since 10 April 2025, admitting **Nursery (EY1) to Grade 2 from 2027–28**.
  - **Part 2, JGS Mokila (planned):**
    - PYP from Nursery (EY1) to Grade 5;
    - MYP starting with Grades 6–7 and adding a grade each year up to Grade 10;
    - DP from 2028–29, subject to IB approval.

  The page also includes a parent-friendly explanation of the PYP, MYP and DP with a comparison table, the learner profile, our IB experience, an FAQ and a call to action.
- `curriculumicse`: the **ICSE planned at JGS Mokila, Grades 1–7, from 2027–28, subject to CISCE affiliation**. It covers JGS's ICSE legacy since 1979 (Habsiguda and Mallapur), what the ICSE is, the primary and middle years, assessment, an "IB or ICSE at Mokila?" comparison, an FAQ and a call to action.
- `curriculumhub`: `/curriculum`, a short landing page with two cards. It replaces the old IB PYP page at that URL, which wrongly said Mokila was an authorised IB World School.
- `curriculum-content.ts`: FAQ text, SEO and JSON-LD, shared by page and structured data so they always match.
- `curriculum-pages.scss`: shared styles.

**Wording rules** (in comments on each page): Mokila is "planned" / "intends to apply" / "subject to IB approval" or "subject to CISCE affiliation". The IB and CISCE status statements must stay visible. Do not add IB or CISCE logos, or IB programme models, to these pages.

## Other changes
- `/icse` redirects to `/curriculum/icse`, in Angular and as a 301 in `.htaccess` (new rule in `deploy/htaccess-example`).
- **Kokapet now admits Nursery to Grade 2 from 2027–28** (school decision). Updated in these places:
  - the home page: hero, campus card, FAQ, meta description, social description and JSON-LD;
  - the /home hero and description;
  - the enquiry form: Kokapet grades are now Nursery–Grade 2, Mokila grades Nursery–Grade 7.
- Home page curriculum cards and the "Explore the IB" button link to the new pages.
- `CurriculumMob.jpg` (phone banner) recompressed from 832 KB to 77 KB.
- Prerender routes now include `/curriculum`, `/curriculum/ib` and `/curriculum/icse`.

## Deploy
1. Build: `npm ci --legacy-peer-deps`, then `NODE_OPTIONS=--openssl-legacy-provider npx ng run eduman:prerender`. Upload all of `dist/eduman/browser/`, including the new `curriculum/` folder (`curriculum/index.html`, `curriculum/ib/index.html`, `curriculum/icse/index.html`).
2. In `public_html/.htaccess`, add before the `contact` rule:
   ```apache
   RewriteRule ^icse/?$ https://www.jgschool.in/curriculum/icse [R=301,L,NC]
   ```
   If not already done (PR #5), also apply `DirectoryIndex index.html index.php` and the `/blog`/`/gallery` slash redirect, and add `DirectorySlash On` to `public_html/blog/.htaccess` (see `deploy/blog-htaccess-example`).

## Tested (local production build)
- Menu: hovering Curriculum shows **IB** and **ICSE**.
- `/curriculum`, `/curriculum/ib` and `/curriculum/icse` are prerendered, each with its own title, description, canonical, 7 OG tags, one H1, and JSON-LD whose FAQ matches the page text.
- No risky phrases: nothing claims Mokila offers or is authorised for the IB, and no "Nursery to Grade 5 at Kokapet". The IB and CISCE status statements are present.
- In-page links scroll below the sticky header. `/icse` lands on `/curriculum/icse`.
- No horizontal page scrolling on a 390 px phone; the comparison tables scroll within their box.
- Enquiry form: Kokapet shows Nursery–Grade 2; Mokila shows Nursery–Grade 7.
