import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ValueCard = ({ title, description, icon, color }) => {
  const theme = useTheme();

  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        p: { xs: 1.5, sm: 2 },
        borderRadius: theme.palette.custom.borderRadius,
        bgcolor: 'background.paper',
        border: `1px solid ${theme.palette.divider}`,
        position: 'relative',
        overflow: 'hidden',
        // Optimized transitions - separate properties for better performance
        transition:
          'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease, border-color 0.2s ease',
        cursor: 'pointer',
        // Use will-change for better GPU acceleration
        willChange: 'transform',
        '&:hover': {
          transform: 'translateY(-8px)', // Reduced movement for smoother animation
          boxShadow:
            theme.palette.mode === 'dark'
              ? `0 12px 25px rgba(0,0,0,0.25)`
              : `0 12px 25px rgba(0,0,0,0.1)`,
          borderColor: `${color}60`, // Simpler border change instead of complex shadow
          '& .icon-avatar': {
            transform: 'scale(1.1)', // Removed rotation for smoother performance
            backgroundColor: `${color}25`, // Simpler background change
          },
          '& .card-bg': {
            opacity: 0.8,
            transform: 'scale(1.05)', // Reduced scale for smoother animation
          },
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: `linear-gradient(90deg, ${color}, ${color}80)`,
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
          top: -30,
          right: -30,
          width: 100,
          height: 100,
          borderRadius: '50%',
          backgroundColor: `${color}06`, // Simpler solid color instead of gradient
          opacity: 0.5,
          transition: 'opacity 0.2s ease, transform 0.25s ease',
          zIndex: 0,
          willChange: 'transform, opacity',
        }}
      />

      <CardContent
        sx={{
          p: { xs: 2.5, sm: 3 },
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Avatar
          className="icon-avatar"
          sx={{
            bgcolor: `${color}15`,
            color: color,
            width: { xs: 60, sm: 70 },
            height: { xs: 60, sm: 70 },
            mb: 2.5,
            mx: 'auto',
            // Optimized transition - only transform for better performance
            transition: 'transform 0.2s ease, background-color 0.2s ease',
            fontSize: { xs: '1.5rem', sm: '1.8rem' },
            willChange: 'transform',
          }}
        >
          {icon}
        </Avatar>

        <Typography
          variant="h6"
          component="h3"
          sx={{
            color: 'text.primary',
            fontWeight: 700,
            mb: 1.5,
            fontSize: { xs: '1.1rem', sm: '1.25rem' },
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            lineHeight: 1.6,
            fontSize: { xs: '0.9rem', sm: '1rem' },
            fontWeight: 400,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ValueCard;
