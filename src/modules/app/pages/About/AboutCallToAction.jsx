import { ArrowForward, Mail, Phone } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const AboutCallToAction = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const contactOptions = [
    {
      icon: <Mail />,
      title: 'Start a Conversation',
      description: "Tell us about your project and let's explore how we can help",
      action: () => navigate('/contact'),
      buttonText: 'Contact Us',
    },
    {
      icon: <Phone />,
      title: 'Schedule a Consultation',
      description: 'Book a free consultation to discuss your technology needs',
      action: () => navigate('/contact'),
      buttonText: 'Get Started',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        position: 'relative',
        background: `linear-gradient(135deg,
          ${theme.palette.primary.main}08 0%,
          ${theme.palette.background.default} 50%,
          ${theme.palette.primary.main}05 100%)`,
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, sm: 8 } }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700,
              color: 'text.primary',
              mb: 3,
            }}
          >
            Ready to Build Something{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Extraordinary
            </Box>
            ?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.6,
              mb: 4,
            }}
          >
            Join the companies that trust Techloom to deliver exceptional technology solutions.
            Let's discuss how we can bring your vision to life with our world-class engineering
            expertise.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {contactOptions.map((option, index) => (
            <Grid key={index} size={{ xs: 12, md: 6 }}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  p: 2,
                  borderRadius: 4,
                  bgcolor: 'background.paper',
                  border: `1px solid ${theme.palette.divider}`,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow:
                      theme.palette.mode === 'dark'
                        ? '0 15px 30px rgba(0,0,0,0.2)'
                        : '0 15px 30px rgba(0,0,0,0.1)',
                    border: `1px solid ${theme.palette.primary.main}40`,
                  },
                }}
                onClick={option.action}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      bgcolor: `${theme.palette.primary.main}15`,
                      color: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      fontSize: '2rem',
                    }}
                  >
                    {option.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      color: 'text.primary',
                      mb: 2,
                    }}
                  >
                    {option.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    {option.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowForward />}
                    onClick={option.action}
                    sx={{
                      px: 4,
                      py: 1.5,
                    }}
                  >
                    {option.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Alternative single CTA */}
        <Box sx={{ textAlign: 'center' }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/services')}
              endIcon={<ArrowForward />}
              sx={{
                px: 5,
                py: 2,
                fontSize: '1.1rem',
              }}
            >
              Explore Our Services
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => navigate('/contact')}
              endIcon={<ArrowForward />}
              sx={{
                px: 5,
                py: 2,
                fontSize: '1.1rem',
              }}
            >
              Let's Talk
            </Button>
          </Stack>
        </Box>
      </Container>

      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}08, transparent)`,
          zIndex: 0,
          animation: 'float 8s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}05, transparent)`,
          zIndex: 0,
          animation: 'float 6s ease-in-out infinite reverse',
        }}
      />
    </Box>
  );
};

export default AboutCallToAction;
