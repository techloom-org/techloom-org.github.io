import { Rocket, Visibility } from '@mui/icons-material';
import { Avatar, Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const MissionVision = () => {
  const theme = useTheme();

  const items = [
    {
      title: 'Our Mission',
      description:
        'To deliver engineering solutions that not only meet but exceed expectations, driving innovation and creating lasting value for our clients and their users. We believe in the power of technology to transform businesses and improve lives.',
      icon: <Rocket sx={{ fontSize: 40 }} />,
      color: theme.palette.custom.feature1,
    },
    {
      title: 'Our Vision',
      description:
        'To become the go-to technology partner for companies seeking exceptional quality and innovative solutions. We envision a future where our engineering excellence sets new industry standards and inspires others to reach beyond conventional limits.',
      icon: <Visibility sx={{ fontSize: 40 }} />,
      color: theme.palette.custom.feature2,
    },
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
            Our Foundation
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              fontSize: { xs: '1rem', sm: '1.1rem' },
            }}
          >
            Built on strong principles that guide everything we do
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 4, sm: 6 }}>
          {items.map((item, index) => (
            <Grid key={index} size={{ xs: 12, md: 6 }}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  p: { xs: 1, sm: 2 },
                  borderRadius: theme.palette.custom.borderRadius,
                  bgcolor: 'background.paper',
                  border: `1px solid ${theme.palette.divider}`,
                  position: 'relative',
                  overflow: 'hidden',
                  // Optimized transitions for better performance
                  transition:
                    'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease, border-color 0.2s ease',
                  cursor: 'pointer',
                  willChange: 'transform',
                  '&:hover': {
                    transform: 'translateY(-6px)', // Reduced movement for smoother animation
                    boxShadow: `0 15px 30px rgba(0,0,0,0.3)`,
                    borderColor: `${item.color}50`, // Simpler border change
                    '& .icon-avatar': {
                      transform: 'scale(1.05)', // Reduced scale, removed rotation
                      backgroundColor: `${item.color}20`, // Simple background change
                    },
                    '& .card-bg': {
                      opacity: 0.9,
                      transform: 'scale(1.05)', // Reduced scale
                    },
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`,
                    zIndex: 1,
                    opacity: 0,
                    transition: 'opacity 0.2s ease',
                  },
                  '&:hover::before': {
                    opacity: 1,
                  },
                }}
              >
                {/* Optimized background decoration */}
                <Box
                  className="card-bg"
                  sx={{
                    position: 'absolute',
                    top: -50,
                    right: -50,
                    width: 150,
                    height: 150,
                    borderRadius: '50%',
                    backgroundColor: `${item.color}05`, // Simpler solid color
                    opacity: 0.6,
                    transition: 'opacity 0.2s ease, transform 0.25s ease',
                    zIndex: 0,
                    willChange: 'transform, opacity',
                  }}
                />

                <CardContent sx={{ p: { xs: 3, sm: 4 }, position: 'relative', zIndex: 1 }}>
                  <Avatar
                    className="icon-avatar"
                    sx={{
                      bgcolor: `${item.color}15`,
                      color: item.color,
                      width: { xs: 70, sm: 80 },
                      height: { xs: 70, sm: 80 },
                      mb: 3,
                      // Optimized transition
                      transition: 'transform 0.2s ease, background-color 0.2s ease',
                      willChange: 'transform',
                    }}
                  >
                    {item.icon}
                  </Avatar>

                  <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                      fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
                      fontWeight: 700,
                      color: 'text.primary',
                      mb: 3,
                      position: 'relative',
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      lineHeight: 1.7,
                      fontWeight: 400,
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MissionVision;
