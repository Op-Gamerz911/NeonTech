import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Import the 'path' module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'src/main.tsx'), // Explicitly set the entry point
    },
    outDir: 'dist', // Optional: Specify the output directory (usually 'dist')
  },
});