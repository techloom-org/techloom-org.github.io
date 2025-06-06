import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { 
  RocketLaunch,
  Security,
  Speed,
  Group,
  TrendingUp,
  Code,
} from '@mui/icons-material';
import FeatureCard from './FeatureCard';

const WhyChooseTechloom = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <Code sx={{ fontSize: 40 }} />,
      title: 'Expert Developers',
      description: 'Our team of seasoned software engineers brings decades of experience from top-tier multinational companies.',
      color: theme.palette.custom.feature1
    },
    {
      icon: <Security sx={{ fontSize: 40 }} />,
      title: 'Robust Architecture',
      description: 'We build secure, scalable, and maintainable software architectures using industry best practices.',
      color: theme.palette.custom.feature2
    },
    {
      icon: <RocketLaunch sx={{ fontSize: 40 }} />,
      title: 'Modern Technologies',
      description: 'Leveraging cutting-edge frameworks and tools to deliver high-performance software solutions.',
      color: theme.palette.custom.feature3
    },
    {
      icon: <Speed sx={{ fontSize: 40 }} />,
      title: 'Agile Development',
      description: 'Fast, iterative development cycles with continuous integration and deployment practices.',
      color: theme.palette.custom.feature4
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      title: 'Scalable Code',
      description: 'Writing clean, efficient code that scales with your business growth and evolving requirements.',
      color: theme.palette.custom.feature5
    },
    {
      icon: <Group sx={{ fontSize: 40 }} />,
      title: 'Technical Leadership',
      description: 'Providing technical guidance and mentorship to help your team adopt software engineering excellence.',
      color: theme.palette.custom.feature6
    }
  ];

  return (
    <Box sx={{ py: 12, px: 2 }}>
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 800,
            color: 'text.primary',
            mb: 3
          }}
        >
          Why Choose Techloom?
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto',
            fontSize: '1.2rem',
            fontWeight: 400
          }}
        >
          We stand out because we are experts in software development, delivering world-class solutions with precision and innovation
        </Typography>
      </Box>
      
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 4 }}>
            <FeatureCard feature={feature} index={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyChooseTechloom;
