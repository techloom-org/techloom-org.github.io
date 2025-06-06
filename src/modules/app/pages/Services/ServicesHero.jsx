import { Box, Typography } from '@mui/material';

const ServicesHero = () => {
  return (
    <Box
      sx={{
        py: 12,
        px: 2,
      }}
    >
      <Box>
        <Typography
          variant="h1"
          component="h1"
          align="center"
          gutterBottom
          sx={{
            fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
            fontWeight: 'bold',
            color: 'text.primary',
            mb: 4,
          }}
        >
          Our Services
        </Typography>

        <Typography
          variant="h4"
          component="p"
          align="center"
          sx={{
            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
            color: 'text.secondary',
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.6,
            mb: 6,
          }}
        >
          Comprehensive technology solutions designed to accelerate your business growth and digital
          transformation.
        </Typography>
      </Box>
    </Box>
  );
};

export default ServicesHero;
