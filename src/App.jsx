import { getAllRoutes } from '@/routes';
import Header from '@modules/app/components/Header';
import { Box, Container } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  const routes = getAllRoutes();

  return (
    <Router>
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
    </Router>
  );
}

export default App;
