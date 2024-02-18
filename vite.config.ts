import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // ajusta esto según la estructura de tu proyecto
    },
  },
});