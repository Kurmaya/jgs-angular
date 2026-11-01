/**
 * Brochures offered for download after a parent submits the enquiry form
 * (when the form has [showBrochures]="true", e.g. on /enquiry-form).
 *
 * A brochure with file: null is not shown.
 *
 * Mokila brochure: until the designer's PDF arrives, src/assets/pdfs/JGS-Mokila-brochure.pdf is a
 * one-page "coming soon" sheet, linked from the Admissions > View Brochure menu. When the real
 * brochure arrives, replace that file (same name) and set the Mokila `file` below to
 * 'assets/pdfs/JGS-Mokila-brochure.pdf' so it is also offered after the form.
 */
export interface Brochure {
  campus: 'Kokapet' | 'Mokila';
  label: string;
  file: string | null;
}

export const BROCHURES: Brochure[] = [
  {
    campus: 'Kokapet',
    label: 'JGS Kokapet brochure (IB Primary Years Programme)',
    file: 'assets/pdfs/JGS%20brochure.pdf'
  },
  {
    campus: 'Mokila',
    label: 'JGS Mokila brochure',
    file: null // set to 'assets/pdfs/JGS-Mokila-brochure.pdf' once the real brochure replaces the placeholder
  }
];
