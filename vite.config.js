import { defineConfig } from 'vite';
import { resolve } from 'path';

import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  root: './', // Répertoire racine de votre projet
  build: {
    outDir: 'dist', // Répertoire de sortie pour les fichiers de build
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Ajoutez d'autres fichiers HTML si nécessaire
      },
    },
  },
  server: {
    port: 3000, // Port du serveur de développement
  },
  resolve: {
    alias: {
      '@css': resolve(__dirname, 'assets/css'),
      '@js': resolve(__dirname, 'assets/js'),
      '@img': resolve(__dirname, 'assets/img'),
      '@sass': resolve(__dirname, 'assets/sass'),
    },
  },
  plugins: [injectHTML()],
});