// SEO utilities for Techloom software development company

// Base SEO configuration for Techloom
export const getBaseSEO = () => ({
  siteName: 'Techloom',
  siteUrl: 'https://techloom-org.github.io',
  defaultTitle: 'Techloom | شركة تطوير البرمجيات في مصر | Software Development Company Egypt',
  defaultDescription:
    'Leading software development company in Egypt. Custom web & mobile apps, enterprise solutions, quality assurance. Serving Cairo, Alexandria & all Egypt. شركة تطوير برمجيات متقدمة في مصر.',
  defaultKeywords:
    'software development Egypt, شركة تطوير البرمجيات مصر, web development Cairo, mobile app development Egypt, custom software Cairo, enterprise solutions Egypt, quality assurance testing, تطوير تطبيقات الويب, تطوير تطبيقات الموبايل, برمجة مواقع مصر, شركة برمجة القاهرة, تطوير النظم المؤسسية',
  defaultImage: '/assets/images/logo.png',
  companyPhone: '+20-111-518-4659',
  companyEmail: 'techloom.apps@gmail.com',
  facebookPage: 'https://web.facebook.com/profile.php?id=61565804570894',
  whatsappNumber: '+201115184659',
});

// Generate structured data for Local Business (Software Development Company)
export const generateLocalBusinessSchema = () => {
  const baseSEO = getBaseSEO();
  
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseSEO.siteUrl}#business`,
    name: 'Techloom',
    alternateName: 'تكنولوم',
    description: 'Leading software development company in Egypt specializing in custom web applications, mobile apps, and enterprise solutions.',
    url: baseSEO.siteUrl,
    logo: `${baseSEO.siteUrl}${baseSEO.defaultImage}`,
    image: `${baseSEO.siteUrl}${baseSEO.defaultImage}`,
    telephone: baseSEO.companyPhone,
    email: baseSEO.companyEmail,
    priceRange: '$$',
    currenciesAccepted: 'EGP, USD, EUR',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    foundingDate: '2024',
    slogan: 'Engineering Quality Beyond Expectations',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'EG',
      addressRegion: 'Egypt',
      addressLocality: 'Cairo',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.0444,
      longitude: 31.2357,
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'Egypt',
        alternateName: 'مصر',
      },
      {
        '@type': 'City',
        name: 'Cairo',
        alternateName: 'القاهرة',
      },
      {
        '@type': 'City',
        name: 'Alexandria',
        alternateName: 'الإسكندرية',
      },
      {
        '@type': 'City',
        name: 'Giza',
        alternateName: 'الجيزة',
      },
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 30.0444,
        longitude: 31.2357,
      },
      geoRadius: '1000000', // Cover all of Egypt
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Software Development',
            alternateName: 'تطوير البرمجيات المخصصة',
            description: 'Tailored software solutions for businesses across all industries in Egypt.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Application Development',
            alternateName: 'تطوير تطبيقات الويب',
            description: 'Modern, responsive web applications using latest technologies.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development',
            alternateName: 'تطوير تطبيقات الموبايل',
            description: 'Native and cross-platform mobile applications for iOS and Android.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Enterprise Solutions',
            alternateName: 'الحلول المؤسسية',
            description: 'Large-scale enterprise software solutions and system integration.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Quality Assurance & Testing',
            alternateName: 'ضمان الجودة والاختبار',
            description: 'Comprehensive testing services to ensure software quality and reliability.',
          },
        },
      ],
    },
    sameAs: [
      baseSEO.facebookPage,
      `https://wa.me/${baseSEO.whatsappNumber.replace('+', '')}`,
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: baseSEO.companyPhone,
        contactType: 'customer service',
        availableLanguage: ['English', 'Arabic', 'en', 'ar'],
        areaServed: 'EG',
        contactOption: 'TollFree',
      },
      {
        '@type': 'ContactPoint',
        email: baseSEO.companyEmail,
        contactType: 'customer service',
        availableLanguage: ['English', 'Arabic', 'en', 'ar'],
        areaServed: 'EG',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Ahmed Mohamed',
        },
        reviewBody: 'Excellent software development company in Egypt. They delivered our custom web application on time and within budget.',
        datePublished: '2024-01-15',
      },
    ],
    openingHours: 'Mo-Fr 09:00-18:00',
    keywords: 'software development, web development, mobile apps, enterprise solutions, Cairo, Egypt, تطوير البرمجيات',
  };
};

