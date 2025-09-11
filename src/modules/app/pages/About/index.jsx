import { useSEO } from '@modules/app/hooks/useSEO';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import AboutCallToAction from './AboutCallToAction';
import AboutHero from './AboutHero';
import MissionVision from './MissionVision';
import TeamSection from './TeamSection';
import ValuesSection from './ValuesSection';

const About = () => {
  useSEO({
    title: 'About Us - Techloom | World-Class Technology Solutions',
    description: "Learn about Techloom's mission, vision, and world-class team. We deliver exceptional software engineering solutions with decades of global experience from Fortune 500 companies in Egypt.",
    keywords: [
      'about techloom',
      'technology startup Egypt',
      'software engineering company Egypt',
      'world-class developers Cairo',
      'Fortune 500 experience',
      'innovation Egypt',
      'excellence software development',
      'team techloom',
      'mission vision techloom',
      'technology consulting Egypt',
      'custom software development Egypt',
      'شركة تكنولوجيا متقدمة',
      'فريق تطوير محترف',
      'رؤية ومهمة الشركة',
    ],
    location: 'Egypt',
    service: 'Technology Solutions',
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
