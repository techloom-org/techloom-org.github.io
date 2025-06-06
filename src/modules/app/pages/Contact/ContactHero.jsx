import { Box, Chip, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ContactHero = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: { xs: '60vh', sm: '70vh', md: '80vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: theme.palette.custom.borderRadius,
        // Enhanced gradient background similar to About page
        background: `linear-gradient(135deg,
          ${theme.palette.custom.gradientStart || theme.palette.primary.main + '08'} 0%,
          ${theme.palette.custom.gradientEnd || theme.palette.background.default} 100%)`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(ellipse at center,
            ${theme.palette.primary.main}${theme.palette.mode === 'dark' ? '08' : '12'} 0%,
            transparent 70%)`,
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ textAlign: 'center', py: { xs: 6, sm: 8, md: 10 } }}>
          <Chip
            label="📞 Get In Touch"
            sx={{
              mb: { xs: 2, sm: 3 },
              px: 3,
              py: 1,
              fontSize: { xs: '0.9rem', sm: '1rem' },
              fontWeight: 600,
              bgcolor:
                theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
              color: 'primary.main',
              border: `1px solid ${theme.palette.primary.main}30`,
            }}
          />

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 700,
              color: 'text.primary',
              mb: 3,
              lineHeight: 1.1,
            }}
          >
            Let's Build{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Something Amazing
            </Box>{' '}
            Together
          </Typography>

          <Typography
            variant="h5"
            component="p"
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            Ready to transform your ideas into reality? Connect with our team for instant
            communication and personalized solutions.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', sm: '1.1rem' },
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              opacity: 0.8,
            }}
          >
            No forms, no delays - just direct access to our experts who are ready to discuss your
            technology needs and provide immediate guidance.
          </Typography>
        </Box>
      </Container>

      {/* Enhanced decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}${theme.palette.mode === 'dark' ? '08' : '12'}, transparent)`,
          zIndex: 1,
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-15px)' },
          },
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          left: '-3%',
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}${theme.palette.mode === 'dark' ? '05' : '08'}, transparent)`,
          zIndex: 1,
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      />
    </Box>
  );
};

export default ContactHero;
