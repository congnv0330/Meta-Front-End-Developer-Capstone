import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Button } from './Button';

describe('Button', () => {
  it('Button show correct children', async () => {
    const screen = render(<Button>Button</Button>);

    const element = await screen.findByRole('button');

    expect(element.textContent).toBe('Button');
  });

  it('Button is disabled', async () => {
    const screen = render(<Button disabled>Disabled</Button>);

    const element = await screen.findByRole('button');

    expect(element.hasAttribute('disabled')).toBe(true);
  });
});
