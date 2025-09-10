import { useTheme } from '@mui/material/styles';

/**
 * Hook to get Aurora configuration from theme
 * @returns {Object} Aurora configuration object
 */
export const useAurora = () => {
  const theme = useTheme();
  return theme.palette.custom.aurora;
};

/**
 * Hook to get Aurora colors that match the current theme
 * @returns {string[]} Array of color stops
 */
export const useAuroraColors = () => {
  const theme = useTheme();
  return theme.palette.custom.aurora.colorStops;
};
