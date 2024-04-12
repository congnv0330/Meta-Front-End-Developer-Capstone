import { Link } from 'react-router-dom';
import { IconMotorbike } from '@tabler/icons-react';

import './MealCard.css';

export function MealCard({ meal }) {
  return (
    <article className="meal-card">
      <div className="meal-card-image">
        <img src={meal.image} alt={meal.name} />
      </div>
      <div className="meal-card-header">
        <h3>{meal.name}</h3>
        <span>{meal.price}</span>
      </div>
      <div className="meal-card-body">
        <p>{meal.description}</p>
      </div>
      <div className="meal-card-action">
        <Link to="order-online">
          Order a delivery <IconMotorbike />
        </Link>
      </div>
    </article>
  );
}
