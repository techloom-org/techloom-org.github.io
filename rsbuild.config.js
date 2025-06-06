import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3001,
  },
  html: {
    title: 'Techloom',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
});
