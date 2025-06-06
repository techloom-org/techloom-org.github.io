import { useColorMode } from '@modules/app/context/ColorModeContext';
import { useTheme } from '@mui/material/styles';
import { useCallback, useEffect, useState } from 'react';

/**
 * Helper function to get initial theme mode based on priority:
 * 1. localStorage saved theme
 * 2. User's system preference
 * 3. Default to dark theme
 */
const getInitialThemeMode = () => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return 'dark';
  }

  // 1. Check localStorage first
  try {
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode && (savedMode === 'light' || savedMode === 'dark')) {
      return savedMode;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('Failed to read theme from localStorage:', error);
  }

  // 2. Check user's system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }

  // 3. Default to dark theme
  return 'dark';
};

/**
 * Unified theme controller hook that manages theme state and provides utilities
 * Combines theme controller logic with theme mode utilities
 */
export const useThemeController = () => {
  const [mode, setMode] = useState(getInitialThemeMode);

  // Save theme mode to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('themeMode', mode);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Failed to save theme to localStorage:', error);
    }
  }, [mode]);

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e) => {
      // Only update if no theme is saved in localStorage
      const savedMode = localStorage.getItem('themeMode');
      if (!savedMode) {
        setMode(e.matches ? 'dark' : 'light');
      }
    };

    // Use addEventListener instead of deprecated addListener
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleColorMode = useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  const setThemeMode = useCallback((newMode) => {
    if (newMode === 'light' || newMode === 'dark') {
      setMode(newMode);
    }
  }, []);

  return {
    mode,
    toggleColorMode,
    setThemeMode,
    isDark: mode === 'dark',
    isLight: mode === 'light',
  };
};

/**
 * Enhanced theme mode hook that provides theme utilities
 * and convenient helpers for conditional styling
 * This hook should be used in components that need theme access
 */
export const useThemeMode = () => {
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
