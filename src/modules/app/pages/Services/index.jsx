import techloomLogo from '@assets/images/logo.png';
import { useDocumentHead } from '@modules/app/hooks/useDocumentHead';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect } from 'react';
import ServicesCallToAction from './ServicesCallToAction';
import ServicesHero from './ServicesHero';
import ServicesList from './ServicesList';

const Services = () => {
  const theme = useTheme();

  useDocumentHead({
    title: 'Services - Techloom | Custom Software Development & Technology Solutions',
    description:
      'Comprehensive software development services including custom applications, multi-platform solutions, hardware-based software, quality assurance, and technology consulting.',
    icon: techloomLogo,
    keywords: [
      'custom software development',
      'multi-platform solutions',
      'hardware-based software',
      'embedded systems',
      'quality assurance',
      'technology consulting',
      'mobile app development',
      'web development',
      'desktop applications',
      'IoT solutions',
      'software testing',
      'code review',
      'system assessment',
      'performance optimization',
    ],
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
    <Box
      sx={{
        flexGrow: 1,
        pt: 8,
        borderRadius: theme.palette.custom.borderRadius,
      }}
      component="main"
      role="main"
      aria-label="Techloom services page content"
    >
      <ServicesHero />
      <ServicesList />
      <ServicesCallToAction />
    </Box>
  );
};

export default Services;
