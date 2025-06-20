import techloomLogo from '@assets/images/logo.png';
import { useDocumentHead } from '@modules/app/hooks/useDocumentHead';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import AboutCallToAction from './AboutCallToAction';
import AboutHero from './AboutHero';
import MissionVision from './MissionVision';
import TeamSection from './TeamSection';
import ValuesSection from './ValuesSection';

const About = () => {
  useDocumentHead({
    title: 'About Us - Techloom | World-Class Technology Solutions',
    description:
      "Learn about Techloom's mission, vision, and world-class team. We deliver exceptional software engineering solutions with decades of global experience from Fortune 500 companies.",
    icon: techloomLogo,
    keywords: [
      'about techloom',
      'technology startup',
      'software engineering',
      'world-class developers',
      'Fortune 500 experience',
      'innovation',
      'excellence',
      'team',
      'mission',
      'vision',
      'technology consulting',
      'custom software development',
    ],
  });

  // Add structured data for SEO
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Techloom',
      description:
        'Forward-thinking technology startup delivering exceptional software engineering solutions',
      url: 'https://techloom.com',
      logo: 'https://techloom.com/logo.png',
      foundingDate: '2024',
      slogan: 'Engineering Quality Beyond Expectations',
      knowsAbout: [
        'Software Development',
        'Web Development',
        'Mobile Development',
        'Cloud Solutions',
        'System Architecture',
        'Technology Consulting',
      ],
      areaServed: 'Worldwide',
      serviceType: 'Technology Solutions',
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
      sx={{ flexGrow: 1, pt: 8 }}
      component="main"
      role="main"
      aria-label="About Techloom page content"
    >
      <AboutHero />
      <MissionVision />
      <ValuesSection />
      <TeamSection />
      <AboutCallToAction />
    </Box>
  );
};

export default About;
