// Project registry - maps project IDs to their components and metadata
import Dawwa from '../projects/Dawwa';
import EvoShutter from '../projects/Evoshutter';
import LandingPages from '../projects/LandingPages';
import TupperwareStoreProject from '../projects/TupperwareStore';

// Import Tupperware thumbnail image
import tupperwareThumbnail from '../../../assets/images/portfolio/tupperware/hero-1-main-interface.png';

// Import Dawwa thumbnail images
import dawwaWebsite from '../../../assets/images/portfolio/dawwa/website.png';
import dawwaWebsiteDark from '../../../assets/images/portfolio/dawwa/website_dark.png';

// Import Landing Pages thumbnail image
import landingPagesHero from '../../../assets/images/portfolio/landing-pages/hero-section.png';

// Import EvoShutter thumbnail image
import evoshutterHero from '../../../assets/images/portfolio/evoshutter/hero.png';

export const projectRegistry = {
  'tupperware-store': {
    component: TupperwareStoreProject,
    metadata: {
      title: 'Tupperware Store',
      description: 'Premier marketplace for Tupperware franchisees in Egypt',
      thumbnail: tupperwareThumbnail,
      technologies: ['Native Android', 'Firebase', 'WhatsApp Integration', 'Admin Panel'],
      featured: true,
      date: '2019-12-01',
      status: 'completed',
    },
  },
  dawwa: {
    component: Dawwa,
    metadata: {
      title: 'Dawwa',
      description: 'Pharmaceuticals e-commerce marketplace for pharmacies',
      thumbnail: dawwaWebsite,
      thumbnailDark: dawwaWebsiteDark, // Add dark mode thumbnail
      technologies: ['React Native', 'React.js', 'Firebase', 'Material-UI', 'Algolia'],
      featured: true,
      date: '2023-11-15',
      status: 'completed',
    },
  },
  evoshutter: {
    component: EvoShutter,
    metadata: {
      title: 'EvoShutter CRM System',
      description:
        'Comprehensive CRM system for EvoShutter rolling shutter company handling quotations, sales targets, and installation scheduling',
      thumbnail: evoshutterHero,
      technologies: ['React.js', 'Node.js', 'Cloud Functions', 'Material-UI', 'Firebase'],
      featured: true,
      date: '2024-10-20',
      status: 'completed',
    },
  },
  'landing-pages': {
    component: LandingPages,
    metadata: {
      title: 'Landing Pages Collection',
      description: 'Professional law firm website featuring Attorney Ahmed B. Ismail',
      thumbnail: landingPagesHero,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'Responsive Design'],
      featured: true,
      date: '2022-09-10',
      status: 'completed',
    },
  },
};

// Helper function to get all projects
export const getAllProjects = () => {
  return Object.entries(projectRegistry)
    .map(([id, project]) => ({
      id,
      ...project.metadata,
    }))
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date descending (newest first)
};

// Helper function to get featured projects
export const getFeaturedProjects = () => {
  return getAllProjects().filter((project) => project.featured);
};
