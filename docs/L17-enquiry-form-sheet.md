# L17: the separate Google Sheet for the /enquiry-form page

From L17, the full enquiry form on **www.jgschool.in/enquiry-form** sends each enquiry to its own Google Sheet. The other forms keep using the current Sheet, unchanged. Those are the home page, /home and the "Enquire now" pop-up.

For each enquiry from /enquiry-form, the new Sheet:
1. adds a row with every field of the enquiry form, plus the Enquiry No. and the ad source;
2. saves the enquiry form PDF in a private Google Drive folder, **JGS Enquiry Forms 2027-28**, and puts an **Open PDF** link in the row;
3. emails **admissions@jgschool.in**, cc **siddarth.k@jgschool.in**, with the PDF attached. Replying to the email goes to the parent.

The parent downloads the same PDF on the website after they submit.

The script is in this repository at `apps-script/enquiry-form/Code.gs`.

## A. Create the Sheet (school, about 10 minutes, once)
Use the school's Google Workspace account, the one admissions@jgschool.in belongs to. The emails are sent from the account that deploys the script.

1. Go to sheets.google.com and create a blank spreadsheet. Name it **JGS Enquiry Form 2027-28**.
2. **Extensions → Apps Script.** Delete the sample code, paste the whole of `Code.gs` and click **Save**.
3. In the toolbar, choose the function **setup** and click **Run**.
   - Google asks for permission. Choose the school account, then **Advanced → Go to (project) → Allow**.
   - setup creates the **Enquiries** tab with its headings and the Drive folder.
4. Click **Deploy → New deployment**. Click the gear icon and choose **Web app**, then set:
   - Description: `JGS enquiry form`
   - Execute as: **Me**
   - Who has access: **Anyone**. This lets the website send enquiries. Nobody can read the Sheet through it.
5. Click **Deploy** and copy the **Web app URL**. It looks like `https://script.google.com/macros/s/…/exec`.
6. Send that URL to the developer.

To check it's running, open the URL in a browser. It should show `{"ok":true,"service":"JGS Enquiry Form 2027-28"}`.

## B. Website (developer, with the L17 patch)
The web app URL is already set in `src/app/eduman/enquiry-form/enquiry-form.component.ts` (`fullFormScriptUrl`):

`https://script.google.com/macros/s/AKfycbxGF8PPtPzN3F9qV3uQsVGCcpgHDTHhzfBen7j4vQLJdanWJ3XLbM2GtV14HmRlRQu_/exec`

Build and upload as usual. If the script is ever deployed again as a *new* deployment, which gives a new URL, update this line. Editing the existing deployment keeps the URL.

**Access must be "Anyone".** If the URL shown after deploying starts with `https://script.google.com/a/macros/jgschool.in/…`, the web app is limited to jgschool.in accounts, and parents' enquiries will not arrive. See "If the web app is limited to jgschool.in" below.

## C. Spam check (developer, at the time of the patch)
The form's "I'm not a robot" box is Google reCAPTCHA, site key `6Lc9uOstAAAAAOzhMr1_pxOgktswK3zk5nY5LRSk`. The Sheet checks each answer with the matching **secret key**:

1. Find the secret key at google.com/recaptcha/admin. Sign in with the account that created the site key, open the jgschool.in site, then **Settings → reCAPTCHA keys → Copy secret key**.
2. In the Sheet's Apps Script, open **Project Settings** (the gear icon) → **Script properties → Add script property**:
   - Property: `RECAPTCHA_SECRET`
   - Value: the secret key
3. Save. No new deployment is needed.

Until this is done, enquiries are still saved and emailed, with **Spam check: Not set up**. Afterwards, the column says **Passed**, and failed checks are not saved or emailed.

## If the web app is limited to jgschool.in
Parents are not signed in to a jgschool.in account, so the web app must accept anyone.

1. In the Sheet's Apps Script, go to **Deploy → Manage deployments**, then click the pencil icon on the deployment.
2. Set **Who has access** to **Anyone**, not "Anyone within Johnson Grammar School". Then click **Deploy**. The URL stays the same.
3. Check it: open `https://script.google.com/macros/s/AKfycbxGF8PPtPzN3F9qV3uQsVGCcpgHDTHhzfBen7j4vQLJdanWJ3XLbM2GtV14HmRlRQu_/exec` in a private / incognito window. It should show `{"ok":true,"service":"JGS Enquiry Form 2027-28"}`, not "Page Not Found" or a sign-in page.

If **Anyone** is not in the list, the jgschool.in Google Workspace administrator has to allow it:
- **Admin console → Apps → Google Workspace → Drive and Docs → Sharing settings → Sharing options**;
- turn on **Sharing outside of Johnson Grammar School**, for the whole organisation or just the account that owns the Sheet.

After that, repeat steps 1 to 3.

## D. Optional settings
Use Apps Script → Project Settings → Script properties:
- `NOTIFY_TO`: who gets the email. The default is admissions@jgschool.in.
- `NOTIFY_CC`: copied on the email. The default is siddarth.k@jgschool.in. Separate several addresses with commas.

## If the script is changed later
After pasting a new version of `Code.gs`, go to **Deploy → Manage deployments → edit (pencil) → Version: New version → Deploy**. The Web app URL stays the same.

## Check after upload
1. On www.jgschool.in/enquiry-form, send a test enquiry, then tap **Download your enquiry form (PDF)**.
2. Within a minute, the new Sheet has a row with all the details and an **Open PDF** link.
3. admissions@jgschool.in receives the email with the same PDF attached, with siddarth.k@jgschool.in copied.
4. Delete the test row and the test PDF from the Drive folder.
