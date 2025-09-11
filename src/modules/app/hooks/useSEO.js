import { generateLocationDescription } from '@/utility/localSEO';
import {
  egyptSoftwareKeywords,
  generateLocalBusinessSchema,
  generateServiceSchema,
  getBaseSEO,
} from '@/utility/seo';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useSEO = ({
  title,
  description,
  keywords = [],
  image,
  structuredData,
  location = '',
  service = '',
  breadcrumbs = [],
  noindex = false,
}) => {
  const currentLocation = useLocation();
  const baseSEO = getBaseSEO();

  useEffect(() => {
    // Auto-generate location-based description if not provided
    let finalDescription = description;
    if (!description && location && service) {
      finalDescription = generateLocationDescription(location, service);
    } else if (!description) {
      finalDescription = baseSEO.defaultDescription;
    }

    // Auto-generate Egypt and location-specific keywords
    const locationKeywords = location
      ? [
          `software development ${location}`,
          `web development ${location}`,
          `شركة تطوير البرمجيات ${location}`,
          `تطوير المواقع ${location}`,
        ]
      : [];

    const serviceKeywords = service
      ? [`${service} Egypt`, `${service} Cairo`, `${service} services`]
      : [];

    const finalKeywords = [
      ...keywords,
      ...locationKeywords,
      ...serviceKeywords,
      ...egyptSoftwareKeywords.slice(0, 8), // Take top 8 to avoid stuffing
    ];

    // Auto-generate structured data based on page type
    let finalStructuredData = structuredData;
    if (!structuredData) {
      const path = currentLocation.pathname;

      if (path === '/') {
        finalStructuredData = generateLocalBusinessSchema();
      } else if (path.includes('/services')) {
        if (path.includes('web')) {
          finalStructuredData = generateServiceSchema('web-development');
        } else if (path.includes('mobile')) {
          finalStructuredData = generateServiceSchema('mobile-development');
        } else if (path.includes('enterprise')) {
          finalStructuredData = generateServiceSchema('enterprise-solutions');
        } else {
          finalStructuredData = generateServiceSchema('general');
        }
      }
    }

    // Auto-generate breadcrumbs if not provided
    let finalBreadcrumbs = breadcrumbs;
    if (breadcrumbs.length === 0) {
      finalBreadcrumbs = generateBreadcrumbs(currentLocation.pathname);
    }

    // Set up SEO
    const seoConfig = {
      title,
      description: finalDescription,
      keywords: finalKeywords,
      image,
      url: currentLocation.pathname,
      structuredData: finalStructuredData,
      breadcrumbs: finalBreadcrumbs,
      location,
      service,
      noindex,
    };

    // Apply SEO settings
    applySEOSettings(seoConfig);
  }, [
    title,
    description,
    keywords,
    image,
    structuredData,
    location,
    service,
    breadcrumbs,
    noindex,
    currentLocation,
    baseSEO.defaultDescription,
  ]);
};

// Helper function to generate breadcrumbs automatically
const generateBreadcrumbs = (pathname) => {
  const segments = pathname.split('/').filter((segment) => segment);
  const breadcrumbs = [{ name: 'Home', url: '/' }];

  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;

    const segmentNames = {
      about: 'About Us',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact Us',
    };

    // For portfolio detail pages, get project name from document title or use generic name
    let name = segmentNames[segment];
    if (!name) {
      if (pathname.startsWith('/portfolio/') && index === 1) {
        name = 'Project Details';
      } else {
        name = segment.charAt(0).toUpperCase() + segment.slice(1);
      }
    }

    breadcrumbs.push({
      name,
      url: currentPath,
    });
  });

  return breadcrumbs;
};

// Helper function to apply SEO settings
const applySEOSettings = (config) => {
  const baseSEO = getBaseSEO();

  // Build the complete title
  const seoTitle = config.title ? `${config.title} | ${baseSEO.siteName}` : baseSEO.defaultTitle;

  // Set document title
  document.title = seoTitle;

  // Set meta description
  setMetaTag('description', config.description);

  // Set keywords
  if (config.keywords.length > 0) {
    setMetaTag('keywords', config.keywords.join(', '));
  }

  // Set robots
  setMetaTag('robots', config.noindex ? 'noindex, nofollow' : 'index, follow');

  // Set additional meta tags
  setMetaTag('author', 'Techloom');
  setMetaTag('language', 'EN');
  setMetaTag('geo.region', 'EG');
  setMetaTag('geo.placename', config.location || 'Egypt');

  // Set Open Graph tags
  const seoImage = config.image
    ? `${baseSEO.siteUrl}${config.image}`
    : `${baseSEO.siteUrl}${baseSEO.defaultImage}`;
  const seoUrl = `${baseSEO.siteUrl}${config.url}`;

  setMetaProperty('og:title', seoTitle);
  setMetaProperty('og:description', config.description);
  setMetaProperty('og:url', seoUrl);
  setMetaProperty('og:image', seoImage);
  setMetaProperty('og:site_name', baseSEO.siteName);
  setMetaProperty('og:type', 'website');
  setMetaProperty('og:locale', 'en_EG');

  // Set Twitter Card tags
  setMetaName('twitter:card', 'summary_large_image');
  setMetaName('twitter:title', seoTitle);
  setMetaName('twitter:description', config.description);
  setMetaName('twitter:image', seoImage);

  // Set canonical URL
  setLinkTag('canonical', seoUrl);

  // Add structured data
  if (config.structuredData) {
    addStructuredData(config.structuredData);
  }

  // Add breadcrumb structured data
  if (config.breadcrumbs.length > 0) {
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: config.breadcrumbs.map((breadcrumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: breadcrumb.name,
        item: `${baseSEO.siteUrl}${breadcrumb.url}`,
      })),
    };
    addStructuredData(breadcrumbSchema, 'breadcrumbs');
  }
};

// Helper functions (same as in SEOComponent)
const setMetaTag = (name, content) => {
  if (!content) {
    return;
  }

  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
};

const setMetaProperty = (property, content) => {
  if (!content) {
    return;
  }

  let meta = document.querySelector(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.content = content;
};

const setMetaName = (name, content) => {
  if (!content) {
    return;
  }

  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
};

const setLinkTag = (rel, href) => {
  if (!href) {
    return;
  }

  let link = document.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement('link');
    link.rel = rel;
    document.head.appendChild(link);
  }
  link.href = href;
};

const addStructuredData = (data, id = 'default') => {
  const existing = document.querySelector(`script[data-schema-id="${id}"]`);
  if (existing) {
    existing.remove();
  }

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-schema-id', id);
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
};
