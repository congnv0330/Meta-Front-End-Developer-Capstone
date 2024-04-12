import { NotFound } from './components/NotFound';

export const routes = [
  {
    path: '',
    lazy: () => import('./Layout'),
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        lazy: () => import('./pages/Home'),
      },
      {
        path: 'about',
        lazy: () => import('./pages/UnderDevelopment'),
      },
      {
        path: 'menu',
        lazy: () => import('./pages/UnderDevelopment'),
      },
      {
        path: 'bookings',
        lazy: () => import('./pages/Booking'),
      },
      {
        path: 'order-online',
        lazy: () => import('./pages/UnderDevelopment'),
      },
      {
        path: 'login',
        lazy: () => import('./pages/UnderDevelopment'),
      },
    ],
  },
];
