import { Link } from 'react-router-dom';

import restaurantFoodImage from '@/assets/restaurant-food.jpg';

import { Button } from '../Button';

import './HeroSection.css';

export function HeroSection() {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button as={Link} to="/bookings">
            Reserve a table
          </Button>
        </div>
        <div>
          <img
            className="hero-image"
            src={restaurantFoodImage}
            alt="Restaurant food"
          />
        </div>
      </div>
    </section>
  );
}
