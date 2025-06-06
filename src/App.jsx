import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Header from '@modules/app/components/Header';
import HomePage from '@modules/app/pages/HomePage';
import AboutPage from '@modules/app/pages/AboutPage';
import ServicesPage from '@modules/app/pages/ServicesPage';
import ContactPage from '@modules/app/pages/ContactPage';

function App() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Container maxWidth="lg" sx={{ px: 0 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
