import React from 'react';
import { Box } from '@mui/material';
import { useDocumentHead } from '@modules/app/hooks/useDocumentHead';
import Hero from '@/modules/app/pages/Home/Hero';
import WhyChooseTechloom from '@/modules/app/pages/Home/WhyChooseTechloom';
import HomeFooter from '@/modules/app/pages/Home/HomeFooter';
import techloomLogo from '@assets/images/logo.png';

const Home = () => {
  // Automatically manage document head
  useDocumentHead({
    title: 'Techloom - Engineering Quality Beyond Expectations',
    description: 'Techloom delivers engineering quality beyond expectations. Your trusted technology partner for innovative solutions.',
    icon: techloomLogo,
    keywords: ['techloom', 'engineering', 'technology', 'quality', 'software development', 'startup']
  });

  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
      <Hero />
      <WhyChooseTechloom />
      <HomeFooter />
    </Box>
  );
};

export default Home;
