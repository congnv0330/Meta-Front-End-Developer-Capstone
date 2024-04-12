import { fireEvent, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { BookingForm } from './BookingForm';

describe('BookingForm', () => {
  const formProps = {
    availableTimes: [
      '',
      '16:00',
      '16:30',
      '17:00',
      '17:30',
      '18:00',
      '18:30',
      '19:00',
    ],
    occasions: [
      {
        id: '',
        name: 'Choose',
      },
      {
        id: '1',
        name: 'Birthday',
      },
      {
        id: '2',
        name: 'Anniversary',
      },
    ],
  };

  it('BookingForm show validate error and fail to submit', async () => {
    const onSubmit = vi.fn();

    const screen = render(<BookingForm {...formProps} onSubmit={onSubmit} />);

    fireEvent.change(screen.getByTestId('input-date'), {
      target: { value: '' },
    });

    await userEvent.selectOptions(screen.getByTestId('input-time'), '');

    fireEvent.change(screen.getByTestId('input-number-of-guests'), {
      target: { value: 0 },
    });

    await userEvent.selectOptions(screen.getByTestId('input-occasion'), '');

    fireEvent.submit(screen.getByRole('button'));

    expect(await screen.findAllByRole('alert')).toHaveLength(4);

    expect(screen.getByText('Date is required.')).not.toBeNull();
    expect(screen.getByText('Time is required.')).not.toBeNull();
    expect(
      screen.getByText('Number of guests must be at least 1.'),
    ).not.toBeNull();
    expect(screen.getByText('Occasion is required.')).not.toBeNull();

    expect(onSubmit).not.toBeCalled();
  });

  it('BookingForm pass validate and submit success', async () => {
    const onSubmit = vi.fn();

    const screen = render(<BookingForm {...formProps} onSubmit={onSubmit} />);

    fireEvent.change(screen.getByTestId('input-date'), {
      target: { value: '2024-04-13' },
    });

    await userEvent.selectOptions(
      screen.getByTestId('input-time'),
      formProps.availableTimes[1],
    );

    fireEvent.change(screen.getByTestId('input-number-of-guests'), {
      target: { value: 2 },
    });

    await userEvent.selectOptions(
      screen.getByTestId('input-occasion'),
      formProps.occasions[1].id,
    );

    fireEvent.submit(screen.getByRole('button'));

    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));

    expect(onSubmit).toBeCalled();
  });
});
