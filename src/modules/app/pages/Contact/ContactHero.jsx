import React from 'react';
import { Box, Typography } from '@mui/material';

const ContactHero = () => {
  return (
    <Box
      sx={{
        py: 12,
        px: 2,
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        align="center"
        gutterBottom
        sx={{
          fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
          fontWeight: 'bold',
          color: 'text.primary',
          mb: 4
        }}
      >
        Contact Us
      </Typography>
      
      <Typography
        variant="h4"
        component="p"
        align="center"
        sx={{
          fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
          color: 'text.secondary',
          maxWidth: '600px',
          mx: 'auto',
          lineHeight: 1.6
        }}
      >
        Ready to start your next project? Let's discuss how we can bring your vision to life.
      </Typography>
    </Box>
  );
};

export default ContactHero;
