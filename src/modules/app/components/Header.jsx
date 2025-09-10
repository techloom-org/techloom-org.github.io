import { getNavigationItems } from '@modules/app/config/navigation';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const navigationItems = getNavigationItems();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileNavClick = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const drawer = (
    <Box
      sx={{
        width: 280,
        height: '100%',
        bgcolor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Box
          onClick={() => handleMobileNavClick('/')}
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover': { opacity: 0.8 },
          }}
        >
          <Logo height={32} />
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.primary' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ flex: 1, pt: 1 }}>
        {navigationItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              onClick={() => handleMobileNavClick(item.path)}
              sx={{
                mx: 1,
                borderRadius: 2,
                mb: 0.5,
                bgcolor: isActive(item.path) ? 'action.selected' : 'transparent',
                '&:hover': {
                  bgcolor: 'action.hover',
                },
              }}
            >
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontWeight: isActive(item.path) ? 'bold' : 'medium',
                      color: 'text.primary',
                    }}
                  >
                    {item.label}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: 'transparent',
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

          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              ml: 2,
              color: 'text.primary',
              display: { xs: 'flex', md: 'none' },
              minWidth: '48px',
              minHeight: '48px',
              '&:hover': {
                bgcolor: 'action.hover',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            borderRadius: '0px 0px 0px 0px',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
