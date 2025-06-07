import { Box, Container, Typography } from '@mui/material';

const EvoShutter = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
          EvoShutter
        </Typography>
        <Typography variant="h5" sx={{ color: 'text.secondary', mb: 4 }}>
          Smart Shutter Control System
        </Typography>
      </Box>

      {/* Placeholder content - we'll customize this later */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body1" sx={{ mb: 4 }}>
          This is the EvoShutter project page. We'll customize this with unique sections, images,
          videos, and content specific to this IoT project.
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Technologies: React, IoT, Arduino, WebSockets
        </Typography>
      </Box>
    </Container>
  );
};

export default EvoShutter;
