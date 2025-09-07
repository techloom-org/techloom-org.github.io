import { Container } from '@mui/material';
import Carousel from '../../components/Carousel';
import Intro from '../../components/Intro';

// Import images
// Website images
import websiteImage3 from '../../../../assets/images/portfolio/shutterflow/image copy 2.png';
import websiteImage2 from '../../../../assets/images/portfolio/shutterflow/image copy.png';
import websiteImage1 from '../../../../assets/images/portfolio/shutterflow/image.png';

// Admin Panel images
import adminImage1 from '../../../../assets/images/portfolio/shutterflow/image copy 3.png';
import adminImage2 from '../../../../assets/images/portfolio/shutterflow/image copy 4.png';
import adminImage3 from '../../../../assets/images/portfolio/shutterflow/image copy 5.png';
import adminImage4 from '../../../../assets/images/portfolio/shutterflow/image copy 6.png';
import adminImage5 from '../../../../assets/images/portfolio/shutterflow/image copy 7.png';
import adminImage6 from '../../../../assets/images/portfolio/shutterflow/image copy 8.png';
import adminImage7 from '../../../../assets/images/portfolio/shutterflow/image copy 9.png';

// Customer Panel images
import customerImage1 from '../../../../assets/images/portfolio/shutterflow/image copy 10.png';
import customerImage2 from '../../../../assets/images/portfolio/shutterflow/image copy 11.png';

export default function Shutterflow() {
  // Hero images for intro section - showing all three main components
  const heroImages = [
    { src: websiteImage1, alt: 'Marketing Website - Professional company presentation' },
    { src: adminImage1, alt: 'Admin Panel - Comprehensive business management dashboard' },
    { src: customerImage1, alt: 'Customer Portal - Client-focused interface' },
  ];

  const keyFeatures = [
    'Complete Business Management System',
    'Admin Panel - CRM Solution',
    'Customer Portal',
    'Marketing Website',
    'Quotations Management',
    'Sales Target Tracking',
    'Installation Scheduling',
    'Customer Management',
    'Inventory Control',
    'Analytics & Reporting',
  ];

  const techStack = ['React.js', 'Node.js', 'Cloud Functions', 'Material-UI', 'Firebase'];

  // Website images
  const websiteImages = [
    { src: websiteImage1, alt: 'Homepage featuring company overview and services' },
    { src: websiteImage2, alt: 'Services page showcasing rolling shutter solutions' },
    { src: websiteImage3, alt: 'Contact page with inquiry forms and company details' },
  ];

  // Admin Panel images
  const adminPanelImages = [
    { src: adminImage1, alt: 'Dashboard overview with key metrics and quick actions' },
    { src: adminImage2, alt: 'Customer management system with detailed client profiles' },
    { src: adminImage3, alt: 'Quotations system for creating and managing estimates' },
    { src: adminImage4, alt: 'Sales tracking dashboard with performance analytics' },
    { src: adminImage5, alt: 'Installation scheduling calendar and workforce management' },
    { src: adminImage6, alt: 'Inventory control system for materials and products' },
    { src: adminImage7, alt: 'Analytics and reporting dashboard with business insights' },
  ];

  // Customer Panel images
  const customerPanelImages = [
    { src: customerImage1, alt: 'Customer dashboard with project overview and status updates' },
    {
      src: customerImage2,
      alt: 'Order tracking system showing installation progress and timeline',
    },
  ];

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Intro
        title="Shutter Flow"
        description="A comprehensive business management system for one of the biggest rolling shutter companies in Egypt. This complete solution consists of three integrated parts: an Admin Panel for comprehensive business management, a Customer Panel for client interactions, and a Marketing Website for online presence. The system handles everything from quotations and sales targets to installation scheduling and customer management."
        images={heroImages}
        keyFeatures={keyFeatures}
        techStack={techStack}
      />

      {/* Marketing Website Gallery */}
      <Carousel
        title="Marketing Website"
        description="A professional marketing website that serves as the digital face of the company. Features modern design, responsive layout, comprehensive service showcases, and effective lead generation tools. Built to attract potential customers and establish credibility in the rolling shutter industry."
        images={websiteImages}
        mode="single"
      />

      {/* Admin Panel Gallery */}
      <Carousel
        title="Admin Panel - Business Management"
        description="A comprehensive CRM system designed specifically for rolling shutter businesses. This powerful admin panel centralizes all business operations including customer relationship management, quotation generation, sales target tracking, installation scheduling, inventory control, and detailed analytics reporting. Features role-based access control and real-time business insights."
        images={adminPanelImages}
        mode="single"
      />

      {/* Customer Panel Gallery */}
      <Carousel
        title="Customer Panel - Client Portal"
        description="A dedicated client portal that enhances customer experience by providing transparency and control. Customers can track their project progress in real-time, view installation timelines, access project documents, communicate directly with the team, and receive automated status updates throughout their service journey."
        images={customerPanelImages}
        mode="single"
      />
    </Container>
  );
}
