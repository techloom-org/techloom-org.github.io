import Hero from '@/modules/app/pages/Home/Hero';
import HomeFooter from '@/modules/app/pages/Home/HomeFooter';
import WhyChooseTechloom from '@/modules/app/pages/Home/WhyChooseTechloom';
import { useSEO } from '@modules/app/hooks/useSEO';
import { Box } from '@mui/material';

const Home = () => {
  useSEO({
    title: 'Techloom | شركة تطوير البرمجيات في مصر | Software Development Company Egypt',
    description: 'Leading software development company in Egypt. Custom web & mobile apps, enterprise solutions, quality assurance. Serving Cairo, Alexandria & all Egypt. شركة تطوير برمجيات متقدمة في مصر.',
    keywords: [
      'software development Egypt',
      'شركة تطوير البرمجيات مصر',
      'web development Cairo',
      'mobile app development Egypt',
      'custom software Cairo',
      'enterprise solutions Egypt',
      'تطوير تطبيقات الويب',
      'تطوير تطبيقات الموبايل',
      'برمجة مواقع مصر',
      'شركة برمجة القاهرة',
    ],
    location: 'Egypt',
    service: 'Software Development',
  });

  return (
    <Box
      sx={{
        flexGrow: 1,
        overflow: 'hidden',
        '& > *:not(:last-child)': {
          mb: { xs: 0, sm: 2 },
        },
      }}
    >
      <Hero />
      <WhyChooseTechloom />
      <HomeFooter />
    </Box>
  );
};

export default Home;
