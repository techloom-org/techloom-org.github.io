import { defineConfig } from '@rsbuild/core';
import { pluginEslint } from '@rsbuild/plugin-eslint';
import { pluginReact } from '@rsbuild/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginEslint({
      eslintPluginOptions: {
        configType: 'flat',
        cwd: process.cwd(),
      },
    }),
  ],
  server: {
    port: 3001,
  },
  html: {
    title: 'Techloom',
    template: './index.html',
  },
  output: {
    assetPrefix: '/',
    copy: [{ from: 'public', to: '' }],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
  source: {
    define: {
      'process.env': JSON.stringify({
        NODE_ENV: process.env.NODE_ENV,
        REACT_APP_FIREBASE_API_KEY: process.env.REACT_APP_FIREBASE_API_KEY,
        REACT_APP_FIREBASE_AUTH_DOMAIN: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        REACT_APP_FIREBASE_PROJECT_ID: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        REACT_APP_FIREBASE_STORAGE_BUCKET: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        REACT_APP_FIREBASE_APP_ID: process.env.REACT_APP_FIREBASE_APP_ID,
        REACT_APP_FIREBASE_MEASUREMENT_ID: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
        REACT_APP_GA4_MEASUREMENT_ID: process.env.REACT_APP_GA4_MEASUREMENT_ID,
        REACT_APP_GTM_CONTAINER_ID: process.env.REACT_APP_GTM_CONTAINER_ID,
      }),
    },
  },
});
