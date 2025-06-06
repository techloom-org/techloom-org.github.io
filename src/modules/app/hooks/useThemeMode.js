import { useTheme } from '@mui/material/styles';
import { useColorMode } from '../context/ColorModeContext';

const useThemeMode = () => {
  const theme = useTheme();
  const { mode, toggleColorMode } = useColorMode();
  
  const isDark = mode === 'dark';
  const isLight = mode === 'light';
  
  // Helper function to get conditional values based on theme mode
  const getByMode = (lightValue, darkValue) => {
    return isDark ? darkValue : lightValue;
  };
  
  return {
    mode,
    isDark,
    isLight,
    toggleColorMode,
    theme,
    getByMode
  };
};

export { useThemeMode };
export default useThemeMode;
