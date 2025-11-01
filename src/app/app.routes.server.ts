// app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // 1. Explicitly set dynamic routes to RenderMode.Server (SSR)
  // This tells Vercel to generate the HTML on demand for any ID.
  {
    path: 'checkout/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'details/:id',
    renderMode: RenderMode.Server
  },

  // 2. Keep the general fallback for *all other* routes as Prerender.
  // This will prerender your static routes (e.g., '/', '/about', '/contact').
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];