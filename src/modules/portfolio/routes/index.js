import Portfolio from '../pages/Portfolio';
import PortfolioDetail from '../pages/PortfolioDetail';

export const portfolioRoutes = [
  {
    path: '/portfolio',
    component: Portfolio,
    exact: true,
    meta: {
      title: 'Portfolio - Techloom',
      description: 'Explore our portfolio of successful projects',
    },
  },
  {
    path: '/portfolio/:projectId',
    component: PortfolioDetail,
    meta: {
      title: 'Project Details - Techloom',
      description: 'Detailed view of our project',
    },
  },
];
