import {
  ArrowForward,
  Email,
  Facebook,
  Language,
  LocationOn,
  Phone,
  Schedule,
  Support,
  WhatsApp,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { trackWhatsAppClick, trackPhoneClick, trackEmailClick } from '@/utility/analytics';

const ContactInfo = () => {
  const theme = useTheme();

  const contactMethods = [
    {
      icon: <WhatsApp sx={{ fontSize: { xs: '5rem', sm: '6rem' } }} />,
      title: 'WhatsApp',
      primary: '+20 111 518 4659',
      secondary: 'Instant messaging & voice calls',
      color: '#25D366',
      action: () => {
        trackWhatsAppClick('contact_page');
        window.open('https://wa.me/201115184659', '_blank');
      },
      badge: 'Fastest Response',
    },
    {
      icon: <Phone sx={{ fontSize: { xs: '5rem', sm: '6rem' } }} />,
      title: 'Phone Call',
      primary: '+20 111 518 4659',
      secondary: 'Direct voice communication',
      color: theme.palette.primary.main,
      action: () => {
        trackPhoneClick('contact_page');
        window.open('tel:+201115184659', '_blank');
      },
      badge: 'Personal Touch',
    },
    {
      icon: <Email sx={{ fontSize: { xs: '5rem', sm: '6rem' } }} />,
      title: 'Email',
      primary: 'techloom.apps@gmail.com',
      secondary: 'Detailed project discussions',
      color: '#EA4335',
      action: () => {
        trackEmailClick('contact_page');
        window.open('mailto:techloom.apps@gmail.com', '_blank');
      },
      badge: 'Professional',
    },
    {
      icon: <Facebook sx={{ fontSize: { xs: '5rem', sm: '6rem' } }} />,
      title: 'Facebook',
      primary: 'Techloom Official',
      secondary: 'Follow our latest updates',
      color: '#4267B2',
      action: () => window.open('https://web.facebook.com/profile.php?id=61565804570894', '_blank'),
      badge: 'Stay Connected',
    },
  ];

  const businessInfo = [
    {
      icon: <LocationOn sx={{ fontSize: { xs: '3.5rem', sm: '4rem' } }} />,
      title: 'Location',
      content: 'Egypt',
      description: 'Serving clients worldwide',
    },
    {
      icon: <Schedule sx={{ fontSize: { xs: '3.5rem', sm: '4rem' } }} />,
      title: 'Business Hours',
      content: '24/7 WhatsApp Support',
      description: 'Always available for urgent inquiries',
    },
    {
      icon: <Language sx={{ fontSize: { xs: '3.5rem', sm: '4rem' } }} />,
      title: 'Languages',
      content: 'English & Arabic',
      description: 'Bilingual support team',
    },
    {
      icon: <Support sx={{ fontSize: { xs: '3.5rem', sm: '4rem' } }} />,
      title: 'Response Time',
      content: '< 1 Hour',
      description: 'Quick replies guaranteed',
    },
  ];

  const quickActions = [
    {
      title: 'Start a Project',
      description: "Ready to begin? Let's discuss your ideas",
      action: () => {
        trackWhatsAppClick('contact_cta_start_project');
        window.open(
          "https://wa.me/201115184659?text=Hi! I'd like to start a new project.",
          '_blank'
        );
      },
      color: 'primary',
    },
    {
      title: 'Get a Quote',
      description: "Need pricing? We'll provide a detailed estimate",
      action: () => {
        trackWhatsAppClick('contact_cta_get_quote');
        window.open(
          "https://wa.me/201115184659?text=Hi! I'd like to get a quote for my project.",
          '_blank'
        );
      },
      color: 'secondary',
    },
  ];

  return (
    <Container maxWidth="lg">
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 5 } }}>
        <Chip
          label="🚀 Get in Touch"
          sx={{
            mb: 2,
            px: 2.5,
            py: 0.5,
            fontSize: '0.9rem',
            fontWeight: 600,
            bgcolor: `${theme.palette.primary.main}10`,
            color: 'primary.main',
            border: `1px solid ${theme.palette.primary.main}30`,
          }}
        />

        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
            fontWeight: 700,
            color: 'text.primary',
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          Choose Your{' '}
          <Box component="span" sx={{ color: 'primary.main' }}>
            Preferred
          </Box>{' '}
          Channel
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto',
            fontSize: { xs: '0.95rem', sm: '1rem' },
            lineHeight: 1.5,
          }}
        >
          Connect with us through your favorite method and get expert guidance.
        </Typography>
      </Box>

      {/* Contact Methods Grid */}
      <Grid container spacing={{ xs: 3, sm: 4 }} sx={{ mb: { xs: 6, sm: 7 } }}>
        {contactMethods.map((method, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
            <Card
              elevation={0}
              sx={{
                height: '100%',
                minHeight: { xs: '200px', sm: '220px' },
                p: 2,
                borderRadius: theme.palette.custom.borderRadius,
                bgcolor: 'background.paper',
                border: `1px solid ${theme.palette.divider}`,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: `0 8px 25px rgba(0,0,0,0.15), 0 0 15px ${method.color}15`,
                  border: `1px solid ${method.color}40`,
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: method.color,
                },
              }}
              onClick={method.action}
            >
              <CardContent
                sx={{
                  p: 2,
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    width: { xs: 60, sm: 70 },
                    height: { xs: 60, sm: 70 },
                    borderRadius: '50%',
                    bgcolor: `${method.color}15`,
                    color: method.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    '& svg': { fontSize: { xs: '2rem', sm: '2.5rem' } },
                  }}
                >
                  {method.icon}
                </Box>

                {/* Content */}
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    color: 'text.primary',
                    mb: 1,
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                  }}
                >
                  {method.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                    fontSize: { xs: '0.8rem', sm: '0.85rem' },
                    mb: 1,
                    wordBreak: 'break-word',
                  }}
                >
                  {method.primary}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '0.75rem', sm: '0.8rem' },
                    lineHeight: 1.4,
                    textAlign: 'center',
                  }}
                >
                  {method.secondary}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Business Information */}
      <Box
        sx={{
          mb: { xs: 5, sm: 6 },
          p: { xs: 3, sm: 4 },
          borderRadius: theme.palette.custom.borderRadius,
          bgcolor: `${theme.palette.primary.main}05`,
          border: `1px solid ${theme.palette.primary.main}20`,
        }}
      >
        <Typography
          variant="h4"
          component="h3"
          sx={{
            fontSize: { xs: '1.3rem', sm: '1.5rem' },
            fontWeight: 700,
            color: 'text.primary',
            mb: 4,
            textAlign: 'center',
          }}
        >
          Business Information
        </Typography>

        <Grid container spacing={{ xs: 2, sm: 3 }}>
          {businessInfo.map((info, index) => (
            <Grid key={index} size={{ xs: 12, sm: 3 }}>
              <Box
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: { xs: 2, sm: 3 },
                  minHeight: { xs: '140px', sm: '160px' },
                  borderRadius: '20px',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}08, ${theme.palette.primary.main}15)`,
                  border: `1px solid ${theme.palette.primary.main}20`,
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}12, ${theme.palette.primary.main}20)`,
                    boxShadow: `0 8px 20px rgba(0,0,0,0.15)`,
                  },
                }}
              >
                <Box
                  sx={{
                    width: { xs: 50, sm: 60 },
                    height: { xs: 50, sm: 60 },
                    borderRadius: '50%',
                    bgcolor: `${theme.palette.primary.main}15`,
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    '& svg': { fontSize: { xs: '1.5rem', sm: '2rem' } },
                  }}
                >
                  {info.icon}
                </Box>

                <Typography
                  variant="h6"
                  component="h4"
                  sx={{
                    fontWeight: 700,
                    color: 'text.primary',
                    mb: 1,
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                  }}
                >
                  {info.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                    mb: 1,
                    fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  }}
                >
                  {info.content}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '0.7rem', sm: '0.8rem' },
                    lineHeight: 1.4,
                    textAlign: 'center',
                  }}
                >
                  {info.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Quick Actions */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontSize: { xs: '1.2rem', sm: '1.4rem' },
            fontWeight: 700,
            color: 'text.primary',
            mb: 3,
          }}
        >
          Ready to Get Started?
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant={index === 0 ? 'contained' : 'outlined'}
              color={action.color}
              size="large"
              onClick={action.action}
              endIcon={<ArrowForward />}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: theme.palette.custom.borderRadius,
                minWidth: { xs: '100%', sm: '180px' },
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {action.title}
            </Button>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default ContactInfo;
