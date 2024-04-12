import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Select } from './Select';

describe('Select', () => {
  it('Select show correct number of option', async () => {
    const screen = render(
      <Select data-testid="select">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>,
    );

    const element = screen.getByTestId('select');

    expect(element.childElementCount).toBe(2);
  });

  it('Select value is correct', async () => {
    const screen = render(
      <Select data-testid="select">
        <option value="1" data-testid="option1">
          Option 1
        </option>
        <option value="2" data-testid="option2">
          Option 2
        </option>
      </Select>,
    );

    const element = screen.getByTestId('select');

    userEvent.selectOptions(element, '1');

    expect(screen.getByTestId('option1').selected).toBeTruthy();
    expect(screen.getByTestId('option2').selected).toBeFalsy();
  });
});
