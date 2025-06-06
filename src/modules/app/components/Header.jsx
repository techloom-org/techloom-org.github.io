import { useThemeMode } from '@modules/app/hooks/useThemeMode.js';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  const { toggleColorMode, isDark } = useThemeMode();
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: theme.palette.custom.headerBg,
        backdropFilter: 'blur(10px)',
        minHeight: '80px',
      }}
    >
      <Toolbar
        sx={{
          minHeight: '80px !important',
          px: { xs: 2, sm: 3, md: 4 },
          py: 1.5,
        }}
      >
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Box
            onClick={() => navigate('/')}
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': { opacity: 0.8 },
            }}
          >
            <Logo height={40} />
          </Box>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {navigationItems.map((item) => (
            <Button
              key={item.path}
              onClick={() => navigate(item.path)}
              sx={{
                color: 'text.primary',
                fontWeight: isActive(item.path) ? 'bold' : 'medium',
                bgcolor: isActive(item.path) ? 'action.selected' : 'transparent',
                '&:hover': {
                  bgcolor: 'action.hover',
                },
                borderRadius: 2,
                px: 3,
                py: 1.5,
                minHeight: '44px',
                fontSize: '0.95rem',
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <IconButton
          onClick={toggleColorMode}
          sx={{
            ml: 3,
            color: 'text.primary',
            minWidth: '48px',
            minHeight: '48px',
            '&:hover': {
              bgcolor: 'action.hover',
            },
          }}
        >
          {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
