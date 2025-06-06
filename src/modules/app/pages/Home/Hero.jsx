import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Chip,
  Stack,
  Grid,
  Paper
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Logo from '@modules/app/components/Logo';

const Hero = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Box sx={{ py: 12, px: 2, width: '100%' }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
              <Chip
                label="🚀 New Technology Startup"
                sx={{
                  mb: 3,
                  px: 2,
                  py: 1
                }}
              />
              
              <Typography 
                variant="h1" 
                component="h1" 
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem', lg: '4.5rem' },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  mb: 3,
                  color: 'text.primary'
                }}
              >
                Engineering Quality{' '}
                <Box component="span" sx={{ 
                  color: 'primary.main',
                }}>
                  Beyond Expectations
                </Box>
              </Typography>
              
              <Typography 
                variant="h5" 
                component="p" 
                sx={{ 
                  mb: 6,
                  fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.4rem' },
                  color: 'text.secondary',
                  lineHeight: 1.6,
                  fontWeight: 400,
                  maxWidth: '600px',
                  mx: { xs: 'auto', lg: 0 }
                }}
              >
                Powered by a team of world-class experts from multinational companies. 
                We bring decades of global experience to deliver exceptional software solutions 
                that set new standards of excellence.
              </Typography>
              
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={3} 
                sx={{ 
                  justifyContent: { xs: 'center', lg: 'flex-start' },
                  width: '100%',
                  overflow: 'visible',
                  position: 'relative',
                  zIndex: 10
                }}
              >
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={() => {
                    console.log('Explore Services button clicked');
                    navigate('/services');
                  }}
                  endIcon={<ArrowForward />}
                >
                  Explore Services
                </Button>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  onClick={() => {
                    console.log('Get Started button clicked');
                    navigate('/contact');
                  }}
                  endIcon={<ArrowForward />}
                >
                  Get Started
                </Button>
              </Stack>
            </Box>
          </Grid>
          
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ 
              display: { xs: 'none', lg: 'block' },
              position: 'relative',
              height: '100%',
              minHeight: 500
            }}>
              {/* Background Image with Fade Effect */}
              <Box
                component="img"
                src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Lines of code"
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '150%',
                  height: '120%',
                  objectFit: 'cover',
                  objectPosition: 'center left',
                  borderRadius: { lg: '0 2rem 2rem 0' },
                  opacity: 0.18,
                  zIndex: -1,
                  maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0) 100%)',
                  transform: 'scale(1.1)',
                  transformOrigin: 'right center',
                  pointerEvents: 'none'
                }}
              />
              
              {/* Optional overlay pattern */}
              <Box sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100%',
                height: '100%',
                background: `radial-gradient(ellipse at center right, 
                  ${theme.palette.primary.main}08 0%, 
                  ${theme.palette.primary.main}04 40%, 
                  transparent 70%)`,
                zIndex: -1,
                borderRadius: { lg: '0 2rem 2rem 0' },
                pointerEvents: 'none'
              }} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
