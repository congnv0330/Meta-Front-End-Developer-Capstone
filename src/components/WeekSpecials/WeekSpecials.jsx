import { Link } from 'react-router-dom';

import bruschettaImage from '@/assets/bruschetta.jpg';
import greekSaladImage from '@/assets/greek-salad.jpg';
import lemonDessertImage from '@/assets/lemon-dessert.jpg';

import { Button } from '../Button';
import { MealCard } from '../MealCard';

import './WeekSpecials.css';

const meals = [
  {
    id: 1,
    name: 'Greek Salad',
    image: greekSaladImage,
    price: '$12.99',
    description: `The famous greek salad of crispy lettuce, peppers, olives and
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary
      croutons.`,
  },
  {
    id: 2,
    name: 'Bruschetta',
    image: bruschettaImage,
    price: '$5.99',
    description: `Our Bruschetta is made from grilled bread that has been
      smeared with garlic and seasoned with salt and olive oil. `,
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    image: lemonDessertImage,
    price: '$5.00',
    description: `This comes straight from grandma's recipe book, every last
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];

export function WeekSpecials() {
  return (
    <section className="week-specials">
      <div className="container">
        <div className="week-specials-header">
          <h2>This week specials!</h2>
          <Button as={Link} to="order-online">
            Online Menu
          </Button>
        </div>
        <div className="week-specials-container">
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </section>
  );
}
