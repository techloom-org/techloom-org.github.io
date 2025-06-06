import { createContext, useContext } from 'react';

/**
 * Context for managing color mode (theme) throughout the application
 * Provides mode state and functions to toggle/set theme mode
 */
export const ColorModeContext = createContext({
  mode: 'dark',
  toggleColorMode: () => {},
  setThemeMode: () => {},
});

/**
 * Hook to access color mode context
 * @returns {Object} Color mode context value
 */
export function useColorMode() {
  const context = useContext(ColorModeContext);

  if (!context) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }

  return context;
}

/**
 * Provider component for color mode context
 */
export function ColorModeProvider({ children, value }) {
  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>;
}
