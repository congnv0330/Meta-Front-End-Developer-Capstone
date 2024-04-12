import { Fragment } from 'react';
import { IconStarFilled, IconStarHalfFilled } from '@tabler/icons-react';

import './TestimonialCard.css';

const ratingLevels = { 0.5: <IconStarHalfFilled />, 1: <IconStarFilled /> };

export function TestimonialCard({ customer }) {
  return (
    <article className="testimonial-card">
      <img src={customer.image} alt={customer.fullName} />
      <h4>{customer.fullName}</h4>
      <div className="testimonial-star">
        {customer.rating.map((ratingPoint, index) => (
          <Fragment key={index}>{ratingLevels[ratingPoint]}</Fragment>
        ))}
      </div>
      <blockquote>
        <p>"{customer.says}"</p>
      </blockquote>
    </article>
  );
}
