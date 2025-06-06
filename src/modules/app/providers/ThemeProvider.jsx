import getTheme from '@/theme';
import { ColorModeProvider } from '@modules/app/context/ColorModeContext';
import { useThemeController } from '@modules/app/hooks/useThemeController';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';

const ThemeProvider = ({ children }) => {
  const { mode, toggleColorMode, setThemeMode } = useThemeController();
  const theme = useMemo(() => getTheme(mode), [mode]);

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode,
      setThemeMode,
    }),
    [mode, toggleColorMode, setThemeMode]
  );

  return (
    <ColorModeProvider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeProvider>
  );
};

export default ThemeProvider;
