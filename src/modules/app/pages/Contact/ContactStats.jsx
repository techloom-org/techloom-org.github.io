import { Box, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ContactStats = () => {
  const theme = useTheme();

  const stats = [
    {
      number: '< 1hr',
      label: 'Average Response Time',
      description: 'Quick replies to all inquiries',
    },
    {
      number: '24/7',
      label: 'WhatsApp Availability',
      description: 'Instant messaging support',
    },
    {
      number: '100%',
      label: 'Response Rate',
      description: 'We reply to every message',
    },
    {
      number: '3+',
      label: 'Contact Channels',
      description: 'Multiple ways to reach us',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        position: 'relative',
        borderRadius: theme.palette.custom.borderRadius,
        background:
          theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 6 } }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
              fontWeight: 700,
              color: 'text.primary',
              mb: 2,
            }}
          >
            Why Choose Our{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Communication
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.6,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            We pride ourselves on being accessible, responsive, and professional in every
            interaction.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 6, md: 3 }} key={index}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: 3,
                  borderRadius: theme.palette.custom.borderRadius,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow:
                      theme.palette.mode === 'dark'
                        ? '0 8px 25px rgba(255,255,255,0.1)'
                        : '0 8px 25px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <Typography
                  variant="h2"
                  component="div"
                  sx={{
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    fontWeight: 700,
                    color: 'primary.main',
                    mb: 1,
                    lineHeight: 1,
                  }}
                >
                  {stat.number}
                </Typography>

                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                    mb: 1,
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                  }}
                >
                  {stat.label}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                  }}
                >
                  {stat.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactStats;
