import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '../Button';
import { Input, Select } from '../Form';

import './BookingForm.css';

const date = new Date();

export function BookingForm({ availableTimes, occasions, onSubmit }) {
  const { control, handleSubmit } = useForm({
    values: {
      date: `${date.getFullYear()}-${date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-${date.getDate()}`,
      time: availableTimes.length > 0 ? availableTimes[0] : '',
      number_of_guests: 1,
      occasion: occasions.length > 0 ? occasions[0].id : '',
    },
    resolver: zodResolver(
      z.object({
        date: z.string().min(1, 'Date is required.'),
        time: z.string().min(1, 'Time is required.'),
        number_of_guests: z
          .number({ coerce: true })
          .min(1, 'Number of guests must be at least 1.'),
        occasion: z.string().min(1, 'Occasion is required.'),
      }),
    ),
  });

  return (
    <form
      className="booking-form"
      data-testid="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form-field">
        <label htmlFor="date">Date</label>
        <Controller
          control={control}
          name="date"
          render={({ field, fieldState: { error } }) => (
            <>
              <Input
                id="date"
                name="date"
                type="date"
                required
                {...field}
                autoFocus
                data-testid="input-date"
              />
              {error?.message && (
                <p className="error-message" role="alert">
                  {error.message}
                </p>
              )}
            </>
          )}
        />
      </div>
      <div className="form-field">
        <label htmlFor="time">Time</label>
        <Controller
          control={control}
          name="time"
          render={({ field, fieldState: { error } }) => (
            <>
              <Select
                id="time"
                name="time"
                required
                {...field}
                data-testid="input-time"
              >
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </Select>
              {error?.message && (
                <p className="error-message" role="alert">
                  {error.message}
                </p>
              )}
            </>
          )}
        />
      </div>
      <div className="form-field">
        <label htmlFor="number-of-guests">Number of guests</label>
        <Controller
          control={control}
          name="number_of_guests"
          render={({ field, fieldState: { error } }) => (
            <>
              <Input
                id="number-of-guests"
                name="number_of_guests"
                type="number"
                min="1"
                step="1"
                required
                {...field}
                data-testid="input-number-of-guests"
              />
              {error?.message && (
                <p className="error-message" role="alert">
                  {error.message}
                </p>
              )}
            </>
          )}
        />
      </div>
      <div className="form-field">
        <label htmlFor="occasion">Occasion</label>
        <Controller
          control={control}
          name="occasion"
          render={({ field, fieldState: { error } }) => (
            <>
              <Select
                id="occasion"
                name="occasion"
                required
                {...field}
                data-testid="input-occasion"
              >
                {occasions.map((occasion) => (
                  <option key={occasion.id} value={occasion.id}>
                    {occasion.name}
                  </option>
                ))}
              </Select>
              {error?.message && (
                <p className="error-message" role="alert">
                  {error.message}
                </p>
              )}
            </>
          )}
        />
      </div>
      <div className="form-field">
        <Button type="submit">Make your reservation</Button>
      </div>
    </form>
  );
}
