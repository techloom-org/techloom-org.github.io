import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Chip, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: { xs: '75vh', sm: '80vh', md: '90vh', lg: '100vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Box sx={{ py: { xs: 2, sm: 4, md: 6, lg: 8 }, px: { xs: 2, sm: 2 }, width: '100%' }}>
        <Grid container spacing={{ xs: 2, sm: 4, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
              <Chip
                label="🚀 New Technology Startup"
                sx={{
                  mb: { xs: 1.5, sm: 2, md: 3 },
                  px: { xs: 2, sm: 2 },
                  py: { xs: 0.8, sm: 1 },
                  fontSize: { xs: '0.9rem', sm: '0.875rem' },
                }}
              />

              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '3rem', sm: '3rem', md: '3.5rem', lg: '4.5rem' },
                  fontWeight: 800,
                  lineHeight: { xs: 1.1, sm: 1.1 },
                  mb: { xs: 1.5, sm: 2, md: 3 },
                  color: 'text.primary',
                }}
              >
                Engineering Quality{' '}
                <Box
                  component="span"
                  sx={{
                    color: 'primary.main',
                  }}
                >
                  Beyond Expectations
                </Box>
              </Typography>

              <Typography
                variant="h5"
                component="p"
                sx={{
                  mb: { xs: 3, sm: 4, md: 5, lg: 6 },
                  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem', lg: '1.4rem' },
                  color: 'text.secondary',
                  lineHeight: 1.5,
                  fontWeight: 400,
                  maxWidth: { xs: '100%', sm: '600px' },
                  mx: { xs: 'auto', lg: 0 },
                  px: { xs: 0, sm: 0 },
                }}
              >
                Powered by a team of world-class experts from multinational companies. We bring
                decades of global experience to deliver exceptional software solutions that set new
                standards of excellence.
              </Typography>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1.5, sm: 3 }}
                sx={{
                  justifyContent: { xs: 'center', lg: 'flex-start' },
                  width: '100%',
                  overflow: 'visible',
                  position: 'relative',
                  zIndex: 10,
                  px: { xs: 0, sm: 0 },
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => {
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
            <Box
              sx={{
                display: { xs: 'none', lg: 'block' },
                position: 'relative',
                height: '100%',
                minHeight: 500,
              }}
            >
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
                  maskImage:
                    'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage:
                    'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0) 100%)',
                  transform: 'scale(1.1)',
                  transformOrigin: 'right center',
                  pointerEvents: 'none',
                }}
              />

              {/* Optional overlay pattern */}
              <Box
                sx={{
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
                  pointerEvents: 'none',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
