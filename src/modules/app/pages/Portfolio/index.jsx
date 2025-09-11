import { useSEO } from '@modules/app/hooks/useSEO';
import { Box, Container } from '@mui/material';
import PortfolioGrid from './PortfolioGrid';
import PortfolioHero from './PortfolioHero';

const Portfolio = () => {
  useSEO({
    title: 'Portfolio - Techloom | Our Successful Projects',
    description: 'Explore our portfolio of successful software development projects across web development, e-commerce, IoT, and mobile applications. See our work for clients in Egypt and worldwide.',
    keywords: [
      'portfolio techloom',
      'software projects Egypt',
      'web development projects Cairo',
      'e-commerce projects Egypt',
      'IoT projects Cairo',
      'mobile app projects Egypt',
      'custom software portfolio',
      'successful projects Egypt',
      'معرض أعمالنا',
      'مشاريع ناجحة',
      'تطبيقات ويب',
      'تطبيقات موبايل',
    ],
    location: 'Egypt',
    service: 'Software Projects',
  });

  return (
    <Box
      sx={{
        flexGrow: 1,
        pt: 8,
        overflow: 'hidden',
        '& > *:not(:last-child)': {
          mb: { xs: 4, sm: 6 },
        },
      }}
    >
      <PortfolioHero />

      <Container maxWidth="lg">
        <PortfolioGrid />
      </Container>
    </Box>
  );
};

export default Portfolio;
