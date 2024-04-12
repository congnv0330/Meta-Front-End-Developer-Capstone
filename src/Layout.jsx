import { Outlet } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Header } from './components/Header';

export function Component() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
