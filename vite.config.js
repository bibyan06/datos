import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel([
      'resources/css/forgot-password.css', // Add this line
    ]),
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'resources/css/app.css', // Keep this line for app.css
        forgotPassword: 'resources/css/forgot-password.css', // Add this line
      },
    },
  },
});