import { forwardRef } from 'react';
import clsx from 'clsx';

import './Input.css';

export const Input = forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type="text"
      className={clsx('input', className)}
      {...props}
    />
  );
});
