import { Box, Container, Typography } from '@mui/material';

const Dawwa = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
          Dawwa
        </Typography>
        <Typography variant="h5" sx={{ color: 'text.secondary', mb: 4 }}>
          Digital Platform Solution
        </Typography>
      </Box>

      {/* Placeholder content - we'll customize this later */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body1" sx={{ mb: 4 }}>
          This is the Dawwa project page. We'll customize this with unique sections, images, videos,
          and content specific to this project.
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Technologies: React, Firebase, Material-UI
        </Typography>
      </Box>
    </Container>
  );
};

export default Dawwa;
