import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 4000,
    host: '0.0.0.0' // Listen on all network interfaces
  },
  plugins: [react()],
});
