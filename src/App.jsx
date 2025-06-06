import Home from '@/modules/app/pages/Home';
import Header from '@modules/app/components/Header';
import About from '@modules/app/pages/About';
import Contact from '@modules/app/pages/Contact';
import Services from '@modules/app/pages/Services';
import { Box, Container } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Container maxWidth="lg" sx={{ px: { xs: 4, sm: 3, md: 4 } }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
