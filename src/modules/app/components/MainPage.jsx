import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useThemeMode } from '../hooks/useThemeMode';
import { useDocumentHead } from '../hooks/useDocumentHead';
import Header from './Header';
import techloomLogo from '../../../assets/images/logo.png';

const MainPage = () => {
  const { getByMode } = useThemeMode();

  // Automatically manage document head
  useDocumentHead({
    title: 'Techloom - engineering quality beyond expectations',
    description: 'Techloom delivers engineering quality beyond expectations. Your trusted technology partner for innovative solutions.',
    icon: techloomLogo,
    keywords: ['techloom', 'engineering', 'technology', 'quality', 'software development']
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          pt: 8, // Add padding top for fixed header
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Box sx={{ mb: 4 }}>
            <img 
              src={techloomLogo}
              alt="Techloom Logo" 
              style={{ 
                height: 120, 
                width: 'auto',
                marginBottom: 24 
              }}
            />
          </Box>
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              fontWeight: 'bold',
              color: getByMode('#424242', '#ffffff')
            }}
          >
            Welcome to Techloom
          </Typography>
          <Typography 
            variant="h3" 
            component="p" 
            sx={{ 
              mb: 4,
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
              color: getByMode('#666666', '#cccccc')
            }}
          >
            Engineering quality beyond expectations
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              sx={{ 
                px: 4,
                py: 1.5,
                fontSize: { xs: '1rem', sm: '1.1rem' },
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 4,
                }
              }}
            >
              Get Started
            </Button>
            <Button 
              variant="outlined" 
              color="secondary" 
              size="large"
              sx={{ 
                px: 4,
                py: 1.5,
                fontSize: { xs: '1rem', sm: '1.1rem' },
                '&:hover': {
                  transform: 'translateY(-2px)',
                  bgcolor: getByMode('rgba(254, 207, 29, 0.1)', 'rgba(254, 207, 29, 0.2)')
                }
              }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default MainPage;
