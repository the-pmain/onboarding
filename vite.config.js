import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    watch: {
      ignored: ['**/_probe_*'],
      usePolling: true,
      interval: 300,
    },
  },
});
