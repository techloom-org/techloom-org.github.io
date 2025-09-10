import { appRoutes } from '@modules/app/routes';

// Central route registry that collects all module routes
export const getAllRoutes = () => {
  return [...appRoutes];
};

// Helper function to get routes with specific metadata
export const getRoutesByMeta = (metaKey, metaValue) => {
  return getAllRoutes().filter((route) => route.meta && route.meta[metaKey] === metaValue);
};

// Helper function to find route by path
export const getRouteByPath = (path) => {
  return getAllRoutes().find((route) => route.path === path);
};
