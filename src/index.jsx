import App from '@/App';
import ThemeProvider from '@modules/app/providers/ThemeProvider';
import React from 'react';
import { createRoot } from 'react-dom/client';

// Disable console logging in production for security
const isProduction =
  process.env.NODE_ENV === 'production' ||
  !process.env.NODE_ENV ||
  window.location.hostname !== 'localhost';

if (isProduction) {
  console.log = () => {};
  console.warn = () => {};
  console.error = () => {};
  console.info = () => {};
  console.debug = () => {};
}
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
    <Root />
  </React.StrictMode>
);
