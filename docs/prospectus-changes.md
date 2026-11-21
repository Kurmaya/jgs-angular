# Prospectus: Mokila prospectus added, "brochure" renamed to "prospectus"

One commit on top of L1 (`4e4b034`).

## Files
- **New:** `src/assets/pdfs/JGS-Mokila-Prospectus.pdf`, the Mokila prospectus (24 pages). It is a web-optimised copy of the designer's file: 4.2 MB instead of 9.9 MB, with the images resized for screens and no visible change. Keep the designer's original for printing.
- **Removed:** `src/assets/pdfs/JGS-Mokila-brochure.pdf`, the "coming soon" placeholder. **Also delete it from the server.**
- **Unchanged:** the Kokapet prospectus is still `assets/pdfs/JGS brochure.pdf`. The file name is kept so that existing links and Google results keep working; only the wording on the site has changed. When the designer sends the updated Kokapet prospectus, upload it over that file using the same name.

## Wording ("brochure" → "prospectus")
- Menu: Admissions ▸ **View Prospectus** ▸ JGS Kokapet | JGS Mokila (desktop and phone).
- After an enquiry, all three forms (/enquiry-form, home, /home) show **"Download our prospectus"**, with both campus prospectuses listed and the chosen campus first.
- Home page, Useful documents: **JGS Kokapet prospectus (PDF)** and **JGS Mokila prospectus (PDF)**.
- /enquiry-form: the intro, the FAQ ("Can I download the school prospectus?") and the meta and share descriptions.
- Code: `enquiry-form/brochures.ts` is renamed to `prospectuses.ts`. The form input `[showBrochures]` is now `[showProspectus]`. The analytics event `brochure_download` is now **`prospectus_download`**.

## Deploy
Build as usual (`npx ng run eduman:prerender`) and upload all of `dist/eduman/browser/`, including `assets/pdfs/JGS-Mokila-Prospectus.pdf`. Delete `assets/pdfs/JGS-Mokila-brochure.pdf` from the server. No `.htaccess` change is needed.
