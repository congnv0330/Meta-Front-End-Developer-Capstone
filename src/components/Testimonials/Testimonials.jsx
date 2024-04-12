import customer1Image from '@/assets/customer1.jpg';
import customer2Image from '@/assets/customer2.jpg';
import customer3Image from '@/assets/customer3.jpg';
import customer4Image from '@/assets/customer4.jpg';

import { TestimonialCard } from '../TestimonialCard';

import './Testimonials.css';

const customers = [
  {
    id: 1,
    fullName: 'Maria Sanchez',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    id: 2,
    fullName: 'Antony Clifton',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    id: 3,
    fullName: 'Tamika Jackson',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    id: 4,
    fullName: 'Brandon Ming',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

export function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>What people say about us!</h2>
        <div className="testimonials-container">
          {customers.map((customer) => (
            <TestimonialCard key={customer.id} customer={customer} />
          ))}
        </div>
      </div>
    </section>
  );
}
