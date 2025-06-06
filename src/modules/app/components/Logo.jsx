import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import techloomLogo from '@assets/images/logo.png';
import techloomLogoDark from '@assets/images/logo_dark.png';

const Logo = ({ 
  height = 120, 
  width = 'auto', 
  sx = {} 
}) => {
  const theme = useTheme();
  
  // Use appropriate logo based on theme mode
  const logoSrc = theme.palette.mode === 'dark' ? techloomLogoDark : techloomLogo;

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-block',
        ...sx
      }}
    >
      <img 
        src={logoSrc}
        alt="Techloom Logo" 
        style={{ 
          height, 
          width,
          display: 'block'
        }}
      />
      {/* Removed overlay since we now use proper dark mode logo */}
    </Box>
  );
};

export default Logo;
