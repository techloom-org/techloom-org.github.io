import { Box, Card, CardContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ServiceCard = ({ icon, title, description }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: '100%',
        bgcolor: 'background.paper',
        borderRadius: 3,
        p: 2,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: theme.palette.mode === 'dark' ? 3 : 6,
        },
      }}
    >
      <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 3, textAlign: 'center' }}>{icon}</Box>

        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          sx={{
            fontSize: { xs: '1.3rem', sm: '1.5rem' },
            fontWeight: 'bold',
            color: 'text.primary',
            mb: 2,
            textAlign: 'center',
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            fontSize: '1rem',
            lineHeight: 1.7,
            textAlign: 'center',
            flexGrow: 1,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
