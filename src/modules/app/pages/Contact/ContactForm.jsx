import { Send } from '@mui/icons-material';
import { Alert, Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setShowAlert(true);
    setFormData({ name: '', email: '', company: '', message: '' });

    // Hide alert after 5 seconds
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <Card
      sx={{
        bgcolor: 'background.paper',
        borderRadius: 3,
        p: 3,
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
            mb: 4,
          }}
        >
          Send us a Message
        </Typography>

        {showAlert && (
          <Alert severity="success" sx={{ mb: 3 }} onClose={() => setShowAlert(false)}>
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
                color="primary"
                size="large"
                startIcon={<Send />}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
