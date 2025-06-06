import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  TextField, 
  Button,
  Grid,
  Alert,
  useTheme
} from '@mui/material';
import { Email, Phone, LocationOn, Send } from '@mui/icons-material';
import { useDocumentHead } from '@modules/app/hooks/useDocumentHead';
import techloomLogo from '@assets/images/logo.png';

const ContactPage = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  useDocumentHead({
    title: 'Contact Us - Techloom',
    description: 'Get in touch with Techloom for your technology needs. Contact our team for consultations and project discussions.',
    icon: techloomLogo,
    keywords: ['contact techloom', 'get in touch', 'technology consultation', 'project inquiry']
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setFormData({ name: '', email: '', company: '', message: '' });
    
    // Hide alert after 5 seconds
    setTimeout(() => setShowAlert(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 30, color: theme.palette.text.primary }} />,
      title: 'Email',
      details: 'hello@techloom.com',
      description: 'Send us an email and we\'ll respond within 24 hours'
    },
    {
      icon: <Phone sx={{ fontSize: 30, color: theme.palette.text.primary }} />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Call us during business hours for immediate assistance'
    },
    {
      icon: <LocationOn sx={{ fontSize: 30, color: theme.palette.text.primary }} />,
      title: 'Office',
      details: 'San Francisco, CA',
      description: 'Visit our office or schedule a virtual meeting'
    }
  ];

  return (
    <Box sx={{ flexGrow: 1, pt: 8, px: 2 }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: 12,
          bgcolor: 'background.default',
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          align="center"
          gutterBottom
          sx={{
            fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
            fontWeight: 'bold',
            color: 'text.primary',
            mb: 4
          }}
        >
          Contact Us
        </Typography>
        
        <Typography
          variant="h4"
          component="p"
          align="center"
          sx={{
            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.6
          }}
        >
          Ready to start your next project? Let's discuss how we can bring your vision to life.
        </Typography>
      </Box>

      {/* Contact Form & Info Section */}
      <Box
        sx={{
          py: 12,
          bgcolor: 'background.contrast',
        }}
      >
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Card
              sx={{
                bgcolor: 'background.paper',
                borderRadius: 3,
                p: 3
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h3"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '1.8rem', sm: '2.2rem' },
                    fontWeight: 'bold',
                    color: 'text.primary',
                    mb: 4
                  }}
                >
                  Send us a Message
                </Typography>

                {showAlert && (
                  <Alert 
                    severity="success" 
                    sx={{ mb: 3 }}
                    onClose={() => setShowAlert(false)}
                  >
                    Thank you for your message! We'll get back to you soon.
                  </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        required
                        fullWidth
                        id="name"
                        name="name"
                        label="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        name="email"
                        label="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        id="company"
                        name="company"
                        label="Company (Optional)"
                        value={formData.company}
                        onChange={handleInputChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        required
                        fullWidth
                        id="message"
                        name="message"
                        label="Message"
                        multiline
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        variant="outlined"
                        placeholder="Tell us about your project, timeline, and requirements..."
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        size="large"
                        startIcon={<Send />}
                        sx={{
                          px: 4,
                          py: 2,
                          fontSize: '1.1rem',
                          fontWeight: 'bold',
                          borderRadius: 2,
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: 4,
                          }
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Information */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  sx={{
                    bgcolor: 'background.paper',
                    borderRadius: 3,
                    p: 2
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
                          color: 'text.primary'
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
                        mb: 1
                      }}
                    >
                      {info.details}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.5
                      }}
                    >
                      {info.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactPage;
