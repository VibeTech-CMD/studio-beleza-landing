import { defineConfig } from 'vite';

export default defineConfig({
  // Base relativa permite publicação direta em GitHub Pages (subpasta do repositório) ou domínio próprio
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
  },
  server: {
    port: 5173,
    open: false,
  },
});
