import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { ViteSSG } from 'vite-ssg';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname is not available in ESM; derive it from import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lista de rutas para pre-renderizar
export const routes = [
  '/',
  '/privacy',
  '/terms',
  '/cookies'
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    includedRoutes: (paths) => {
      // Asegurarse de que todas las rutas estén incluidas
      return [...paths, ...routes];
    },
    onPageRendered: (route, html) => {
      // Añade metadatos específicos por ruta
      if (route === '/') {
        return html.replace(
          '<head>',
          `
          <head>
            <title>Kier Studio - Diseño y Desarrollo Web</title>
            <meta name="description" content="Kier Studio - Especialistas en desarrollo web, diseño de UX/UI y soluciones digitales personalizadas." />
            <meta property="og:title" content="Kier Studio - Diseño y Desarrollo Web" />
            <meta property="og:description" content="Especialistas en desarrollo web, diseño de UX/UI y soluciones digitales personalizadas." />
            <meta property="og:type" content="website" />
            <meta name="robots" content="index, follow" />
          `
        );
      }
      return html;
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true,
  }
});
