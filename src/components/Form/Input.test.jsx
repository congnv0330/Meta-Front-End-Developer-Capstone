import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Input } from './Input';

describe('Input', () => {
  it('Input value is correct', async () => {
    const screen = render(<Input data-testid="input" />);

    const element = screen.getByTestId('input');

    fireEvent.change(element, { target: { value: 'this is value' } });

    expect(element).toHaveValue('this is value');
  });

  it('Input number value is correct', async () => {
    const screen = render(<Input data-testid="input" type="number" />);

    const element = screen.getByTestId('input');

    fireEvent.change(element, { target: { value: 2 } });

    expect(element).toHaveValue(2);
  });

  it('Input date value is correct', async () => {
    const screen = render(<Input data-testid="input" type="date" />);

    const element = screen.getByTestId('input');

    fireEvent.change(element, { target: { value: '2024-04-12' } });

    expect(element).toHaveValue('2024-04-12');
  });
});
