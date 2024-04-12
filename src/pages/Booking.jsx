import { useEffect, useState } from 'react';

import { BookingForm } from '@/components/BookingForm';

const fetchInformation = async () => {
  return Promise.resolve({
    availableTimes: [
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
        id: '1',
        name: 'Birthday',
      },
      {
        id: '2',
        name: 'Anniversary',
      },
    ],
  });
};

export function Component() {
  const [information, setInformation] = useState({
    availableTimes: [],
    occasions: [],
  });

  const onSubmit = (value) => {
    console.log(value);
    alert('Your reservation has been confirmed.');
  };

  useEffect(() => {
    const getInformation = async () => {
      const response = await fetchInformation();
      setInformation(response);
    };

    getInformation();
  }, []);

  return (
    <div className="container booking-page">
      <h2 className="text-center">Table Reservation</h2>
      <BookingForm
        availableTimes={information.availableTimes}
        occasions={information.occasions}
        onSubmit={onSubmit}
      />
    </div>
  );
}
