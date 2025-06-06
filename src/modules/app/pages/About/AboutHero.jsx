import { Box, Chip, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const AboutHero = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: { xs: '60vh', sm: '70vh', md: '80vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        // mt: '100px',
        borderRadius: theme.palette.custom.borderRadius,
        // Gradient background
        background: `linear-gradient(135deg,
          ${theme.palette.custom.gradientStart} 0%,
          ${theme.palette.custom.gradientEnd} 100%)`,
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
            label="🌟 About Our Journey"
            sx={{
              mb: { xs: 2, sm: 3 },
              px: 3,
              py: 1,
              fontSize: { xs: '0.9rem', sm: '1rem' },
              fontWeight: 600,
            }}
          />

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
              fontWeight: 800,
              lineHeight: { xs: 1.2, sm: 1.1 },
              mb: { xs: 3, sm: 4 },
              background: `linear-gradient(135deg,
                ${theme.palette.text.primary} 0%,
                ${theme.palette.primary.main} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center',
            }}
          >
            About{' '}
            <Box
              component="span"
              sx={{
                color: 'primary.main',
              }}
            >
              Techloom
            </Box>
          </Typography>

          <Typography
            variant="h4"
            component="p"
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem', lg: '1.8rem' },
              color: 'text.secondary',
              maxWidth: '900px',
              mx: 'auto',
              lineHeight: 1.6,
              fontWeight: 400,
              opacity: 0.9,
            }}
          >
            We're a forward-thinking technology startup committed to pushing the boundaries of
            what's possible in software engineering, delivering excellence that transforms visions
            into reality.
          </Typography>
        </Box>
      </Container>

      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${theme.palette.primary.main}${theme.palette.mode === 'dark' ? '15' : '20'}, transparent)`,
          zIndex: 1,
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          left: '5%',
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${theme.palette.primary.main}${theme.palette.mode === 'dark' ? '10' : '15'}, transparent)`,
          zIndex: 1,
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      />
    </Box>
  );
};

export default AboutHero;
