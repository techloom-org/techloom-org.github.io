import { useEffect } from 'react';
import { getBaseSEO, egyptSoftwareKeywords, egyptCityKeywords } from '@/utility/seo';
import { trackPageView } from '@/utility/analytics';

const SEOComponent = ({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  structuredData,
  canonicalUrl,
  noindex = false,
  breadcrumbs = [],
  location = '',
  service = '',
}) => {
  const baseSEO = getBaseSEO();

  useEffect(() => {
    // Build the complete title
    const seoTitle = title ? `${title} | ${baseSEO.siteName}` : baseSEO.defaultTitle;
    
    // Build the description with location and service context
    let seoDescription = description || baseSEO.defaultDescription;
    if (location && service) {
      seoDescription = `${service} services in ${location}, Egypt. ${seoDescription}`;
    }
    
    // Combine keywords
    const combinedKeywords = [
      ...keywords,
      ...egyptSoftwareKeywords.slice(0, 10), // Take first 10 to avoid keyword stuffing
      ...egyptCityKeywords.slice(0, 5), // Take first 5 cities
    ].join(', ');
    
    // Build image URL
    const seoImage = image
      ? `${baseSEO.siteUrl}${image}`
      : `${baseSEO.siteUrl}${baseSEO.defaultImage}`;
    
    // Build page URL
    const seoUrl = url ? `${baseSEO.siteUrl}${url}` : window.location.href;
    const canonical = canonicalUrl || seoUrl;

    // Set document title
    document.title = seoTitle;

    // Set or update meta tags
    setMetaTag('description', seoDescription);
    setMetaTag('keywords', combinedKeywords);
    setMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');
    setMetaTag('author', 'Techloom');
    setMetaTag('language', 'EN');
    setMetaTag('revisit-after', '7 days');
    
    // Open Graph tags
    setMetaProperty('og:title', seoTitle);
    setMetaProperty('og:description', seoDescription);
    setMetaProperty('og:type', type);
    setMetaProperty('og:url', seoUrl);
    setMetaProperty('og:image', seoImage);
    setMetaProperty('og:site_name', baseSEO.siteName);
    setMetaProperty('og:locale', 'en_EG');
    setMetaProperty('og:locale:alternate', 'ar_EG');
    
    // Twitter Card tags
    setMetaName('twitter:card', 'summary_large_image');
    setMetaName('twitter:title', seoTitle);
    setMetaName('twitter:description', seoDescription);
    setMetaName('twitter:image', seoImage);
    setMetaName('twitter:site', '@techloom'); // Add your Twitter handle
    
    // Additional SEO meta tags
    setMetaName('geo.region', 'EG');
    setMetaName('geo.placename', 'Egypt');
    setMetaName('geo.position', '30.0444;31.2357'); // Cairo coordinates
    setMetaName('ICBM', '30.0444, 31.2357');
    
    // Business-specific meta tags
    setMetaName('classification', 'Software Development Company');
    setMetaName('category', 'Technology Services');
    setMetaName('coverage', 'Egypt');
    setMetaName('distribution', 'Global');
    setMetaName('rating', 'General');
    
    // Set canonical URL
    setLinkTag('canonical', canonical);
    
    // Set alternate language versions
    setLinkTag('alternate', `${baseSEO.siteUrl}${url || ''}`, 'hreflang', 'en-EG');
    setLinkTag('alternate', `${baseSEO.siteUrl}/ar${url || ''}`, 'hreflang', 'ar-EG');
    
    // Add structured data
    if (structuredData) {
      addStructuredData(structuredData);
    }
    
    // Add breadcrumb structured data
    if (breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((breadcrumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: breadcrumb.name,
          item: `${baseSEO.siteUrl}${breadcrumb.url}`,
        })),
      };
      addStructuredData(breadcrumbSchema, 'breadcrumbs');
    }
    
    // Track page view for analytics
    trackPageView(seoTitle, seoUrl, url || window.location.pathname);
    
    // Cleanup function
    return () => {
      // Remove any temporary meta tags if needed
    };
  }, [title, description, keywords, image, url, type, structuredData, canonicalUrl, noindex, breadcrumbs, location, service]);

  return null; // This component doesn't render anything
};

// Helper function to set meta tags
const setMetaTag = (name, content) => {
  if (!content) return;
  
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
};

// Helper function to set meta property tags (for Open Graph)
const setMetaProperty = (property, content) => {
  if (!content) return;
  
  let meta = document.querySelector(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.content = content;
};

// Helper function to set meta name tags (for Twitter)
const setMetaName = (name, content) => {
  if (!content) return;
  
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
};

// Helper function to set link tags
const setLinkTag = (rel, href, attribute = null, value = null) => {
  if (!href) return;
  
  const selector = attribute 
    ? `link[rel="${rel}"][${attribute}="${value}"]`
    : `link[rel="${rel}"]`;
  
  let link = document.querySelector(selector);
  if (!link) {
    link = document.createElement('link');
    link.rel = rel;
    if (attribute && value) {
      link.setAttribute(attribute, value);
    }
    document.head.appendChild(link);
  }
  link.href = href;
};

// Helper function to add structured data
const addStructuredData = (data, id = 'default') => {
  // Remove existing structured data with the same ID
  const existing = document.querySelector(`script[data-schema-id="${id}"]`);
  if (existing) {
    existing.remove();
  }
  
  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-schema-id', id);
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
};

export default SEOComponent;
