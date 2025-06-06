import { Avatar, Card, CardContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const FeatureCard = ({ feature }) => {
  const theme = useTheme();

  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        p: { xs: 2.5, sm: 3 },
        borderRadius: 3,
        bgcolor: 'background.paper',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
        border: `1px solid ${theme.palette.divider}`,
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow:
            theme.palette.mode === 'dark'
              ? '0 20px 40px rgba(0,0,0,0.3)'
              : '0 20px 40px rgba(0,0,0,0.1)',
          border: `1px solid ${feature.color}`,
        },
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Avatar
          sx={{
            bgcolor: `${feature.color}15`,
            color: feature.color,
            width: { xs: 70, sm: 80 },
            height: { xs: 70, sm: 80 },
            mb: { xs: 2, sm: 3 },
            mx: 'auto',
          }}
        >
          {feature.icon}
        </Avatar>
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: 700,
            color: 'text.primary',
            mb: { xs: 1.5, sm: 2 },
            textAlign: 'center',
            fontSize: { xs: '1.2rem', sm: '1.4rem' },
          }}
        >
          {feature.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            lineHeight: 1.6,
            textAlign: 'center',
            fontSize: { xs: '1rem', sm: '1rem' },
          }}
        >
          {feature.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
