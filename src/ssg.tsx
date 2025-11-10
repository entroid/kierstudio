import { ViteSSG } from 'vite-ssg';
import App from './App';
import './tailwind.css';

// Rutas que queremos pre-renderizar
export const routes = [
  { path: '/', component: () => null },
  { path: '/privacy', component: () => null },
  { path: '/terms', component: () => null },
  { path: '/cookies', component: () => null },
];

export const createApp = ViteSSG(
  App,
  { routes, base: '/', hashMode: true },
  ({ app, router, isClient }) => {
    // Configuración adicional si es necesario
  }
);
