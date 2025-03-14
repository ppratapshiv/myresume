import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  base: '/myresume', 
  build: {
    outDir: 'dist', 
    assetsDir: 'assets', 
  },
  server: {
    port: 3030, 
  },
  preview: {
    port: 7806, 
  },
});
