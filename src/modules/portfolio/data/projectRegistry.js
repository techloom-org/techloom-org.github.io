// Project registry - maps project IDs to their components and metadata
import Dawwa from '../projects/Dawwa';
import EvoShutter from '../projects/Evoshutter';
import LandingPages from '../projects/LandingPages';
import TupperwareStoreProject from '../projects/TupperwareStore';

// Import Tupperware thumbnail image
import tupperwareThumbnail from '../../../assets/images/portfolio/tupperware/hero-1-main-interface.png';

// Placeholder thumbnail for projects without specific images
const createPlaceholderUrl = (title) =>
  `https://via.placeholder.com/640x360/4A90E2/FFFFFF?text=${encodeURIComponent(title)}`;

export const projectRegistry = {
  'tupperware-store': {
    component: TupperwareStoreProject,
    metadata: {
      title: 'Tupperware Store',
      description: 'Premier marketplace for Tupperware franchisees in Egypt',
      thumbnail: tupperwareThumbnail,
      category: 'Mobile App',
      technologies: ['Native Android', 'Firebase', 'WhatsApp Integration', 'Admin Panel'],
      featured: true,
      date: '2024-12-01',
      status: 'completed',
    },
  },
  dawwa: {
    component: Dawwa,
    metadata: {
      title: 'Dawwa',
      description: 'Pharmaceuticals e-commerce marketplace for pharmacies',
      thumbnail: createPlaceholderUrl('Dawwa Platform'),
      category: 'Web Development',
      technologies: ['React', 'Firebase', 'Material-UI'],
      featured: true,
      date: '2024-11-15',
      status: 'completed',
    },
  },
  evoshutter: {
    component: EvoShutter,
    metadata: {
      title: 'EvoShutter',
      description: 'Smart shutter control system',
      thumbnail: createPlaceholderUrl('EvoShutter IoT'),
      category: 'IoT/Hardware',
      technologies: ['React', 'IoT', 'Arduino', 'WebSockets'],
      featured: true,
      date: '2024-10-20',
      status: 'completed',
    },
  },
  'landing-pages': {
    component: LandingPages,
    metadata: {
      title: 'Landing Pages Collection',
      description: 'Custom landing page designs and implementations',
      thumbnail: createPlaceholderUrl('Landing Pages'),
      category: 'Web Design',
      technologies: ['React', 'Material-UI', 'Responsive Design'],
      featured: false,
      date: '2024-09-10',
      status: 'completed',
    },
  },
};

// Helper function to get all projects
export const getAllProjects = () => {
  return Object.entries(projectRegistry).map(([id, project]) => ({
    id,
    ...project.metadata,
  }));
};

// Helper function to get featured projects
export const getFeaturedProjects = () => {
  return getAllProjects().filter((project) => project.featured);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category) => {
  return getAllProjects().filter((project) => project.category === category);
};
