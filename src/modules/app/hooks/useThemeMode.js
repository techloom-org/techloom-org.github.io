import { useColorMode } from '@modules/app/context/ColorModeContext';
import { useTheme } from '@mui/material/styles';

/**
 * Enhanced theme mode hook that provides theme utilities
 * and convenient helpers for conditional styling
 */
const useThemeMode = () => {
  const theme = useTheme();
  const { mode, toggleColorMode, setThemeMode } = useColorMode();

  const isDark = mode === 'dark';
  const isLight = mode === 'light';

  // Helper function to get conditional values based on theme mode
  const getByMode = (lightValue, darkValue) => {
    return isDark ? darkValue : lightValue;
  };

  // Helper function to get theme-aware colors
  const getThemeColor = (colorPath) => {
    const paths = colorPath.split('.');
    let color = theme.palette;

    for (const path of paths) {
      color = color?.[path];
      if (!color) {
        break;
      }
    }

    return color;
  };

  return {
    mode,
    isDark,
    isLight,
    toggleColorMode,
    setThemeMode,
    theme,
    getByMode,
    getThemeColor,
  };
};

export { useThemeMode };
export default useThemeMode;
