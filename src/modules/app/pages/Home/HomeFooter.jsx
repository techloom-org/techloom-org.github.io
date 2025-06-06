import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const HomeFooter = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: 12,
        bgcolor: theme.palette.mode === 'dark' ? '#2a2a2a' : '#1a1a1a',
        color: theme.palette.mode === 'dark' ? '#ffffff' : '#ffffff',
        px: 2,
        borderRadius: 3,
        mx: 2,
        mb: 4,
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 800,
            mb: 3
          }}
        >
          Ready to Transform Your Ideas?
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 6,
            fontSize: '1.2rem',
            opacity: 0.8,
            maxWidth: '600px',
            mx: 'auto'
          }}
        >
          Let's discuss how we can help you achieve your technology goals and drive your business forward.
        </Typography>
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={3} 
          sx={{ justifyContent: 'center' }}
        >
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            onClick={() => navigate('/contact')}
            endIcon={<ArrowForward />}
          >
            Start Your Project
          </Button>
          <Button 
            variant="outlined" 
            color="primary"
            size="large"
            onClick={() => navigate('/services')}
          >
            View Services
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default HomeFooter;
