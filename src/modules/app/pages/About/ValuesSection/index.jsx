import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import ValueCard from './ValueCard';

const ValuesSection = () => {
  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in every line of code, every design decision, and every client interaction.'
    },
    {
      title: 'Innovation',
      description: 'We embrace new technologies and approaches, constantly pushing boundaries to deliver cutting-edge solutions.'
    },
    {
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and delivering on our promises consistently.'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork, both within our team and in partnership with our clients.'
    }
  ];

  return (
    <Box
      sx={{
        py: 12,
        px: 2,
      }}
    >
      <Box>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 'bold',
            color: 'text.primary',
            mb: 6
          }}
        >
          Our Values
        </Typography>
        
        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <ValueCard 
                title={value.title}
                description={value.description}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ValuesSection;
