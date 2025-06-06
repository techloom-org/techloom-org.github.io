import { createTheme } from '@mui/material/styles';

const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: mode === 'dark' ? '#fecf1d' : '#fecf1d', // Exact yellow from logo
      light: mode === 'dark' ? '#ffd966' : '#ffd966',
      dark: mode === 'dark' ? '#e6b800' : '#e6b800',
    },
    secondary: {
      main: mode === 'dark' ? '#666666' : '#424242', // Dark gray from logo
      light: mode === 'dark' ? '#999999' : '#616161',
      dark: mode === 'dark' ? '#333333' : '#212121',
    },
    background: {
      default: mode === 'dark' ? '#1a1a1a' : '#fecf1d', // Exact yellow background from logo
      paper: mode === 'dark' ? '#2a2a2a' : '#ffd966', // Slightly lighter yellow
    },
    text: {
      primary: mode === 'dark' ? '#fecf1d' : '#424242', // Dark gray text on yellow bg
      secondary: mode === 'dark' ? '#fecf1d' : '#666666',
    },
  },
  typography: {
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 400,
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '12px 24px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
        },
      },
    },
  },
});

export default getTheme;