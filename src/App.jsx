import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './routes';

export function App() {
  const router = useMemo(() => createBrowserRouter(routes), []);

  return <RouterProvider router={router} />;
}
