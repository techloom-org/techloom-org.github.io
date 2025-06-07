import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
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
    path: '/contact',
    component: Contact,
    meta: {
      title: 'Contact - Techloom',
      description: 'Get in touch with our team',
    },
  },
];
