import { useSEO } from '@modules/app/hooks/useSEO';
import { Stack } from '@mui/material';
import { useEffect } from 'react';
import ServicesCallToAction from './ServicesCallToAction';
import ServicesHero from './ServicesHero';
import ServicesList from './ServicesList';

const Services = () => {
  useSEO({
    title: 'Services - Techloom | Custom Software Development & Technology Solutions',
    description: 'Comprehensive software development services in Egypt including custom applications, multi-platform solutions, hardware-based software, quality assurance, and technology consulting.',
    keywords: [
      'custom software development Egypt',
      'multi-platform solutions Cairo',
      'hardware-based software Egypt',
      'embedded systems Egypt',
      'quality assurance testing Egypt',
      'technology consulting Cairo',
      'mobile app development Egypt',
      'web development Cairo',
      'desktop applications Egypt',
      'IoT solutions Egypt',
      'software testing Cairo',
      'تطوير البرمجيات المخصصة',
      'ضمان الجودة والاختبار',
      'استشارات تقنية',
    ],
    location: 'Egypt',
    service: 'Software Development Services',
  });

  // Add structured data for SEO
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Techloom',
      description: 'Custom software development and technology solutions',
      url: 'https://techloom.com/services',
      logo: 'https://techloom.com/logo.png',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Technology Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Software Development',
              description:
                'Tailored software solutions across any industry including web applications, enterprise software, and system integration.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Multi-Platform Solutions',
              description:
                'Development across all platforms including mobile apps, web applications, desktop apps, and embedded systems.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Hardware-Based Software',
              description:
                'Specialized software for hardware targets including embedded systems, IoT solutions, and real-time systems.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Quality Assurance & Testing',
              description:
                'Comprehensive testing services including automated testing, manual QA, performance testing, and security testing.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Technology Consulting',
              description:
                'Expert guidance including architecture design, technology selection, and development best practices.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Assessment & Optimization',
              description:
                'Code review, performance analysis, security assessment, and architecture optimization services.',
            },
          },
        ],
      },
      areaServed: 'Worldwide',
      serviceType: ['Software Development', 'Technology Consulting', 'Quality Assurance'],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Stack
      sx={{ flexGrow: 1, pt: 8 }}
      spacing={{ xs: 3, md: 15 }}
      component="main"
      role="main"
      aria-label="Techloom services page content"
    >
      <ServicesHero />
      <ServicesList />
      <ServicesCallToAction />
    </Stack>
  );
};

export default Services;
