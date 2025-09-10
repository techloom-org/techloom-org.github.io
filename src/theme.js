import { createTheme } from '@mui/material/styles';

const getTheme = () =>
  createTheme({
    shape: {
      borderRadius: 15,
    },
    palette: {
      mode: 'dark',
      primary: {
        main: '#fecf1d',
        light: '#ffd966',
        dark: '#e6b800',
        contrastText: '#1a1a1a',
      },
      secondary: {
        main: '#ffffff',
        light: '#f5f5f5',
        dark: '#e0e0e0',
        contrastText: '#1a1a1a',
      },
      background: {
        default: '#1a1a1a',
        paper: '#2a2a2a',
        contrast: '#0a0a0a',
      },
      text: {
        primary: '#ffffff',
        secondary: '#cccccc',
        disabled: '#888888',
      },
      action: {
        hover: 'rgba(254, 207, 29, 0.1)',
        selected: 'rgba(254, 207, 29, 0.2)',
        focus: 'rgba(254, 207, 29, 0.3)',
      },

      custom: {
        feature1: '#fecf1d',
        feature2: '#e6b800',
        feature3: '#ffd966',
        feature4: '#f4d03f',
        feature5: '#f39c12',
        feature6: '#d4ac0d',
        gradientStart: 'rgba(254, 207, 29, 0.1)',
        gradientEnd: 'rgba(255, 255, 255, 0.05)',
        headerBg: 'rgba(18, 18, 18, 0.95)',
        borderRadius: 4,
        // Aurora background configuration
        aurora: {
          colorStops: ['#1a1a1a', '#fecf1d', '#2a2a2a'],
          blend: 0.3,
          amplitude: 0.8,
          speed: 0.6,
        },
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
            borderRadius: 15,
            padding: '14px 32px',
            fontSize: '1.1rem',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 1,

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

            '& .MuiSvgIcon-root': {
              transition: 'transform 0.3s ease',
            },
            '&:hover .MuiSvgIcon-root': {
              transform: 'translateX(4px)',
            },

            ...(ownerState.size === 'large' && {
              padding: '16px 40px',
              fontSize: '1.2rem',
            }),
            ...(ownerState.size === 'small' && {
              padding: '10px 24px',
              fontSize: '0.9rem',
            }),
          }),

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

          containedSecondary: ({ theme }) => ({
            background: '#2a2a2a',
            color: theme.palette.text.primary,
            border: `1px solid #404040`,
            '&:hover': {
              transform: 'translateY(-2px) scale(1.02)',
              background: '#404040',
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
            border: `1px solid rgba(254, 207, 29, 0.2)`,
            background: `linear-gradient(135deg, rgba(254, 207, 29, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%) !important`,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
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
              backgroundColor: '#1e1e1e',
              borderRadius: theme.shape.borderRadius,
            },
          }),
        },
      },
      MuiChip: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: 'rgba(254, 207, 29, 0.15)',
            color: '#ffffff',
            border: '1px solid rgba(254, 207, 29, 0.3)',
            fontWeight: 600,
            borderRadius: theme.shape.borderRadius,
            '&:hover': {
              backgroundColor: 'rgba(254, 207, 29, 0.25)',
            },
          }),
        },
      },
    },
  });

export default getTheme;
