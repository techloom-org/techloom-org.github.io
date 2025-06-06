import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ServicesCallToAction = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: 12,
        px: 2,
      }}
    >
      <Box sx={{ maxWidth: 'md', mx: 'auto' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 'bold',
              color: 'text.primary',
              mb: 4,
            }}
          >
            Ready to Get Started?
          </Typography>

          <Typography
            variant="h5"
            component="p"
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.3rem' },
              color: 'text.secondary',
              mb: 6,
              lineHeight: 1.6,
            }}
          >
            Let's discuss how we can help transform your ideas into exceptional digital solutions.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/contact')}
          >
            Contact Us Today
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesCallToAction;
