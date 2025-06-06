import React from 'react';
import { Box, Typography } from '@mui/material';

const ValueCard = ({ title, description }) => {
  return (
    <Box sx={{ textAlign: 'center', p: 3 }}>
      <Typography
        variant="h5"
        component="h3"
        gutterBottom
        sx={{
          color: 'text.primary',
          fontWeight: 'bold',
          mb: 2
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: 'text.secondary',
          lineHeight: 1.6
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default ValueCard;
