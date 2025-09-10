import getTheme from '@/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import AuroraProvider from './AuroraProvider';

const ThemeProvider = ({ children }) => {
  const theme = useMemo(() => getTheme(), []);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <AuroraProvider>{children}</AuroraProvider>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
