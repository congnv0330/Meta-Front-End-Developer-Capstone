import { forwardRef } from 'react';
import clsx from 'clsx';

import './Select.css';

export const Select = forwardRef(({ className, ...props }, ref) => {
  return <select ref={ref} className={clsx('select', className)} {...props} />;
});
