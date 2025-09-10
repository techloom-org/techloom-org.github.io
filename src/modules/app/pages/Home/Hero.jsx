import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Chip, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo';

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
      <Box
        sx={{
          py: { xs: 2, sm: 4, md: 6, lg: 8 },
          px: { xs: 2, sm: 2 },
          width: '100%',
          position: 'relative',
        }}
      >
        <Grid container spacing={{ xs: 2, sm: 4, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box
              sx={{
                textAlign: { xs: 'center', lg: 'left' },
                position: 'relative',
                zIndex: 2,
              }}
            >
              <Chip
                label="🚀 New Technology Startup"
                sx={{
                  mb: { xs: 1.5, sm: 2, md: 3 },
                  px: { xs: 2, sm: 2 },
                  py: { xs: 0.8, sm: 1 },
                  fontSize: { xs: '0.9rem', sm: '0.875rem' },
                  backdropFilter: 'blur(10px)',
                  background: `${theme.palette.background.paper}95`,
                  border: `1px solid ${theme.palette.primary.main}20`,
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
                  textShadow: `0 2px 20px ${theme.palette.background.default}80`,
                }}
              >
                Engineering Quality{' '}
                <Box
                  component="span"
                  sx={{
                    color: 'primary.main',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      borderRadius: '2px',
                      animation: 'textGlow 2s ease-in-out infinite',
                      '@keyframes textGlow': {
                        '0%, 100%': { opacity: 0.6, transform: 'scaleX(1)' },
                        '50%': { opacity: 1, transform: 'scaleX(1.05)' },
                      },
                    },
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
                  textShadow: `0 1px 10px ${theme.palette.background.default}60`,
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
                  sx={{
                    boxShadow: `0 8px 32px ${theme.palette.primary.main}40`,
                    '&:hover': {
                      boxShadow: `0 12px 40px ${theme.palette.primary.main}60`,
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
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
                  sx={{
                    backdropFilter: 'blur(10px)',
                    background: `${theme.palette.background.paper}10`,
                  }}
                >
                  Get Started
                </Button>
              </Stack>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, lg: 6 }}>
            <Box
              sx={{
                display: { xs: 'none', lg: 'flex' },
                position: 'relative',
                height: '100%',
                minHeight: 500,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 5,
                  animation: 'logoFloat 4s ease-in-out infinite',
                  '@keyframes logoFloat': {
                    '0%, 100%': {
                      transform: 'scale(1) translateY(0px)',
                    },
                    '50%': {
                      transform: 'scale(1.03) translateY(-8px)',
                    },
                  },
                }}
              >
                <Logo
                  height={180}
                  sx={{
                    filter: `drop-shadow(0 6px 24px ${theme.palette.primary.main}40) drop-shadow(0 2px 8px ${theme.palette.background.default}60)`,
                    transition: 'all 0.3s ease',
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
