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
        {/* Extended Background that flows behind content */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -5,
            display: { xs: 'none', lg: 'block' },
            borderRadius: { lg: '2rem' },
            overflow: 'hidden',
          }}
        >
          {/* Main Background Image */}
          <Box
            component="img"
            src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Modern software development workspace"
            sx={{
              position: 'absolute',
              top: '-10%',
              right: '-15%',
              width: '115%',
              height: '120%',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: 0.18,
              borderRadius: { lg: '2rem' },
              maskImage:
                'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.15) 80%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage:
                'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.15) 80%, rgba(0,0,0,0) 100%)',
              animation: 'subtleFloat 8s ease-in-out infinite',
              '@keyframes subtleFloat': {
                '0%, 100%': { transform: 'translateY(0px) scale(1.03)' },
                '50%': { transform: 'translateY(-12px) scale(1.03)' },
              },
            }}
          />

          {/* Integrated Gradient Overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: { lg: '2rem' },
              background: `
                radial-gradient(ellipse at 70% 50%,
                  ${theme.palette.primary.main}15 0%,
                  ${theme.palette.primary.main}10 25%,
                  ${theme.palette.primary.main}06 50%,
                  transparent 75%
                ),
                linear-gradient(120deg,
                  transparent 0%,
                  ${theme.palette.primary.main}08 30%,
                  ${theme.palette.secondary.main}12 65%,
                  ${theme.palette.primary.main}15 100%
                )
              `,
              animation: 'integratedGlow 10s ease-in-out infinite',
              '@keyframes integratedGlow': {
                '0%, 100%': { opacity: 0.9 },
                '50%': { opacity: 1 },
              },
            }}
          />

          {/* Tech Pattern Overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '55%',
              height: '100%',
              borderRadius: { lg: '0 2rem 2rem 0' },
              background: `
                repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 3px,
                  ${theme.palette.primary.main}03 3px,
                  ${theme.palette.primary.main}03 6px
                )
              `,
              opacity: 0.7,
              animation: 'patternShift 20s linear infinite',
              '@keyframes patternShift': {
                '0%': { transform: 'translateX(0px)' },
                '100%': { transform: 'translateX(30px)' },
              },
            }}
          />

          {/* Floating Tech Elements */}
          {[1, 2, 3, 4].map((index) => (
            <Box
              key={`tech-${index}`}
              sx={{
                position: 'absolute',
                width: { lg: '10px' },
                height: { lg: '10px' },
                background: theme.palette.primary.main,
                borderRadius: '2px',
                top: `${30 + index * 18}%`,
                right: `${12 + index * 12}%`,
                opacity: 0.5,
                animation: `techFloat${index} ${5 + index}s ease-in-out infinite`,
                '@keyframes techFloat1, @keyframes techFloat2, @keyframes techFloat3, @keyframes techFloat4':
                  {
                    '0%, 100%': {
                      transform: 'translateY(0px) rotate(0deg)',
                      opacity: 0.5,
                    },
                    '50%': {
                      transform: `translateY(-${6 + index * 2}px) rotate(45deg)`,
                      opacity: 0.9,
                    },
                  },
              }}
            />
          ))}

          {/* Border Highlight */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: { lg: '2rem' },
              pointerEvents: 'none',
            }}
          />
        </Box>

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
              {/* Decorative Tech Grid */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '15%',
                  right: '8%',
                  width: '280px',
                  height: '280px',
                  background: `
                    linear-gradient(90deg, ${theme.palette.primary.main}12 1px, transparent 1px),
                    linear-gradient(180deg, ${theme.palette.primary.main}12 1px, transparent 1px)
                  `,
                  backgroundSize: '18px 18px',
                  borderRadius: '50%',
                  opacity: 0.7,
                  animation: 'gridRotate 25s linear infinite',
                  '@keyframes gridRotate': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                  },
                }}
              />

              {/* Floating Circles Behind Logo */}
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <Box
                  key={`circle-${index}`}
                  sx={{
                    position: 'absolute',
                    width: `${15 + index * 8}px`,
                    height: `${15 + index * 8}px`,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}${index % 2 === 0 ? '20' : '15'}, ${theme.palette.secondary.main}${index % 2 === 0 ? '15' : '20'})`,
                    borderRadius: '50%',
                    top: `${20 + index * 12}%`,
                    left: `${10 + index * 15}%`,
                    animation: `circleFloat${index} ${4 + index * 0.8}s ease-in-out infinite`,
                    backdropFilter: 'blur(2px)',
                    zIndex: 1,
                    '@keyframes circleFloat1, @keyframes circleFloat2, @keyframes circleFloat3, @keyframes circleFloat4, @keyframes circleFloat5, @keyframes circleFloat6':
                      {
                        '0%, 100%': {
                          transform: `translateY(0px) translateX(0px) scale(${0.8 + index * 0.05})`,
                          opacity: 0.6,
                        },
                        '33%': {
                          transform: `translateY(-${8 + index * 2}px) translateX(${4 + index}px) scale(${0.85 + index * 0.05})`,
                          opacity: 0.8,
                        },
                        '66%': {
                          transform: `translateY(${4 + index}px) translateX(-${6 + index}px) scale(${0.9 + index * 0.05})`,
                          opacity: 0.9,
                        },
                      },
                  }}
                />
              ))}

              {/* Floating Squares Behind Logo */}
              {[1, 2, 3, 4].map((index) => (
                <Box
                  key={`square-${index}`}
                  sx={{
                    position: 'absolute',
                    width: `${12 + index * 6}px`,
                    height: `${12 + index * 6}px`,
                    background: `linear-gradient(45deg, ${theme.palette.secondary.main}${index % 2 === 0 ? '18' : '12'}, ${theme.palette.primary.main}${index % 2 === 0 ? '12' : '18'})`,
                    borderRadius: '4px',
                    top: `${60 + index * 8}%`,
                    right: `${8 + index * 12}%`,
                    animation: `squareFloat${index} ${5 + index * 0.6}s ease-in-out infinite`,
                    backdropFilter: 'blur(1px)',
                    zIndex: 1,
                    '@keyframes squareFloat1, @keyframes squareFloat2, @keyframes squareFloat3, @keyframes squareFloat4':
                      {
                        '0%, 100%': {
                          transform: `translateY(0px) rotate(0deg) scale(${0.7 + index * 0.08})`,
                          opacity: 0.5,
                        },
                        '50%': {
                          transform: `translateY(-${10 + index * 3}px) rotate(${15 + index * 10}deg) scale(${0.8 + index * 0.08})`,
                          opacity: 0.8,
                        },
                      },
                  }}
                />
              ))}

              {/* Clean Logo Without Background */}
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
