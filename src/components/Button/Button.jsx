import { forwardRef } from 'react';
import clsx from 'clsx';

import './Button.css';

export const Button = forwardRef(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      className={clsx('btn', className)}
      {...props}
    />
  );
});
