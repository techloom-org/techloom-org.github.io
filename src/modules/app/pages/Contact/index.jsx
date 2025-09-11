import { useSEO } from '@modules/app/hooks/useSEO';
import { Box, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect } from 'react';
import ContactCallToAction from './ContactCallToAction';
import ContactFAQ from './ContactFAQ';
import ContactHero from './ContactHero';
import ContactInfo from './ContactInfo';

const Contact = () => {
  const theme = useTheme();

  useSEO({
    title: 'Contact Us - Techloom | Get Expert Technology Consultation',
    description: "Connect with Techloom's expert team through WhatsApp, phone, email, or social media. Get instant responses and personalized technology solutions for your business needs in Egypt.",
    keywords: [
      'contact techloom',
      'get in touch Egypt',
      'technology consultation Egypt',
      'project inquiry Cairo',
      'whatsapp support Egypt',
      'expert consultation Cairo',
      'custom software development contact',
      'tech support Egypt',
      'business solutions Cairo',
      'instant communication Egypt',
      'اتصل بنا',
      'استشارة تقنية',
      'دعم واتساب',
      'حلول الأعمال',
    ],
    location: 'Egypt',
    service: 'Technology Consultation',
  });

  // Add structured data for SEO
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      mainEntity: {
        '@type': 'Organization',
        name: 'Techloom',
        description: 'Expert technology solutions and software development services',
        url: 'https://techloom.com/contact',
        logo: 'https://techloom.com/logo.png',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+20-111-518-4659',
            contactType: 'customer service',
            availableLanguage: ['English', 'Arabic'],
            areaServed: 'Worldwide',
          },
          {
            '@type': 'ContactPoint',
            email: 'techloom.apps@gmail.com',
            contactType: 'customer service',
            availableLanguage: ['English', 'Arabic'],
            areaServed: 'Worldwide',
          },
        ],
        sameAs: [
          'https://web.facebook.com/profile.php?id=61565804570894',
          'https://wa.me/201115184659',
        ],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'EG',
          addressRegion: 'Egypt',
        },
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        pt: 8,
        borderRadius: theme.palette.custom.borderRadius,
      }}
      component="main"
      role="main"
      aria-label="Techloom contact page content"
    >
      <ContactHero />

      {/* Contact Info Section */}
      <Box sx={{ py: { xs: 8, sm: 12 } }}>
        <Container maxWidth="lg">
          <ContactInfo />
        </Container>
      </Box>

      {/* FAQ Section */}
      <ContactFAQ />

      {/* Call to Action Section */}
      <ContactCallToAction />
    </Box>
  );
};

export default Contact;
