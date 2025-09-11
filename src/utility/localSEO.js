// Local SEO optimization for Techloom software development company in Egypt

import { getBaseSEO } from './seo.js';

// Google Business Profile optimization data
export const googleBusinessProfile = {
  name: 'Techloom',
  category: 'Software Company',
  address: {
    street: '', // Add your actual address
    city: 'Cairo',
    state: 'Cairo Governorate',
    country: 'Egypt',
    postalCode: '',
  },
  phone: '+20-111-518-4659',
  website: 'https://techloom-org.github.io',
  description:
    'Leading software development company in Egypt specializing in custom web applications, mobile apps, and enterprise solutions. Serving businesses across Cairo, Alexandria, and all of Egypt.',
  services: [
    'Custom Software Development',
    'Web Application Development',
    'Mobile App Development',
    'Enterprise Solutions',
    'Quality Assurance Testing',
    'Technology Consulting',
    'System Integration',
    'Software Maintenance',
  ],
  serviceAreas: [
    'Cairo',
    'Alexandria',
    'Giza',
    'Shubra El Kheima',
    'Port Said',
    'Suez',
    'Luxor',
    'Mansoura',
    'Tanta',
    'Asyut',
    'All Egypt',
  ],
  operatingHours: {
    monday: '9:00 AM - 6:00 PM',
    tuesday: '9:00 AM - 6:00 PM',
    wednesday: '9:00 AM - 6:00 PM',
    thursday: '9:00 AM - 6:00 PM',
    friday: '9:00 AM - 6:00 PM',
    saturday: 'Closed',
    sunday: 'Closed',
  },
  attributes: [
    'Free consultations',
    'Remote services available',
    'Multilingual staff (Arabic/English)',
    'Custom solutions',
    'Enterprise clients welcome',
    'Startup-friendly pricing',
  ],
};

// Generate local business citations for SEO
export const generateLocalCitations = () => {
  const baseSEO = getBaseSEO();

  return [
    {
      platform: 'Google My Business',
      name: 'Techloom',
      address: 'Cairo, Egypt',
      phone: baseSEO.companyPhone,
      website: baseSEO.siteUrl,
      category: 'Software Company',
    },
    {
      platform: 'Facebook Business',
      name: 'Techloom',
      address: 'Cairo, Egypt',
      phone: baseSEO.companyPhone,
      website: baseSEO.siteUrl,
      category: 'Software Development Company',
    },
    {
      platform: 'LinkedIn Company',
      name: 'Techloom',
      location: 'Cairo, Egypt',
      industry: 'Software Development',
      website: baseSEO.siteUrl,
    },
  ];
};

// Local keywords for different Egyptian cities
export const localKeywordVariations = {
  cairo: [
    'software development company Cairo',
    'web development Cairo',
    'mobile app development Cairo',
    'شركة تطوير البرمجيات القاهرة',
    'تطوير المواقع القاهرة',
    'برمجة تطبيقات القاهرة',
    'software house Cairo',
    'programming company Cairo',
    'custom software Cairo',
    'enterprise solutions Cairo',
  ],
  alexandria: [
    'software development company Alexandria',
    'web development Alexandria',
    'mobile app development Alexandria',
    'شركة تطوير البرمجيات الإسكندرية',
    'تطوير المواقع الإسكندرية',
    'برمجة تطبيقات الإسكندرية',
    'software house Alexandria',
    'programming company Alexandria',
    'custom software Alexandria',
  ],
  giza: [
    'software development company Giza',
    'web development Giza',
    'mobile app development Giza',
    'شركة تطوير البرمجيات الجيزة',
    'تطوير المواقع الجيزة',
    'برمجة تطبيقات الجيزة',
    'software house Giza',
    'programming company Giza',
  ],
  egypt: [
    'software development company Egypt',
    'web development Egypt',
    'mobile app development Egypt',
    'شركة تطوير البرمجيات مصر',
    'تطوير المواقع مصر',
    'برمجة تطبيقات مصر',
    'software house Egypt',
    'programming company Egypt',
    'custom software Egypt',
    'enterprise solutions Egypt',
    'software solutions Egypt',
    'tech company Egypt',
    'IT services Egypt',
  ],
};

