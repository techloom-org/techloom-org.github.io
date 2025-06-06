import { createTheme } from '@mui/material/styles';

const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#fecf1d', // Techloom yellow
      light: '#ffd966',
      dark: '#e6b800',
      contrastText: mode === 'dark' ? '#1a1a1a' : '#424242',
    },
    secondary: {
      main: mode === 'dark' ? '#ffffff' : '#424242', // Text colors
      light: mode === 'dark' ? '#f5f5f5' : '#616161',
      dark: mode === 'dark' ? '#e0e0e0' : '#212121',
      contrastText: mode === 'dark' ? '#1a1a1a' : '#ffffff',
    },
    background: {
      default: mode === 'dark' ? '#1a1a1a' : '#fecf1d',
      paper: mode === 'dark' ? '#2a2a2a' : '#ffffff',
      contrast: mode === 'dark' ? '#0a0a0a' : '#f8fafc',
    },
    text: {
      primary: mode === 'dark' ? '#ffffff' : '#424242',
      secondary: mode === 'dark' ? '#cccccc' : '#666666',
      disabled: mode === 'dark' ? '#888888' : '#999999',
    },
    action: {
      hover: mode === 'dark' ? 'rgba(254, 207, 29, 0.1)' : 'rgba(255, 255, 255, 0.1)',
      selected: mode === 'dark' ? 'rgba(254, 207, 29, 0.2)' : 'rgba(255, 255, 255, 0.2)',
      focus: mode === 'dark' ? 'rgba(254, 207, 29, 0.3)' : 'rgba(255, 255, 255, 0.3)',
    },
    // Custom colors for features
    custom: {
      feature1: '#ff6b35',
      feature2: '#4ecdc4', 
      feature3: '#45b7d1',
      feature4: '#96ceb4',
      feature5: '#feca57',
      feature6: '#ff9ff3',
      gradientStart: mode === 'dark' ? 'rgba(254, 207, 29, 0.1)' : 'rgba(254, 207, 29, 0.05)',
      gradientEnd: mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
      headerBg: mode === 'dark' ? 'rgba(18, 18, 18, 0.95)' : 'rgba(254, 207, 29, 0.95)',
    }
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
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.spacing(2),
          border: `1px solid ${theme.palette.mode === 'dark' ? '#2a2a2a' : '#e2e8f0'}`,
        }),
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 1200px)': {
            maxWidth: '1200px',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiOutlinedInput-root': {
            backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#ffffff',
          },
        }),
      },
    },
  },
});

export default getTheme;