import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const FeatureCard = ({ feature, index }) => {
  const theme = useTheme();

  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        p: 3,
        borderRadius: 3,
        bgcolor: 'background.paper',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
        border: `1px solid ${theme.palette.divider}`,
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: theme.palette.mode === 'dark' 
            ? '0 20px 40px rgba(0,0,0,0.3)'
            : '0 20px 40px rgba(0,0,0,0.1)',
          border: `1px solid ${feature.color}`,
        }
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Avatar
          sx={{
            bgcolor: `${feature.color}15`,
            color: feature.color,
            width: 80,
            height: 80,
            mb: 3,
            mx: 'auto'
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
            mb: 2,
            textAlign: 'center',
            fontSize: '1.4rem'
          }}
        >
          {feature.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            lineHeight: 1.7,
            textAlign: 'center',
            fontSize: '1rem'
          }}
        >
          {feature.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
