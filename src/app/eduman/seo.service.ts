import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

export const SITE_ORIGIN = 'https://www.jgschool.in';
export const DEFAULT_SHARE_IMAGE = `${SITE_ORIGIN}/assets/img/whatsinaname/homepageNewBanner.jpg`;

export interface PageSeo {
  /** Text for the <title> tag. */
  title: string;
  /** Text for the meta description. */
  description: string;
  /** Path of the page, e.g. '/' or '/about'. Used for the canonical link and og:url. */
  path: string;
  /** Title for social sharing previews. Defaults to `title`. */
  shareTitle?: string;
  /** Description for social sharing previews. Defaults to `description`. */
  shareDescription?: string;
  /** Absolute URL of a 1200 x 630 image for social sharing previews. */
  shareImage?: string;
  /** Value for the robots meta tag, e.g. 'noindex, follow'. Omit to allow indexing. */
  robots?: string;
  /** Structured data (JSON-LD) for this page. Omit to remove any previous page's data. */
  jsonLd?: object;
}

/**
 * Sets the title, description, canonical link, social sharing (Open Graph and
 * Twitter) tags, robots tag and structured data for a page. Works during
 * server-side rendering and prerendering, so the tags are in the HTML that
 * search engines and AI assistants receive.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private static readonly JSON_LD_ID = 'jgs-page-jsonld';

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  apply(page: PageSeo): void {
    const url = SITE_ORIGIN + page.path;
    const shareTitle = page.shareTitle || page.title;
    const shareDescription = page.shareDescription || page.description;
    const shareImage = page.shareImage || DEFAULT_SHARE_IMAGE;

    this.title.setTitle(page.title);
    this.meta.updateTag({ name: 'description', content: page.description });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Johnson Grammar School' });
    this.meta.updateTag({ property: 'og:locale', content: 'en_IN' });
    this.meta.updateTag({ property: 'og:title', content: shareTitle });
    this.meta.updateTag({ property: 'og:description', content: shareDescription });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: shareImage });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: shareTitle });
    this.meta.updateTag({ name: 'twitter:description', content: shareDescription });
    this.meta.updateTag({ name: 'twitter:image', content: shareImage });

    if (page.robots) {
      this.meta.updateTag({ name: 'robots', content: page.robots });
    } else {
      this.meta.removeTag('name="robots"');
    }

    this.setCanonical(url);
    this.setJsonLd(page.jsonLd);
  }

  private setCanonical(url: string): void {
    const head = this.document.head;
    let link = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private setJsonLd(data?: object): void {
    const head = this.document.head;
    const existing = this.document.getElementById(SeoService.JSON_LD_ID);
    if (existing) {
      existing.remove();
    }
    if (!data) {
      return;
    }
    const script = this.document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('id', SeoService.JSON_LD_ID);
    script.textContent = JSON.stringify(data);
    head.appendChild(script);
  }
}
