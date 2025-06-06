import { Email, LocationOn, Phone } from '@mui/icons-material';
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';

const ContactInfo = () => {
  const theme = useTheme();

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 30, color: theme.palette.text.primary }} />,
      title: 'Email',
      details: 'hello@techloom.com',
      description: "Send us an email and we'll respond within 24 hours",
    },
    {
      icon: <Phone sx={{ fontSize: 30, color: theme.palette.text.primary }} />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Call us during business hours for immediate assistance',
    },
    {
      icon: <LocationOn sx={{ fontSize: 30, color: theme.palette.text.primary }} />,
      title: 'Office',
      details: 'San Francisco, CA',
      description: 'Visit our office or schedule a virtual meeting',
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {contactInfo.map((info, index) => (
        <Card
          key={index}
          sx={{
            bgcolor: 'background.paper',
            borderRadius: 3,
            p: 2,
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              {info.icon}
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  ml: 2,
                  fontWeight: 'bold',
                  color: 'text.primary',
                }}
              >
                {info.title}
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                color: 'text.primary',
                fontWeight: 'bold',
                mb: 1,
              }}
            >
              {info.details}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.5,
              }}
            >
              {info.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ContactInfo;