// Generate location-specific meta descriptions
export const generateLocationDescription = (location, service = '') => {
  const locationData = {
    cairo: {
      en: 'Cairo',
      ar: 'القاهرة',
      description: 'Leading software development company in Cairo, Egypt.',
    },
    alexandria: {
      en: 'Alexandria',
      ar: 'الإسكندرية',
      description: 'Professional software development services in Alexandria, Egypt.',
    },
    giza: {
      en: 'Giza',
      ar: 'الجيزة',
      description: 'Expert software development company serving Giza, Egypt.',
    },
    egypt: {
      en: 'Egypt',
      ar: 'مصر',
      description: 'Premier software development company serving all of Egypt.',
    },
  };

  const loc = locationData[location.toLowerCase()] || locationData.egypt;
  const serviceText = service ? `${service} services in` : 'Software development company in';

  return `${serviceText} ${loc.en}. Custom web & mobile applications, enterprise solutions. Expert team serving businesses across ${loc.en}. Contact us for free consultation.`;
};

// Generate structured data for local business with location variations
export const generateLocationBusinessSchema = (location) => {
  const baseSEO = getBaseSEO();
  const locationData = {
    cairo: {
      name: 'Techloom Cairo',
      description: 'Leading software development company in Cairo, Egypt',
      addressLocality: 'Cairo',
      addressRegion: 'Cairo Governorate',
      latitude: 30.0444,
      longitude: 31.2357,
    },
    alexandria: {
      name: 'Techloom Alexandria',
      description: 'Professional software development services in Alexandria, Egypt',
      addressLocality: 'Alexandria',
      addressRegion: 'Alexandria Governorate',
      latitude: 31.2001,
      longitude: 29.9187,
    },
    giza: {
      name: 'Techloom Giza',
      description: 'Expert software development company serving Giza, Egypt',
      addressLocality: 'Giza',
      addressRegion: 'Giza Governorate',
      latitude: 30.0131,
      longitude: 31.2089,
    },
  };

  const loc = locationData[location.toLowerCase()];
  if (!loc) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: loc.name,
    description: loc.description,
    url: baseSEO.siteUrl,
    telephone: baseSEO.companyPhone,
    email: baseSEO.companyEmail,
    address: {
      '@type': 'PostalAddress',
      addressLocality: loc.addressLocality,
      addressRegion: loc.addressRegion,
      addressCountry: 'EG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: loc.latitude,
      longitude: loc.longitude,
    },
    areaServed: {
      '@type': 'City',
      name: loc.addressLocality,
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: loc.latitude,
        longitude: loc.longitude,
      },
      geoRadius: '50000', // 50km radius
    },
  };
};

// NAP (Name, Address, Phone) consistency checker
export const getNAPData = () => {
  const baseSEO = getBaseSEO();

  return {
    name: 'Techloom',
    address: 'Cairo, Egypt', // Make this more specific when you have exact address
    phone: baseSEO.companyPhone,
    email: baseSEO.companyEmail,
    website: baseSEO.siteUrl,
  };
};

// Generate local landing page content suggestions
export const generateLocalPageContent = (location, service) => {
  const locationData = {
    cairo: 'Cairo (القاهرة)',
    alexandria: 'Alexandria (الإسكندرية)',
    giza: 'Giza (الجيزة)',
    egypt: 'Egypt (مصر)',
  };

  const serviceData = {
    'web-development': 'Web Development',
    'mobile-development': 'Mobile App Development',
    'enterprise-solutions': 'Enterprise Solutions',
    'quality-assurance': 'Quality Assurance & Testing',
  };

  const locationName = locationData[location.toLowerCase()] || 'Egypt';
  const serviceName = serviceData[service] || 'Software Development';

  return {
    title: `${serviceName} Services in ${locationName} | Techloom`,
    h1: `Professional ${serviceName} Company in ${locationName}`,
    description: `Leading ${serviceName.toLowerCase()} services in ${locationName}. Expert team, proven results, competitive pricing. Serving businesses across ${locationName} with custom solutions.`,
    content: {
      intro: `Techloom is the premier ${serviceName.toLowerCase()} company serving ${locationName}. We specialize in delivering high-quality, custom solutions for businesses of all sizes.`,
      whyChooseUs: `Why choose Techloom for ${serviceName.toLowerCase()} in ${locationName}?`,
      localPresence: `With deep understanding of the ${locationName} market, we deliver solutions that work for local businesses.`,
      contactCTA: `Ready to start your ${serviceName.toLowerCase()} project in ${locationName}? Contact our expert team today.`,
    },
  };
};
