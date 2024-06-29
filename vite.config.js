import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sentryVitePlugin } from '@sentry/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: 'jsm-fj',
      project: 'javascript-react',
      include: './src', // Ensure this path is correct for your project
      authToken: process.env.SENTRY_AUTH_TOKEN, // Ensure this is set in your environment variables
    }),
  ],
  build: {
    sourcemap: true,
  },
});
