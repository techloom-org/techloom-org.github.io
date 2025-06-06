import { ArrowForward, WhatsApp } from '@mui/icons-material';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ContactCallToAction = () => {
  const theme = useTheme();

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
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                fontWeight: 700,
                color: 'text.primary',
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Ready to Start Your{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                Digital Journey
              </Box>
              ?
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.6,
                mb: { xs: 3, md: 0 },
              }}
            >
              Don't let great ideas wait. Connect with our team today and let's discuss how we can
              transform your vision into cutting-edge technology solutions.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row', md: 'column' },
                gap: 2,
                justifyContent: { xs: 'center', md: 'flex-end' },
              }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<WhatsApp />}
                href="https://wa.me/201115184659?text=Hello! I'm interested in your services."
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: theme.palette.custom.borderRadius,
                  bgcolor: '#25D366',
                  color: 'white',
                  textTransform: 'none',
                  boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)',
                  '&:hover': {
                    bgcolor: '#128C7E',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                WhatsApp Now
              </Button>

              <Button
                variant="outlined"
                size="large"
                endIcon={<ArrowForward />}
                href="tel:+201115184659"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: theme.palette.custom.borderRadius,
                  textTransform: 'none',
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    borderColor: 'primary.main',
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Call Us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Decorative element */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}${theme.palette.mode === 'dark' ? '06' : '10'}, transparent)`,
          zIndex: 1,
          animation: 'float 8s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-15px)' },
          },
        }}
      />
    </Box>
  );
};

export default ContactCallToAction;
