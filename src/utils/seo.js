import { useEffect } from 'react';

export function usePageSeo({ title, description, canonicalUrl }) {
  useEffect(() => {
    if (title) {
      document.title = title.includes('Prof. Dr. Mumraiz Naqshband') 
        ? title 
        : `${title} | Prof. Dr. Mumraiz Naqshband`;
    }

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }

    if (canonicalUrl) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      const fullCanonical = canonicalUrl.startsWith('http') 
        ? canonicalUrl 
        : `https://drmumraiznaqshband.com${canonicalUrl}`;
      linkCanonical.setAttribute('href', fullCanonical);
    }
  }, [title, description, canonicalUrl]);
}
