import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/Yasinaslight',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',   
    port: 80, 
    strictPort: true,              
    hmr: {
      clientPort: 80        
    },
    allowedHosts: ['yasinaslight.nex.sh']   
  },
});
