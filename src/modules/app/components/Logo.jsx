import techloomLogo from '@assets/images/logo.png';
import { Box } from '@mui/material';

const Logo = ({ height = 120, width = 'auto', sx = {} }) => {
  // Default to dark logo
  const logoSrc = techloomLogo;

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-block',
        ...sx,
      }}
    >
      <img
        src={logoSrc}
        alt="Techloom Logo"
        style={{
          height,
          width,
          display: 'block',
        }}
      />
      {/* Removed overlay since we now use proper dark mode logo */}
    </Box>
  );
};

export default Logo;
