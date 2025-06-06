import { createTheme } from '@mui/material/styles';

const getTheme = (mode) =>
  createTheme({
    shape: {
      borderRadius: 15, // Default border radius for the app
    },
    palette: {
      mode,
      primary: {
        main: '#fecf1d', // Techloom yellow
        light: '#ffd966',
        dark: '#e6b800',
        contrastText: '#1a1a1a',
      },
      secondary: {
        main: mode === 'dark' ? '#ffffff' : '#424242', // Text colors
        light: mode === 'dark' ? '#f5f5f5' : '#616161',
        dark: mode === 'dark' ? '#e0e0e0' : '#212121',
        contrastText: mode === 'dark' ? '#1a1a1a' : '#ffffff',
      },
      background: {
        default: mode === 'dark' ? '#1a1a1a' : '#fefefe',
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
        feature1: '#fecf1d', // Primary yellow
        feature2: '#e6b800', // Darker yellow
        feature3: '#ffd966', // Lighter yellow
        feature4: '#f4d03f', // Golden yellow
        feature5: '#f39c12', // Orange yellow
        feature6: '#d4ac0d', // Deep golden
        gradientStart: mode === 'dark' ? 'rgba(254, 207, 29, 0.1)' : 'rgba(248, 250, 252, 0.8)',
        gradientEnd: mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.9)',
        headerBg: mode === 'dark' ? 'rgba(18, 18, 18, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        borderRadius: 4, // Consistent border radius for custom components
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
          root: ({ ownerState }) => ({
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 15, // Using consistent border radius
            padding: '14px 32px',
            fontSize: '1.1rem',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 1,
            // Shimmer effect
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              transition: 'left 0.5s ease',
              zIndex: -1,
            },
            '&:hover::before': {
              left: '100%',
            },
            // Icon animation
            '& .MuiSvgIcon-root': {
              transition: 'transform 0.3s ease',
            },
            '&:hover .MuiSvgIcon-root': {
              transform: 'translateX(4px)',
            },
            // Size variants
            ...(ownerState.size === 'large' && {
              padding: '16px 40px',
              fontSize: '1.2rem',
            }),
            ...(ownerState.size === 'small' && {
              padding: '10px 24px',
              fontSize: '0.9rem',
            }),
          }),
          // Primary contained button
          containedPrimary: ({ theme }) => ({
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
            color: theme.palette.primary.contrastText,
            fontWeight: 700,
            boxShadow: `0 4px 20px rgba(254, 207, 29, 0.3)`,
            '&:hover': {
              transform: 'translateY(-2px) scale(1.02)',
              boxShadow: `0 12px 40px rgba(254, 207, 29, 0.4)`,
              background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
            },
            '&:active': {
              transform: 'translateY(-1px) scale(1.01)',
            },
          }),
          // Primary outlined button
          outlinedPrimary: ({ theme }) => ({
            borderWidth: 2,
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
            background: 'transparent',
            fontWeight: 600,
            '&:hover': {
              borderWidth: 2,
              borderColor: theme.palette.primary.main,
              background: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              transform: 'translateY(-2px) scale(1.02)',
              boxShadow: `0 12px 40px rgba(254, 207, 29, 0.5)`,
            },
            '&:active': {
              transform: 'translateY(-1px) scale(1.01)',
            },
          }),
          // Secondary button variant
          containedSecondary: ({ theme }) => ({
            background: theme.palette.mode === 'dark' ? '#2a2a2a' : '#f8fafc',
            color: theme.palette.text.primary,
            border: `1px solid ${theme.palette.mode === 'dark' ? '#404040' : '#e2e8f0'}`,
            '&:hover': {
              transform: 'translateY(-2px) scale(1.02)',
              background: theme.palette.mode === 'dark' ? '#404040' : '#e2e8f0',
              boxShadow: `0 8px 25px rgba(0, 0, 0, 0.15)`,
            },
            '&:active': {
              transform: 'translateY(-1px) scale(1.01)',
            },
          }),
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
            borderRadius: theme.shape.borderRadius,
            border: `1px solid ${theme.palette.mode === 'dark' ? '#2a2a2a' : '#e2e8f0'}`,
          }),
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: theme.shape.borderRadius,
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
              borderRadius: theme.shape.borderRadius,
            },
          }),
        },
      },
      MuiChip: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(254, 207, 29, 0.15)' : '#fecf1d',
            color: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a',
            border: theme.palette.mode === 'dark' ? '1px solid rgba(254, 207, 29, 0.3)' : 'none',
            fontWeight: 600,
            borderRadius: theme.shape.borderRadius,
            '&:hover': {
              backgroundColor:
                theme.palette.mode === 'dark' ? 'rgba(254, 207, 29, 0.25)' : '#e6b800',
            },
          }),
        },
      },
    },
  });

export default getTheme;
