/**
 * Prospectuses offered for download after a parent submits the enquiry form
 * (when the form has [showProspectus]="true": /enquiry-form, the home page and /home).
 * A prospectus with file: null is not shown.
 *
 * The same files are linked from the Admissions > View Prospectus menu. To update a prospectus,
 * upload the new PDF over the old one with the same file name; no code change is needed.
 */
export interface Prospectus {
  campus: 'Kokapet' | 'Mokila';
  label: string;
  file: string | null;
}

export const PROSPECTUSES: Prospectus[] = [
  {
    campus: 'Kokapet',
    label: 'JGS Kokapet prospectus (IB Primary Years Programme)',
    file: 'assets/pdfs/JGS%20brochure.pdf' // older file name kept so existing links keep working
  },
  {
    campus: 'Mokila',
    label: 'JGS Mokila prospectus',
    file: 'assets/pdfs/JGS-Mokila-Prospectus.pdf'
  }
];
