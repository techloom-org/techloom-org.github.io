import Carousel from '@/modules/portfolio/components/Carousel';
import Intro from '@/modules/portfolio/components/Intro';
import { Container } from '@mui/material';

// Import actual attorney website screenshots
import aboutSection from '../../../../assets/images/portfolio/landing-pages/about-section.png';
import contactForm from '../../../../assets/images/portfolio/landing-pages/contact-form.png';
import heroSection from '../../../../assets/images/portfolio/landing-pages/hero-section.png';
import practiceAreas from '../../../../assets/images/portfolio/landing-pages/practice-areas.png';

export default function LandingPages() {
  // Hero section images - main website showcase
  const introImages = [
    {
      src: heroSection,
      alt: 'Attorney Website Homepage - Hero Section',
    },
    // {
    //   src: aboutSection,
    //   alt: 'Attorney Website About Section',
    // },
    // {
    //   src: contactForm,
    //   alt: 'Attorney Website Contact Form',
    // },
  ];

  const keyFeatures = [
    'Professional Law Firm Website',
    'Responsive Design',
    'Contact Form Integration',
    'Practice Areas Showcase',
    'Attorney Profile Section',
    'Free Consultation CTA',
    'Office Information',
    'Client Testimonials',
    'Professional Branding',
    'Mobile-Optimized',
  ];

  const techStack = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Bootstrap',
    'PHP',
    'Contact Forms',
    'Responsive Design',
  ];

  // Website sections and features carousel
  const websiteFeatures = [
    {
      src: heroSection,
      alt: 'Hero Section - A good lawyer is one you can trust',
    },
    {
      src: practiceAreas,
      alt: 'Practice Areas - Criminal, Family, Civil Law',
    },
    {
      src: aboutSection,
      alt: 'About Ahmed B. Ismail - Attorney Profile',
    },
    {
      src: contactForm,
      alt: 'Contact Form - Request Free Quote',
    },
  ];

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Intro
        title="Landing Pages Collection"
        description="Professional landing page designs and implementations, featuring the Attorney Ahmed B. Ismail law firm website. A comprehensive legal services website built with modern web technologies, focusing on user experience, professional presentation, and effective client conversion. The site showcases practice areas including Criminal Law, Family Law, and Civil Litigation with emphasis on trust, expertise, and personalized attention."
        images={introImages}
        keyFeatures={keyFeatures}
        techStack={techStack}
      />

      {/* Website Features Gallery */}
      <Carousel
        title="Attorney Website Features & Sections"
        images={websiteFeatures}
        mode="single"
      />
    </Container>
  );
}
