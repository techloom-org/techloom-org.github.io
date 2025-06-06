import React from 'react';
import { Box, Grid } from '@mui/material';
import { useDocumentHead } from '@modules/app/hooks/useDocumentHead';
import techloomLogo from '@assets/images/logo.png';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import ContactHero from './ContactHero';

const Contact = () => {
  useDocumentHead({
    title: 'Contact Us - Techloom',
    description: 'Get in touch with Techloom for your technology needs. Contact our team for consultations and project discussions.',
    icon: techloomLogo,
    keywords: ['contact techloom', 'get in touch', 'technology consultation', 'project inquiry']
  });

  return (
    <Box sx={{ flexGrow: 1, pt: 8 }}>
      <ContactHero />
      
      {/* Contact Form & Info Section */}
      <Box sx={{ py: 12, px: 2 }}>
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <ContactForm />
          </Grid>

          {/* Contact Information */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <ContactInfo />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
