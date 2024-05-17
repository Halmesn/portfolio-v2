import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      styles: '/src/styles',
      context: '/src/context',
      hooks: '/src/hooks',
      helpers: '/src/helpers',
      types: '/src/types',
      pages: '/src/pages',
    },
  },
});
