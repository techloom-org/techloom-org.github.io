import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Card, 
  CardContent,
  Chip,
  Stack,
  Grid,
  Paper,
  Avatar
} from '@mui/material';
import { 
  RocketLaunch,
  Security,
  Speed,
  Group,
  TrendingUp,
  Code,
  ArrowForward,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useDocumentHead } from '@modules/app/hooks/useDocumentHead';
import { useNavigate } from 'react-router-dom';
import techloomLogo from '@assets/images/logo.png';

const HomePage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // Automatically manage document head
  useDocumentHead({
    title: 'Techloom - Engineering Quality Beyond Expectations',
    description: 'Techloom delivers engineering quality beyond expectations. Your trusted technology partner for innovative solutions.',
    icon: techloomLogo,
    keywords: ['techloom', 'engineering', 'technology', 'quality', 'software development', 'startup']
  });

  const features = [
    {
      icon: <RocketLaunch sx={{ fontSize: 40 }} />,
      title: 'Innovation First',
      description: 'Leveraging cutting-edge technologies and methodologies to push boundaries and set new industry standards.',
      color: theme.palette.custom.feature1
    },
    {
      icon: <Security sx={{ fontSize: 40 }} />,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality assurance processes ensure we deliver excellence and reliability every time.',
      color: theme.palette.custom.feature2
    },
    {
      icon: <Group sx={{ fontSize: 40 }} />,
      title: 'Partnership Focused',
      description: 'Building long-term relationships by working closely with clients to understand and exceed expectations.',
      color: theme.palette.custom.feature3
    },
    {
      icon: <Speed sx={{ fontSize: 40 }} />,
      title: 'Fast Delivery',
      description: 'Agile development processes and efficient workflows ensure rapid delivery without compromising quality.',
      color: theme.palette.custom.feature4
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      title: 'Scalable Solutions',
      description: 'Future-proof architectures that grow with your business and adapt to changing market demands.',
      color: theme.palette.custom.feature5
    },
    {
      icon: <Code sx={{ fontSize: 40 }} />,
      title: 'Expert Team',
      description: 'Seasoned professionals with deep expertise across multiple technologies and industry domains.',
      color: theme.palette.custom.feature6
    }
  ];

  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          bgcolor: 'background.default',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${theme.palette.custom.gradientStart} 0%, ${theme.palette.custom.gradientEnd} 100%)`,
            zIndex: 0,
          }
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1, py: 12, px: 2 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
                <Chip
                  label="🚀 New Technology Startup"
                  sx={{
                    mb: 3,
                    bgcolor: 'action.selected',
                    color: 'text.primary',
                    fontWeight: 600,
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
                    background: theme.palette.mode === 'dark' 
                      ? 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)'
                      : 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Engineering Quality{' '}
                  <Box component="span" sx={{ 
                    color: 'secondary.main',
                    WebkitTextFillColor: theme.palette.secondary.main
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
                  Transform your vision into reality with cutting-edge technology solutions. 
                  We deliver innovative software that drives growth and exceeds industry standards.
                </Typography>
                
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={3} 
                  sx={{ justifyContent: { xs: 'center', lg: 'flex-start' } }}
                >
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    size="large"
                    onClick={() => navigate('/services')}
                    endIcon={<ArrowForward />}
                    sx={{ 
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      borderRadius: 3,
                      textTransform: 'none',
                      boxShadow: '0 8px 32px rgba(254, 207, 29, 0.3)',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 40px rgba(254, 207, 29, 0.4)',
                      }
                    }}
                  >
                    Explore Services
                  </Button>
                  <Button 
                    variant="outlined" 
                    color="secondary" 
                    size="large"
                    onClick={() => navigate('/contact')}
                    sx={{ 
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: 3,
                      textTransform: 'none',
                      borderWidth: 2,
                      '&:hover': {
                        borderWidth: 2,
                        transform: 'translateY(-2px)',
                        bgcolor: 'action.hover',
                      }
                    }}
                  >
                    Get Started
                  </Button>
                </Stack>
              </Box>
            </Grid>
            
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box sx={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
              }}>
                <Paper
                  elevation={24}
                  sx={{
                    p: 6,
                    borderRadius: 4,
                    bgcolor: 'background.paper',
                    border: `1px solid ${theme.palette.divider}`,
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: 'linear-gradient(90deg, #FECF1D 0%, #ff6b35 100%)',
                    }
                  }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <img 
                      src={techloomLogo}
                      alt="Techloom Logo" 
                      style={{ 
                        height: 120, 
                        width: 'auto',
                        marginBottom: 24 
                      }}
                    />
                    <Typography variant="h4" sx={{ 
                      fontWeight: 700, 
                      color: 'text.primary',
                      mb: 2 
                    }}>
                      Techloom
                    </Typography>
                    <Typography variant="body1" sx={{ 
                      color: 'text.secondary',
                      fontSize: '1.1rem'
                    }}>
                      Your Technology Partner
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 12, bgcolor: 'background.contrast', px: 2 }}>
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
            We combine innovation, quality, and partnership to deliver exceptional results
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, lg: 4 }}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  p: 3,
                  borderRadius: 3,
                  bgcolor: 'background.paper',
                  transition: 'all 0.3s ease-in-out',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.palette.mode === 'dark' 
                      ? '0 20px 40px rgba(0,0,0,0.3)'
                      : '0 20px 40px rgba(0,0,0,0.1)',
                    border: `1px solid ${feature.color}`,
                  }
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Avatar
                    sx={{
                      bgcolor: `${feature.color}15`,
                      color: feature.color,
                      width: 80,
                      height: 80,
                      mb: 3,
                      mx: 'auto'
                    }}
                  >
                    {feature.icon}
                  </Avatar>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      color: 'text.primary',
                      mb: 2,
                      textAlign: 'center',
                      fontSize: '1.4rem'
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                      textAlign: 'center',
                      fontSize: '1rem'
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 12,
          bgcolor: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a',
          color: theme.palette.mode === 'dark' ? '#1a1a1a' : '#ffffff',
          px: 2,
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
              color="secondary" 
              size="large"
              onClick={() => navigate('/contact')}
              endIcon={<ArrowForward />}
              sx={{ 
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 700,
                borderRadius: 3,
                textTransform: 'none',
              }}
            >
              Start Your Project
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              onClick={() => navigate('/services')}
              sx={{ 
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 3,
                textTransform: 'none',
                borderColor: 'currentColor',
                color: 'inherit',
                '&:hover': {
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                }
              }}
            >
              View Services
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
