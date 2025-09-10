import { useDocumentHead } from '@/modules/app/hooks/useDocumentHead';
import techloomLogo from '@assets/images/logo.png';
import { Box, Container } from '@mui/material';
import PortfolioGrid from './PortfolioGrid';
import PortfolioHero from './PortfolioHero';

const Portfolio = () => {
  useDocumentHead({
    title: 'Portfolio - Techloom',
    description:
      'Explore our portfolio of successful projects across web development, e-commerce, IoT, and more.',
    icon: techloomLogo,
    keywords: ['portfolio', 'projects', 'web development', 'e-commerce', 'IoT', 'techloom'],
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
