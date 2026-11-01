# JGS Difference page (/jgsdifference) changes

Branch: `jgs-difference-page`. All changes were approved by the school.

## Content

| # | Change |
|---|---|
| 24:2 | The "24:2 Student-teacher ratio" section is replaced with the school's text: **"Small Cohort, Big Attention – 24 per Class"**, the subheading "An Excellent Student–Teacher Ratio", and the new body copy. |
| 1 | Global Standards: *"Our Mokila Campus will offer both IB and ICSE Curriculum from Academic year 2027"* becomes *"Our new Mokila campus is planned to offer the IB and ICSE curricula."* The IB's guidance warns against tying a programme to a date before candidacy, and Mokila's CISCE affiliation is still pending. Do not add dates or IB/CISCE logos for Mokila. |
| 5 | Four safety sections are added after "Zero Tolerance Policy": **POCSO Policy, Background-Verified Staff, CCTV Surveillance, GPS-Tracked Transport**. The wording matches the /home safety section. Two new icons match the existing set: `Icons/jgs-difference/child-protection.png` and `staff-verified.png`. CCTV and transport reuse the facilities icons. |
| 6 | Copy fixes: "for over 47+ years" becomes "for 47 years"; "Creating opportunities for building careers" becomes "Learning beyond the classroom"; "two PE classes will be assigned to every class" becomes "every class has two PE classes a week". |
| 7 | Opening paragraph: "At JGS, Mokila and Kokapet" becomes "At JGS Kokapet, and at our new Mokila campus". |

## SEO and AI readiness

| # | Change |
|---|---|
| 2 | Title: "The JGS Difference \| Small Classes, Safety & Care \| JGS Kokapet & Mokila". The page now sets a real meta description (the old code used the misspelt name `decription`, so none was ever output), plus a canonical link and Open Graph/Twitter tags, via `SeoService`. |
| 3 | **The page is prerendered**: `/jgsdifference` was added to the prerender routes in `angular.json`, so `dist/eduman/browser/jgsdifference/index.html` contains the full text. |
| 4 | One H1, "The JGS Difference". "A learning experience that stands out." is now a lead line. The banner tagline ("Learn to grow / Grow to develop", which appeared twice for desktop and mobile) is no longer a heading on this page. This uses a new `[taglineAsHeading]="false"` input on `app-breadcrumb`. Other pages are unchanged; it defaults to `true`. |
| 8 | `JGSDifferenceMob.jpg` (phone banner) recompressed from 834 KB to 70 KB at 828 px wide; same file name, no visible difference. The campus photo now has alt text. |

## Deploy: one .htaccess change is needed

Prerendered pages are output as folders (`jgsdifference/index.html`). Add these two parts from `deploy/htaccess-example` to `public_html/.htaccess`:

1. Near the top, after `DirectoryIndex index.html`:
   ```apache
   DirectorySlash Off
   ```
2. Inside the rewrite block, **after** the `^contact/?$` rule and **before** "Serve existing files and directories":
   ```apache
   RewriteCond %{REQUEST_FILENAME}/index.html -f
   RewriteRule ^(.+?)/?$ /$1/index.html [L]
   ```

Without these lines the page still works, but Apache first redirects `/jgsdifference` to `/jgsdifference/`. With them, the page is served directly at `/jgsdifference`, which matches its canonical link. Any future page added to the prerender routes is picked up automatically. `DirectorySlash Off` also stops the current `/contact` → `/contact/` redirect.

Build as before: `npm ci --legacy-peer-deps`, then `NODE_OPTIONS=--openssl-legacy-provider npx ng run eduman:prerender`. Upload all of `dist/eduman/browser/`, including the new `jgsdifference/` folder.

## Tested (local production build, with the new .htaccess behaviour emulated)

- `/jgsdifference` and `/jgsdifference/` both return the prerendered page. `/about` still gets the app shell; `/` is still the prerendered home page.
- Raw HTML has the new title, description, canonical and 7 Open Graph tags; one H1; no banner headings; all new text; none of the old wording.
- In a browser, all 14 section icons load (including the two new ones). The banner tagline looks the same as before (28 px, bold). The phone banner is 72 KB.

## After deploying, please check

- `curl -s https://www.jgschool.in/jgsdifference | grep "24 per Class"` returns a match, with no redirect (`curl -sI` shows 200).
- `https://www.jgschool.in/contact` opens without redirecting to `/contact/`.
