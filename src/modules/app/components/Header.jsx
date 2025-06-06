import React from 'react';
import { AppBar, Box, Button, Toolbar, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeMode } from '@modules/app/hooks/useThemeMode.js';
import techloomLogo from '@assets/images/logo.png';

const Header = () => {
  const { getByMode, toggleColorMode, isDark } = useThemeMode();

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{
        bgcolor: getByMode('rgba(254, 207, 29, 0.95)', 'background.paper'),
        backdropFilter: 'blur(10px)',
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <img 
            src={techloomLogo}
            alt="Techloom Logo" 
            style={{ 
              height: 30, 
              width: 'auto',
              marginRight: 16 
            }}
          />
        </Box>
        <Button color="secondary">About</Button>
        <Button color="secondary">Services</Button>
        <Button color="secondary">Contact</Button>
        <IconButton onClick={toggleColorMode} color="inherit" sx={{ ml: 2 }}>
          {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
