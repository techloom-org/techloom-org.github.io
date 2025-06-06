import App from '@/App';
import ThemeProvider from '@modules/app/providers/ThemeProvider';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Root />
    </HelmetProvider>
  </React.StrictMode>
);
