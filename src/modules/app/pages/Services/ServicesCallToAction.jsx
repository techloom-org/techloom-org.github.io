import { ArrowForward, CheckCircle } from '@mui/icons-material';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const ServicesCallToAction = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const benefits = [
    'Free initial consultation',
    'Tailored solutions for your industry',
    'Experienced team with proven track record',
    'Full project lifecycle support',
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        position: 'relative',
        borderRadius: theme.palette.custom.borderRadius,
        background: `linear-gradient(135deg,
          ${theme.palette.primary.main}${theme.palette.mode === 'dark' ? '08' : '12'} 0%,
          ${theme.palette.background.default} 50%,
          ${theme.palette.primary.main}${theme.palette.mode === 'dark' ? '05' : '08'} 100%)`,
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
            Ready to Start Your{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Project
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
            Let's discuss how we can transform your ideas into exceptional software solutions. No
            matter the platform or complexity, we're here to deliver excellence.
          </Typography>

          {/* Benefits list */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: { xs: 2, sm: 3 },
              mb: 6,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            {benefits.map((benefit, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  px: { xs: 2, sm: 3 },
                  py: 1,
                  bgcolor: `${theme.palette.primary.main}${theme.palette.mode === 'dark' ? '10' : '15'}`,
                  borderRadius: theme.palette.custom.borderRadius,
                  border: `1px solid ${theme.palette.primary.main}${theme.palette.mode === 'dark' ? '20' : '30'}`,
                }}
              >
                <CheckCircle
                  sx={{
                    fontSize: '1.25rem',
                    color: 'primary.main',
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    fontSize: { xs: '0.875rem', sm: '0.95rem' },
                  }}
                >
                  {benefit}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Call-to-Action Buttons */}
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
              onClick={() => navigate('/contact')}
              endIcon={<ArrowForward />}
              sx={{
                px: 6,
                py: 2.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: theme.palette.custom.borderRadius,
              }}
            >
              Start Your Project
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => navigate('/about')}
              endIcon={<ArrowForward />}
              sx={{
                px: 6,
                py: 2.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: theme.palette.custom.borderRadius,
              }}
            >
              Learn More
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
          background: `radial-gradient(circle, ${theme.palette.primary.main}${theme.palette.mode === 'dark' ? '08' : '12'}, transparent)`,
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
          background: `radial-gradient(circle, ${theme.palette.primary.main}${theme.palette.mode === 'dark' ? '05' : '08'}, transparent)`,
          zIndex: 0,
          animation: 'float 6s ease-in-out infinite reverse',
        }}
      />
    </Box>
  );
};

export default ServicesCallToAction;
