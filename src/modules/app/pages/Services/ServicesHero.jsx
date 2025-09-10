import { Box, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ServicesHero = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 10, sm: 12, md: 15 },
        position: 'relative',
        borderRadius: theme.palette.custom.borderRadius,
        background: `linear-gradient(135deg,
          ${theme.palette.primary.main}08 0%,
          ${theme.palette.background.default} 50%,
          ${theme.palette.primary.main}05 100%)`,
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
            mb: 10,
          }}
        >
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
            Our{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Services
            </Box>
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
            Comprehensive technology solutions designed to accelerate your business growth and
            digital transformation.
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
            From custom software development to quality assurance, we build solutions on any
            platform for any industry.
          </Typography>
        </Box>
      </Container>

      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}08, transparent)`,
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
          background: `radial-gradient(circle, ${theme.palette.primary.main}05, transparent)`,
          zIndex: 1,
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      />
    </Box>
  );
};

export default ServicesHero;
