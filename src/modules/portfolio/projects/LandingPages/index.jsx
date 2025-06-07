import { Box, Container, Typography } from '@mui/material';

const LandingPages = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
          Landing Pages Collection
        </Typography>
        <Typography variant="h5" sx={{ color: 'text.secondary', mb: 4 }}>
          Custom Landing Page Designs and Implementations
        </Typography>
      </Box>

      {/* Placeholder content - we'll customize this later */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body1" sx={{ mb: 4 }}>
          This is the Landing Pages project page. We'll showcase your landing page that you created,
          with screenshots and details about the design and implementation.
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Technologies: React, Material-UI, Responsive Design
        </Typography>
      </Box>
    </Container>
  );
};

export default LandingPages;
