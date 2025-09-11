import { Box, CircularProgress, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectRedirect = ({ _, to }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect immediately
    navigate(to, { replace: true });
  }, [navigate, to]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50vh',
        gap: 2,
      }}
    >
      <CircularProgress />
      <Typography variant="body1" color="text.secondary">
        Redirecting...
      </Typography>
    </Box>
  );
};

export default ProjectRedirect;
