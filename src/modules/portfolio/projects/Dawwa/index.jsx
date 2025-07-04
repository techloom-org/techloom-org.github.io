import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Carousel from '../../components/Carousel';
import Intro from '../../components/Intro';

// Import Dawwa assets
import mobile1 from '../../../../assets/images/portfolio/dawwa/mobile1.png';
import mobile1Dark from '../../../../assets/images/portfolio/dawwa/mobile1_dark.png';
import mobile2 from '../../../../assets/images/portfolio/dawwa/mobile2.png';
import mobile2Dark from '../../../../assets/images/portfolio/dawwa/mobile2_dark.png';
import website from '../../../../assets/images/portfolio/dawwa/website.png';
import websiteDark from '../../../../assets/images/portfolio/dawwa/website_dark.png';

export default function Dawwa() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // Intro images: left, center, right layout - theme-aware
  const introImages = [
    { src: isDark ? websiteDark : website, alt: 'Dawwa Web Application Dashboard' },
  ];

  const keyFeatures = [
    'B2B Pharmaceutical Marketplace',
    'Real-time Pricing Trends',
    'Multi-supplier Management',
    'Cost Optimization Tools',
    'Mobile & Web Applications',
    'Admin Panel Dashboard',
    'Firebase Integration',
    'Cross-platform Solution',
    'Pharmacy Management System',
    'Order Processing Automation',
  ];

  const techStack = [
    'React Native',
    'React.js',
    'Firebase Firestore',
    'Algolia Search',
    'Cloud Functions',
    'Material-UI',
    'Node.js',
  ];

  // Mobile app images only for carousel - theme-aware
  const mobileAppImages = [
    { src: isDark ? mobile1Dark : mobile1, alt: 'Mobile App - Pharmacy Dashboard' },
    { src: isDark ? mobile2Dark : mobile2, alt: 'Mobile App - Product Catalog' },
  ];

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Intro
        title="Dawwa"
        description="A comprehensive pharmaceuticals e-commerce marketplace that empowers pharmacies with complete solutions to manage costs, maximize savings, and streamline purchase orders across multiple suppliers. Built as a B2B platform serving Alexandria and Cairo, featuring real-time industry pricing trends, cross-platform mobile applications, and advanced admin management tools."
        images={introImages}
        keyFeatures={keyFeatures}
        techStack={techStack}
      />

      {/* Mobile App Gallery */}
      <Carousel title="Mobile Application Features" images={mobileAppImages} />
    </Container>
  );
}
