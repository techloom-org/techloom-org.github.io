import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const HomeFooter = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 10, lg: 12 },
        bgcolor: theme.palette.mode === 'dark' ? '#2a2a2a' : '#1a1a1a',
        color: theme.palette.mode === 'dark' ? '#ffffff' : '#ffffff',
        px: { xs: 2, sm: 2 },
        borderRadius: 3,
        mx: { xs: 2, sm: 2 },
        mb: { xs: 2, sm: 4 },
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 800,
            mb: { xs: 2, sm: 3 },
            lineHeight: 1.2,
          }}
        >
          Ready to Transform Your Ideas?
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: { xs: 4, sm: 5, md: 6 },
            fontSize: { xs: '1.1rem', sm: '1.2rem' },
            opacity: 0.9,
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.5,
            px: { xs: 1, sm: 0 },
          }}
        >
          Let's discuss how we can help you achieve your technology goals and drive your business
          forward.
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, sm: 3 }}
          sx={{ justifyContent: 'center' }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/contact')}
            endIcon={<ArrowForward />}
            sx={{
              py: { xs: 1.8, sm: 1.5 },
              fontSize: { xs: '1.05rem', sm: '1rem' },
              fontWeight: 600,
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            Start Your Project
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => navigate('/services')}
            sx={{
              py: { xs: 1.8, sm: 1.5 },
              fontSize: { xs: '1.05rem', sm: '1rem' },
              fontWeight: 600,
              width: { xs: '100%', sm: 'auto' },
              borderColor: 'rgba(255,255,255,0.3)',
              color: 'white',
              '&:hover': {
                borderColor: 'primary.main',
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            View Services
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default HomeFooter;
