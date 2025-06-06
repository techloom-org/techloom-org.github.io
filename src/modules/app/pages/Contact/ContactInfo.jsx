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

const ContactInfo = () => {
  const theme = useTheme();

  const contactMethods = [
    {
      icon: <WhatsApp sx={{ fontSize: { xs: '5rem', sm: '6rem' } }} />,
      title: 'WhatsApp',
      primary: '+20 111 518 4659',
      secondary: 'Instant messaging & voice calls',
      color: '#25D366',
      action: () => window.open('https://wa.me/201115184659', '_blank'),
      badge: 'Fastest Response',
    },
    {
      icon: <Phone sx={{ fontSize: { xs: '5rem', sm: '6rem' } }} />,
      title: 'Phone Call',
      primary: '+20 111 518 4659',
      secondary: 'Direct voice communication',
      color: theme.palette.primary.main,
      action: () => window.open('tel:+201115184659', '_blank'),
      badge: 'Personal Touch',
    },
    {
      icon: <Email sx={{ fontSize: { xs: '5rem', sm: '6rem' } }} />,
      title: 'Email',
      primary: 'techloom.apps@gmail.com',
      secondary: 'Detailed project discussions',
      color: '#EA4335',
      action: () => window.open('mailto:techloom.apps@gmail.com', '_blank'),
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
      action: () =>
        window.open(
          "https://wa.me/201115184659?text=Hi! I'd like to start a new project.",
          '_blank'
        ),
      color: 'primary',
    },
    {
      title: 'Get a Quote',
      description: "Need pricing? We'll provide a detailed estimate",
      action: () =>
        window.open(
          "https://wa.me/201115184659?text=Hi! I'd like to get a quote for my project.",
          '_blank'
        ),
      color: 'secondary',
    },
  ];

  return (
    <Container maxWidth="lg">
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: { xs: 6, sm: 8 } }}>
        <Chip
          label="🚀 Multiple Ways to Connect"
          sx={{
            mb: { xs: 2, sm: 3 },
            px: 3,
            py: 1,
            fontSize: { xs: '0.9rem', sm: '1rem' },
            fontWeight: 600,
            bgcolor: `${theme.palette.primary.main}${theme.palette.mode === 'dark' ? '10' : '15'}`,
            color: 'primary.main',
            border: `1px solid ${theme.palette.primary.main}${theme.palette.mode === 'dark' ? '30' : '40'}`,
          }}
        />

        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 700,
            color: 'text.primary',
            mb: 3,
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
          variant="h6"
          sx={{
            color: 'text.secondary',
            maxWidth: '700px',
            mx: 'auto',
            fontSize: { xs: '1rem', sm: '1.1rem' },
            lineHeight: 1.6,
          }}
        >
          We're here to help you succeed. Connect with us through your favorite communication method
          and get expert guidance for your technology needs.
        </Typography>
      </Box>

      {/* Contact Methods Grid */}
      <Grid container spacing={{ xs: 4, sm: 5, md: 6 }} sx={{ mb: { xs: 8, sm: 10 } }}>
        {contactMethods.map((method, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6 }}>
            <Card
              elevation={0}
              sx={{
                height: '100%',
                minHeight: { xs: '320px', sm: '360px' },
                p: { xs: 3, sm: 4 },
                borderRadius: theme.palette.custom.borderRadius,
                bgcolor: 'background.paper',
                border: `1px solid ${theme.palette.divider}`,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-8px) scale(1.02)',
                  boxShadow:
                    theme.palette.mode === 'dark'
                      ? `0 20px 40px rgba(0,0,0,0.3), 0 0 20px ${method.color}20`
                      : `0 20px 40px rgba(0,0,0,0.1), 0 0 20px ${method.color}20`,
                  border: `1px solid ${method.color}40`,
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${method.color}, ${method.color}80)`,
                },
              }}
              onClick={method.action}
            >
              <CardContent
                sx={{
                  p: { xs: 4, sm: 5 },
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  {/* Badge */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: { xs: 3, sm: 4 },
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: `${method.color}15`,
                        color: method.color,
                        px: { xs: 3, sm: 4 },
                        py: { xs: 1, sm: 1.2 },
                        borderRadius: '24px',
                        fontSize: { xs: '0.8rem', sm: '0.85rem' },
                        fontWeight: 700,
                        textAlign: 'center',
                        border: `2px solid ${method.color}30`,
                      }}
                    >
                      {method.badge}
                    </Box>
                  </Box>

                  {/* Icon */}
                  <Box
                    sx={{
                      width: { xs: 140, sm: 160 },
                      height: { xs: 140, sm: 160 },
                      borderRadius: '50%',
                      bgcolor: `${method.color}15`,
                      color: method.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: { xs: 4, sm: 5 },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {method.icon}
                  </Box>

                  {/* Content */}
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      color: 'text.primary',
                      mb: 3,
                      fontSize: { xs: '1.3rem', sm: '1.4rem' },
                    }}
                  >
                    {method.title}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 600,
                      fontSize: { xs: '1.05rem', sm: '1.1rem' },
                      mb: 3,
                      wordBreak: 'break-word',
                    }}
                  >
                    {method.primary}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      fontSize: { xs: '0.95rem', sm: '1rem' },
                      lineHeight: 1.6,
                      px: 2,
                    }}
                  >
                    {method.secondary}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Business Information */}
      <Box
        sx={{
          mb: { xs: 8, sm: 10 },
          p: { xs: 4, sm: 6, md: 8 },
          borderRadius: theme.palette.custom.borderRadius,
          bgcolor: `${theme.palette.primary.main}05`,
          border: `1px solid ${theme.palette.primary.main}20`,
        }}
      >
        <Typography
          variant="h4"
          component="h3"
          sx={{
            fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' },
            fontWeight: 700,
            color: 'text.primary',
            mb: { xs: 6, sm: 8 },
            textAlign: 'center',
          }}
        >
          Business Information
        </Typography>

        <Grid container spacing={{ xs: 4, sm: 5, md: 6 }}>
          {businessInfo.map((info, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  textAlign: 'center',
                  p: { xs: 4, sm: 5, md: 6 },
                  minHeight: { xs: '240px', sm: '260px' },
                  borderRadius: '30px',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}${theme.palette.mode === 'dark' ? '08' : '12'}, ${theme.palette.primary.main}${theme.palette.mode === 'dark' ? '15' : '20'})`,
                  border: `2px solid ${theme.palette.primary.main}${theme.palette.mode === 'dark' ? '20' : '30'}`,
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}12, ${theme.palette.primary.main}20)`,
                    boxShadow:
                      theme.palette.mode === 'dark'
                        ? `0 15px 40px rgba(0,0,0,0.3), 0 0 25px ${theme.palette.primary.main}20`
                        : `0 15px 40px rgba(0,0,0,0.15), 0 0 25px ${theme.palette.primary.main}20`,
                    border: `2px solid ${theme.palette.primary.main}40`,
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    borderRadius: '30px 30px 0 0',
                  },
                }}
              >
                <Box
                  sx={{
                    width: { xs: 100, sm: 120 },
                    height: { xs: 100, sm: 120 },
                    borderRadius: '50%',
                    bgcolor: `${theme.palette.primary.main}15`,
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: { xs: 4, sm: 5 },
                  }}
                >
                  {info.icon}
                </Box>

                <Typography
                  variant="h5"
                  component="h4"
                  sx={{
                    fontWeight: 700,
                    color: 'text.primary',
                    mb: 3,
                    fontSize: { xs: '1.2rem', sm: '1.3rem' },
                  }}
                >
                  {info.title}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 700,
                    mb: 3,
                    fontSize: { xs: '1.1rem', sm: '1.2rem' },
                  }}
                >
                  {info.content}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    lineHeight: 1.6,
                    textAlign: 'center',
                    px: 2,
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
          variant="h4"
          component="h3"
          sx={{
            fontSize: { xs: '1.5rem', sm: '1.8rem' },
            fontWeight: 700,
            color: 'text.primary',
            mb: 4,
          }}
        >
          Ready to Get Started?
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
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
                px: 6,
                py: 2.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: theme.palette.custom.borderRadius,
                minWidth: { xs: '100%', sm: '200px' },
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background:
                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  transition: 'left 0.5s ease',
                  zIndex: 1,
                },
                '&:hover::before': {
                  left: '100%',
                },
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    lineHeight: 1.2,
                  }}
                >
                  {action.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '0.8rem',
                    opacity: 0.9,
                    fontWeight: 400,
                  }}
                >
                  {action.description}
                </Typography>
              </Box>
            </Button>
          ))}
        </Stack>

        {/* Additional CTA Text */}
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            mt: 4,
            fontSize: '0.95rem',
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          Have questions about our services, need a custom solution, or want to discuss your
          project? We're here to help you every step of the way. Choose any communication method
          above and let's start building something amazing together.
        </Typography>
      </Box>
    </Container>
  );
};

export default ContactInfo;
