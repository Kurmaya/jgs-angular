# L13: tracking for the dashboard

The L12 + L13 patch goes on after L2. A separate gallery zip has its own `theme.php`.

## 1. What the website now sends (Google Analytics 4, G-QEZM6GNZ4W)

| Event | When | Details sent |
|---|---|---|
| `page_view` | **Every move to another page inside the site.** Before this release, Analytics only saw the first page of each visit. | page_path, page_title |
| `scroll_depth` | The visitor scrolls 25 / 50 / 75 / 90 % down a page, once per page | percent_scrolled, page_path |
| `enquiry_form_start` | First tap or click in the admission enquiry form | form_page |
| `generate_lead` + Ads conversion | Enquiry sent (unchanged) | campus, grade |
| `pdf_open` | A PDF is opened from the menu, the home page or the gallery (prospectus, fee structure, policies) | file_name, link_text, page_path, campus |
| `prospectus_download` | Prospectus downloaded after an enquiry (unchanged) | campus |
| `call_click`, `whatsapp_click`, `instagram_click`, `contact_message` | Unchanged | |

**Ad source with each enquiry:** on arrival, the site remembers for 90 days where the visitor came from:
- UTM tags;
- Google `gclid`/`gbraid`/`wbraid`;
- Meta `fbclid`;
- landing page and referrer.

It sends these with the enquiry to the Google Sheet script, as the extra fields `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`, `gbraid`, `wbraid`, `fbclid`, `landing_page`, `referrer`, `first_seen` and `form_page`. The script ignores them until step 3 is done.

## 2. Microsoft Clarity (heat maps and session replays)
1. Sign in at https://clarity.microsoft.com with a school Microsoft or Google account. Add a project named "jgschool.in" with the website `https://www.jgschool.in`.
2. Copy the **project ID** (Settings → Overview, about 10 letters and digits). Replace `REPLACE_WITH_CLARITY_ID` with it in **two** places:
   - `src/index.html` (main site), then build as usual;
   - `public_html/gallery/inc/theme.php` (gallery), the `JGS_CLARITY_ID` line.
3. In Clarity → Settings → Masking, keep **Balanced** (or choose Strict). The enquiry and contact forms are also marked `data-clarity-mask`, so anything typed in them is never recorded.
4. Optional: Clarity → Settings → Setup → Google Analytics integration, to link the two.

## 3. Google Sheet: store the ad source (whoever maintains the enquiry Apps Script)
1. In the enquiry sheet, add these column headers after the last existing column:
   `Source | Medium | Campaign | Keyword | Ad content | Google click ID | Meta click ID | Landing page | Referrer | First visit | Form page`
2. In the Apps Script `doPost`, find where the row is added (`appendRow([...])`) and add these values **at the end** of that list, in this order:
   ```js
   data.utm_source || '', data.utm_medium || '', data.utm_campaign || '', data.utm_term || '', data.utm_content || '',
   data.gclid || data.gbraid || data.wbraid || '', data.fbclid || '', data.landing_page || '', data.referrer || '',
   data.first_seen || '', data.form_page || ''
   ```
   (`data` is the parsed form data, often `JSON.parse(e.postData.contents)`; use the script's own name for it.)
3. Deploy → Manage deployments → edit → **New version**, keeping the same web app URL.

Alternatively, send me the current script and I'll return it ready to paste.

## 4. Google Analytics settings (needs Editor/Admin on G-QEZM6GNZ4W)
1. **Admin → Data streams → web stream → Enhanced measurement:**
   - turn **off** "Page changes based on browser history events" (the site now sends these itself; leaving it on would count pages twice);
   - leave "Scrolls" on.
2. **Admin → Events:** mark these as **key events**: `generate_lead`, `enquiry_form_start`, `prospectus_download`, `call_click`, `whatsapp_click`, `contact_message`.
3. **Admin → Custom definitions → Create custom dimension** (scope: Event), one each for: `campus`, `grade`, `percent_scrolled`, `file_name`, `form_page`, `page_path`.
4. **Admin → Product links:** link Google Ads (the account the agency uses) and Search Console.

## 5. Google Tag Manager clean-up (container GTM-T57VRH2: the agency or whoever has access)
On every page, the container currently loads:
- **Universal Analytics `UA-249305266-1`.** Google shut this down in July 2024, so it collects nothing. **Pause or delete** this tag.
- **A second GA4 property, `G-1PKYS6BSDC`.** It receives only basic page views. Ask whoever set it up whether Google Ads or a report depends on it:
  - if not, **pause** this tag, so G-QEZM6GNZ4W is the one property with all the events;
  - if it is the property the agency reports from, tell me, and I'll point the website's events to it instead.
- **A copy of the Meta Pixel base code (499627955693737).** The website already loads the same Pixel, which also sends Lead and Contact events. **Pause** the GTM copy to avoid any double counting.

After publishing the container, open the site with Tag Assistant (tagassistant.google.com). Expect one GA4 `page_view` per page and no UA hits.

## 6. Privacy Policy
The Privacy Policy page has a new paragraph, "Analytics and advertising tools". It names:
- the four tools (Google Analytics, Google Ads, Meta Pixel and Microsoft Clarity);
- that the ad source is stored with each enquiry;
- how visitors can opt out.

## Check after upload
1. Open `https://www.jgschool.in/?utm_source=test&utm_medium=test&utm_campaign=test`, browse two pages, and send a test enquiry. The new Sheet columns (after step 3) should show `test`.
2. In GA4 → Reports → Realtime, `page_view` appears for each page you open, plus `scroll_depth`, `enquiry_form_start` and `pdf_open`.
3. Clarity (after step 2) shows the first recordings within about 2 hours.
