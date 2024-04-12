import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IconMenu2, IconX } from '@tabler/icons-react';
import clsx from 'clsx';

import logoImage from '@/assets/logo.png';

import './Header.css';

const navLinks = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/menu',
    name: 'Menu',
  },
  {
    path: '/bookings',
    name: 'Reservations',
  },
  {
    path: '/order-online',
    name: 'Order Online',
  },
  {
    path: '/login',
    name: 'Login',
  },
];

export function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNavExpanded = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <header className="header">
      <nav className="nav-bar container">
        <Link className="nav-bar-logo" to="/">
          <img src={logoImage} alt="Little Lemon logo" />
        </Link>
        <button
          type="button"
          className="nav-bar-hamburger"
          onClick={toggleNavExpanded}
        >
          {isNavExpanded ? <IconX size={28} /> : <IconMenu2 size={28} />}
        </button>
        <ul
          className={clsx('nav-bar-links', { expanded: isNavExpanded })}
          onClick={toggleNavExpanded}
        >
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <NavLink
                key={navLink.path}
                className={({ isActive }) => clsx({ active: isActive })}
                to={navLink.path}
              >
                {navLink.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
