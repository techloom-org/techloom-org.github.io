import ProjectRedirect from '../components/ProjectRedirect';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import PortfolioDetail from '../pages/Portfolio/PortfolioDetail';
import Services from '../pages/Services';

export const appRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
    meta: {
      title: 'Home - Techloom',
      description: 'Engineering Quality Beyond Expectations',
    },
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: 'About - Techloom',
      description: 'Learn about our mission, vision, and team',
    },
  },
  {
    path: '/services',
    component: Services,
    meta: {
      title: 'Services - Techloom',
      description: 'Discover our software development services',
    },
  },
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
    path: '/portfolio/shutterflow',
    component: () => (
      <ProjectRedirect from="/portfolio/shutterflow" to="/portfolio/qVVTrcgS6yYJI1wJSo7X" />
    ),
    meta: {
      title: 'Shutterflow - Techloom Portfolio',
      description: 'Shutterflow project details - Custom software development by Techloom',
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
  {
    path: '/contact',
    component: Contact,
    meta: {
      title: 'Contact - Techloom',
      description: 'Get in touch with our team',
    },
  },
];
