import { EmojiEvents, Group, Handshake, Lightbulb } from '@mui/icons-material';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ValueCard from './ValueCard';

const ValuesSection = () => {
  const theme = useTheme();

  const values = [
    {
      title: 'Excellence',
      description:
        'We strive for excellence in every line of code, every design decision, and every client interaction.',
      icon: <EmojiEvents />,
      color: theme.palette.custom.feature1,
    },
    {
      title: 'Innovation',
      description:
        'We embrace new technologies and approaches, constantly pushing boundaries to deliver cutting-edge solutions.',
      icon: <Lightbulb />,
      color: theme.palette.custom.feature2,
    },
    {
      title: 'Integrity',
      description:
        'We build trust through transparency, honesty, and delivering on our promises consistently.',
      icon: <Handshake />,
      color: theme.palette.custom.feature3,
    },
    {
      title: 'Collaboration',
      description:
        'We believe in the power of teamwork, both within our team and in partnership with our clients.',
      icon: <Group />,
      color: theme.palette.custom.feature4,
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        position: 'relative',
        borderRadius: theme.palette.custom.borderRadius,
        background: `linear-gradient(135deg,
          ${theme.palette.background.default} 0%,
          ${theme.palette.background.contrast} 100%)`,
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
              mb: 2,
            }}
          >
            Our Core{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Values
            </Box>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.6,
            }}
          >
            The principles that drive our commitment to excellence and shape our culture
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, sm: 4 }}>
          {values.map((value, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <ValueCard
                title={value.title}
                description={value.description}
                icon={value.icon}
                color={value.color}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Decorative background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '-5%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}05, transparent)`,
          zIndex: 0,
          animation: 'pulse 4s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { transform: 'scale(1)', opacity: 0.5 },
            '50%': { transform: 'scale(1.1)', opacity: 0.8 },
          },
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: 250,
          height: 250,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}08, transparent)`,
          zIndex: 0,
          animation: 'pulse 6s ease-in-out infinite reverse',
        }}
      />
    </Box>
  );
};

export default ValuesSection;
