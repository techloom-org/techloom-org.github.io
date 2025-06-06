import techloomLogo from '@assets/images/logo.png';
import { useDocumentHead } from '@modules/app/hooks/useDocumentHead';
import { Box } from '@mui/material';
import ServicesCallToAction from './ServicesCallToAction';
import ServicesHero from './ServicesHero';
import ServicesList from './ServicesList';

const Services = () => {
  useDocumentHead({
    title: 'Services - Techloom',
    description:
      "Explore Techloom's comprehensive technology services including web development, cloud solutions, and quality assurance.",
    icon: techloomLogo,
    keywords: [
      'services',
      'web development',
      'cloud solutions',
      'quality assurance',
      'technology consulting',
    ],
  });

  return (
    <Box sx={{ flexGrow: 1, pt: 8 }}>
      <ServicesHero />
      <ServicesList />
      <ServicesCallToAction />
    </Box>
  );
};

export default Services;