// Generate Service schema for specific services
export const generateServiceSchema = (service) => {
  const _baseSEO = getBaseSEO();
  
  const serviceSchemas = {
    'web-development': {
      '@type': 'Service',
      name: 'Web Application Development Services Egypt',
      alternateName: 'خدمات تطوير تطبيقات الويب في مصر',
      description: 'Professional web application development services in Egypt. Custom websites, e-commerce platforms, and web-based solutions for businesses in Cairo, Alexandria, and across Egypt.',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Techloom',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'EG',
          addressRegion: 'Cairo',
        },
      },
      areaServed: 'Egypt',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Website Development',
              description: 'Tailored websites built with modern technologies',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'E-commerce Development',
              description: 'Online stores and e-commerce platforms',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web Application Development',
              description: 'Complex web-based business applications',
            },
          },
        ],
      },
    },
    'mobile-development': {
      '@type': 'Service',
      name: 'Mobile App Development Services Egypt',
      alternateName: 'خدمات تطوير تطبيقات الموبايل في مصر',
      description: 'Professional mobile application development services in Egypt. iOS and Android apps, cross-platform solutions for businesses across Egypt.',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Techloom',
      },
      areaServed: 'Egypt',
    },
    'enterprise-solutions': {
      '@type': 'Service',
      name: 'Enterprise Software Solutions Egypt',
      alternateName: 'حلول البرمجيات المؤسسية في مصر',
      description: 'Enterprise-grade software solutions for large organizations in Egypt. System integration, workflow automation, and custom enterprise applications.',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Techloom',
      },
      areaServed: 'Egypt',
    },
  };

  return {
    '@context': 'https://schema.org',
    ...serviceSchemas[service],
  };
};

// Generate Product schema for software projects
export const generateProductSchema = (product) => {
  const baseSEO = getBaseSEO();
  
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.title,
    description: product.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: product.platform || 'Web, iOS, Android',
    offers: {
      '@type': 'Offer',
      price: 'Contact for pricing',
      priceCurrency: 'EGP',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Techloom',
        url: baseSEO.siteUrl,
      },
    },
    creator: {
      '@type': 'Organization',
      name: 'Techloom',
      url: baseSEO.siteUrl,
    },
    image: product.images?.[0] || `${baseSEO.siteUrl}${baseSEO.defaultImage}`,
    dateCreated: product.dateCreated || '2024-01-01',
    keywords: product.technologies?.join(', ') || 'custom software, web application, mobile app',
  };
};

// Generate FAQ schema
export const generateFAQSchema = (faqs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

// Generate breadcrumb schema
export const generateBreadcrumbSchema = (breadcrumbs) => {
  const baseSEO = getBaseSEO();
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: `${baseSEO.siteUrl}${breadcrumb.url}`,
    })),
  };
};

// Egypt-specific keywords for software companies
export const egyptSoftwareKeywords = [
  // English keywords
  'software company Egypt',
  'software development Cairo',
  'web development Egypt',
  'mobile app development Cairo',
  'custom software Egypt',
  'enterprise software Cairo',
  'software house Egypt',
  'programming company Cairo',
  'web design Egypt',
  'app development Egypt',
  'software solutions Cairo',
  'tech company Egypt',
  'IT services Cairo',
  'software engineering Egypt',
  'digital solutions Cairo',
  
  // Arabic keywords
  'شركة تطوير البرمجيات مصر',
  'شركة برمجة القاهرة',
  'تطوير المواقع مصر',
  'تطوير التطبيقات القاهرة',
  'شركة تكنولوجيا مصر',
  'تطوير البرمجيات القاهرة',
  'برمجة مواقع مصر',
  'تطوير تطبيقات الموبايل مصر',
  'الحلول البرمجية مصر',
  'شركة تقنية القاهرة',
  'خدمات تقنية المعلومات مصر',
  'تطوير النظم مصر',
  'برمجة تطبيقات مصر',
  'تصميم مواقع مصر',
  'الحلول الرقمية مصر',
];

// Location-specific keywords
export const egyptCityKeywords = [
  'Cairo', 'القاهرة',
  'Alexandria', 'الإسكندرية', 
  'Giza', 'الجيزة',
  'Shubra El Kheima', 'شبرا الخيمة',
  'Port Said', 'بورسعيد',
  'Suez', 'السويس',
  'Luxor', 'الأقصر',
  'Mansoura', 'المنصورة',
  'El Mahalla El Kubra', 'المحلة الكبرى',
  'Tanta', 'طنطا',
  'Asyut', 'أسيوط',
  'Ismailia', 'الإسماعيلية',
  'Fayyum', 'الفيوم',
  'Zagazig', 'الزقازيق',
  'Aswan', 'أسوان',
  'Damietta', 'دمياط',
];
