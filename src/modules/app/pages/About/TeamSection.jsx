import { Architecture, Business, Code, Engineering, Psychology, Public } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const TeamSection = () => {
  const theme = useTheme();

  const teamHighlights = [
    {
      icon: <Engineering />,
      title: 'World-Class Engineers',
      description: 'Senior developers with 10+ years experience from Fortune 500 companies',
      color: theme.palette.custom.feature1,
    },
    {
      icon: <Architecture />,
      title: 'System Architects',
      description: 'Experts in scalable architecture design and cloud infrastructure',
      color: theme.palette.custom.feature2,
    },
    {
      icon: <Business />,
      title: 'Product Strategists',
      description: 'Business-focused technologists who understand market needs',
      color: theme.palette.custom.feature3,
    },
    {
      icon: <Psychology />,
      title: 'UX Specialists',
      description: 'User experience designers crafting intuitive interfaces',
      color: theme.palette.custom.feature4,
    },
    {
      icon: <Code />,
      title: 'Full-Stack Developers',
      description: 'Versatile engineers proficient across the entire technology stack',
      color: theme.palette.custom.feature5,
    },
    {
      icon: <Public />,
      title: 'Global Perspective',
      description: 'International experience bringing diverse insights and best practices',
      color: theme.palette.custom.feature6,
    },
  ];

  const stats = [
    { number: '50+', label: 'Years Combined Experience' },
    { number: '15+', label: 'Technologies Mastered' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, sm: 8 } }}>
          <Chip
            label="🌟 Meet Our Team"
            sx={{
              mb: 2,
              px: 3,
              py: 1,
              fontSize: '1rem',
              fontWeight: 600,
            }}
          />
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
            Powered by{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Excellence
            </Box>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.6,
            }}
          >
            Our team brings together world-class talent from leading technology companies, combining
            decades of experience with fresh perspectives to deliver exceptional results.
          </Typography>
        </Box>

        {/* Stats Section */}
        <Box sx={{ mb: { xs: 6, sm: 8 } }}>
          <Grid container spacing={3}>
            {stats.map((stat, index) => (
              <Grid key={index} size={{ xs: 6, sm: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                      fontWeight: 800,
                      color: 'primary.main',
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontSize: { xs: '0.85rem', sm: '0.9rem' },
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Team Highlights */}
        <Grid container spacing={{ xs: 3, sm: 4 }}>
          {teamHighlights.map((highlight, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  p: 1.5,
                  borderRadius: theme.palette.custom.borderRadius,
                  bgcolor: 'background.paper',
                  border: `1px solid ${theme.palette.divider}`,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow:
                      theme.palette.mode === 'dark'
                        ? `0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px ${highlight.color}30`
                        : `0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px ${highlight.color}30`,
                    '& .team-icon': {
                      transform: 'scale(1.1) rotate(5deg)',
                      background: `linear-gradient(135deg, ${highlight.color}, ${highlight.color}80)`,
                    },
                    '& .team-bg': {
                      opacity: 1,
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                {/* Background decoration */}
                <Box
                  className="team-bg"
                  sx={{
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${highlight.color}08, ${highlight.color}04)`,
                    opacity: 0.7,
                    transition: 'all 0.4s ease',
                    zIndex: 0,
                  }}
                />

                <CardContent sx={{ p: 3, position: 'relative', zIndex: 1 }}>
                  <Avatar
                    className="team-icon"
                    sx={{
                      bgcolor: `${highlight.color}15`,
                      color: highlight.color,
                      width: 60,
                      height: 60,
                      mb: 2,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {highlight.icon}
                  </Avatar>

                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      color: 'text.primary',
                      mb: 1.5,
                      fontSize: { xs: '1.1rem', sm: '1.2rem' },
                    }}
                  >
                    {highlight.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                    }}
                  >
                    {highlight.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Bottom highlight */}
        <Box sx={{ textAlign: 'center', mt: { xs: 6, sm: 8 } }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ mb: 3 }}
          >
            <Chip label="Global Experience" color="primary" />
            <Chip label="Industry Leaders" color="primary" variant="outlined" />
            <Chip label="Innovation Focused" color="primary" />
          </Stack>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              fontStyle: 'italic',
            }}
          >
            "Together, we combine technical excellence with business acumen to deliver solutions
            that don't just work—they excel."
          </Typography>
        </Box>
      </Container>

      {/* Background decorations */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '-10%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}03, transparent)`,
          zIndex: 0,
        }}
      />
    </Box>
  );
};

export default TeamSection;
