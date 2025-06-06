import React from 'react';
import { Box } from '@mui/material';
import { useDocumentHead } from '@modules/app/hooks/useDocumentHead';
import techloomLogo from '@assets/images/logo.png';
import AboutHero from './AboutHero';
import MissionVision from './MissionVision';
import ValuesSection from './ValuesSection';

const About = () => {
  useDocumentHead({
    title: 'About Us - Techloom',
    description: 'Learn about Techloom\'s mission, vision, and the team behind our innovative technology solutions.',
    icon: techloomLogo,
    keywords: ['about techloom', 'company', 'team', 'mission', 'vision', 'technology startup']
  });

  return (
    <Box sx={{ flexGrow: 1, pt: 8 }}>
      <AboutHero />
      <MissionVision />
      <ValuesSection />
    </Box>
  );
};

export default About;
