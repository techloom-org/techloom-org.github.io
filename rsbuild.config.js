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
});
