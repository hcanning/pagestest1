import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/pagestest1',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Put big dependencies in their own chunks
            if (id.includes('three')) return 'vendor-three';
            if (id.includes('three-mesh-bvh')) return 'vendor-bvh';
            if (id.includes('lottie')) return 'vendor-lottie';
            return 'vendor'; // fallback vendor chunk
          }
        },
      },
    },
  },
});
