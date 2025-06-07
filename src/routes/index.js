import { appRoutes } from '@modules/app/routes';
import { portfolioRoutes } from '@modules/portfolio/routes';

// Central route registry that collects all module routes
export const getAllRoutes = () => {
  return [
    ...appRoutes,
    ...portfolioRoutes,
    // Future modules can easily be added here:
    // ...blogRoutes,
    // ...dashboardRoutes,
    // ...authRoutes,
  ];
};

// Helper function to get routes with specific metadata
export const getRoutesByMeta = (metaKey, metaValue) => {
  return getAllRoutes().filter((route) => route.meta && route.meta[metaKey] === metaValue);
};

// Helper function to find route by path
export const getRouteByPath = (path) => {
  return getAllRoutes().find((route) => route.path === path);
};
