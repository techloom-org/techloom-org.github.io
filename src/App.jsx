import { getAllRoutes } from '@/routes';
import Header from '@modules/app/components/Header';
import { Box, Container } from '@mui/material';
import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';

function AppContent() {
  const routes = getAllRoutes();
  const navigate = useNavigate();

  useEffect(() => {
    // Handle GitHub Pages SPA redirect
    const redirect = sessionStorage.getItem('redirect');
    if (redirect) {
      sessionStorage.removeItem('redirect');
      // Parse the URL manually since URL constructor might not be available in all environments
      const redirectPath = redirect.replace(window.location.origin, '');
      navigate(redirectPath, { replace: true });
      return;
    }

    // Handle query parameter redirect (alternative method)
    const search = window.location.search;
    if (search && search[1] === '/') {
      const path = search.slice(2).split('&')[0];
      if (path) {
        navigate('/' + path + window.location.hash, { replace: true });
      }
    }
  }, [navigate]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Container maxWidth="lg" sx={{ px: { xs: 4, sm: 3, md: 4 }, my: '100px' }}>
        <Routes>
          {routes.map((route) => {
            const Component = route.component;
            return <Route key={route.path} path={route.path} element={<Component />} />;
          })}
        </Routes>
      </Container>
    </Box>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
