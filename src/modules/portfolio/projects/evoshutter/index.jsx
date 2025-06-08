import { Box } from '@mui/material';
import Carousel from '../../components/Carousel';
import Intro from '../../components/Intro';

// Import images
import analyticsReportsImage from '../../../../assets/images/portfolio/evoshutter/analytics-reports.png';
import customerManagementImage from '../../../../assets/images/portfolio/evoshutter/customer-management.png';
import dashboardImage from '../../../../assets/images/portfolio/evoshutter/dashboard.png';
import heroImage from '../../../../assets/images/portfolio/evoshutter/hero.png';
import installationSchedulingImage from '../../../../assets/images/portfolio/evoshutter/installation-scheduling.png';
import inventoryControlImage from '../../../../assets/images/portfolio/evoshutter/inventory-control.png';
import quotationsImage from '../../../../assets/images/portfolio/evoshutter/quotations.png';
import salesTrackingImage from '../../../../assets/images/portfolio/evoshutter/sales-tracking.png';

export default function Evoshutter() {
  const introData = {
    title: 'EvoShutter CRM System',
    description:
      'A comprehensive CRM system for one of the biggest rolling shutter companies in Egypt called EvoShutter. This system handles literally everything from quotations and sales targets to installation scheduling and customer management.',
    images: [{ src: heroImage, alt: 'EvoShutter CRM dashboard overview' }],
    techStack: ['React.js', 'Node.js', 'Cloud Functions', 'Material-UI', 'Firebase'],
    keyFeatures: [
      'Complete CRM Solution',
      'Quotations Management',
      'Sales Target Tracking',
      'Installation Scheduling',
      'Customer Management',
      'Inventory Control',
    ],
  };

  const carouselImages = [
    { src: heroImage, alt: 'EvoShutter CRM dashboard overview' },
    { src: dashboardImage, alt: 'Main CRM dashboard interface' },
    { src: quotationsImage, alt: 'Quotations management system' },
    { src: salesTrackingImage, alt: 'Sales target tracking dashboard' },
    { src: customerManagementImage, alt: 'Customer management module' },
    { src: installationSchedulingImage, alt: 'Installation scheduling calendar' },
    { src: inventoryControlImage, alt: 'Inventory control system' },
    { src: analyticsReportsImage, alt: 'Analytics and reporting dashboard' },
  ];

  return (
    <Box>
      <Intro {...introData} />
      <Carousel title="Evoshutter landing page" images={carouselImages} mode="single" />
    </Box>
  );
}
