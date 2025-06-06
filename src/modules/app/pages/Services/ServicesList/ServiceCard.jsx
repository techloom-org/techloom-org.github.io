import CheckIcon from '@mui/icons-material/Check';
import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ServiceCard = ({ icon, title, description, features = [] }) => {
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
        transition:
          'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease, border-color 0.2s ease',
        cursor: 'pointer',
        willChange: 'transform',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow:
            theme.palette.mode === 'dark'
              ? `0 12px 25px rgba(0,0,0,0.25)`
              : `0 12px 25px rgba(0,0,0,0.1)`,
          borderColor: `${theme.palette.primary.main}60`,
          '& .service-icon': {
            transform: 'scale(1.1)',
            color: theme.palette.primary.main,
          },
        },
      }}
    >
      <CardContent
        sx={{ p: { xs: 3, sm: 4 }, height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <Box
          className="service-icon"
          sx={{
            mb: 3,
            textAlign: 'center',
            transition: 'all 0.3s ease',
            '& > *': {
              fontSize: '3rem !important',
              color: 'text.primary',
            },
          }}
        >
          {icon}
        </Box>

        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontSize: { xs: '1.25rem', sm: '1.4rem' },
            fontWeight: 700,
            color: 'text.primary',
            mb: 2,
            textAlign: 'center',
            lineHeight: 1.3,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            fontSize: { xs: '0.95rem', sm: '1rem' },
            lineHeight: 1.6,
            textAlign: 'center',
            mb: features.length > 0 ? 4 : 0,
          }}
        >
          {description}
        </Typography>

        {features.length > 0 && (
          <Box sx={{ mt: 'auto', pt: 2 }}>
            <List
              dense
              sx={{
                py: 0,
                '& .MuiListItem-root': {
                  py: 0.5,
                  px: 0,
                  minHeight: 'auto',
                },
              }}
            >
              {features.map((feature, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemIcon
                    sx={{
                      minWidth: '32px',
                      color: 'primary.main',
                    }}
                  >
                    <CheckIcon
                      sx={{
                        fontSize: '1.1rem',
                        p: 0.5,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={feature}
                    primaryTypographyProps={{
                      variant: 'body2',
                      sx: {
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: 'text.secondary',
                        lineHeight: 1.4,
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
