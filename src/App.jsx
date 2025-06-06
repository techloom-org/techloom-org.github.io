import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Header from '@modules/app/components/Header';
import Home from '@/modules/app/pages/Home';
import About from '@modules/app/pages/About';
import Services from '@modules/app/pages/Services';
import Contact from '@modules/app/pages/Contact';

function App() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Container maxWidth="lg" sx={{ px: 0 }}>
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
