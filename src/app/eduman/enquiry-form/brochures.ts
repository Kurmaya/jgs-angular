/**
 * Brochures offered for download after a parent submits the enquiry form
 * (when the form has [showBrochures]="true", e.g. on /enquiry-form).
 *
 * To add the Mokila brochure: upload the PDF to src/assets/pdfs/ and set its `file` below.
 * A brochure with file: null is not shown.
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
    file: null // TODO (school): add the Mokila brochure PDF, e.g. 'assets/pdfs/JGS-Mokila-brochure.pdf'
  }
];
