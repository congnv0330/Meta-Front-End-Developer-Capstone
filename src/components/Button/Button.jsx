import { createElement, forwardRef } from 'react';
import clsx from 'clsx';

import './Button.css';

export const Button = forwardRef(
  ({ as = 'button', className, ...props }, ref) => {
    return createElement(as, {
      ref,
      className: clsx('btn', className),
      ...props,
    });
  },
);
