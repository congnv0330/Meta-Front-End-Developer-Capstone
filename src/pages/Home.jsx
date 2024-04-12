import { HeroSection } from '@/components/HeroSection';
import { OutStory } from '@/components/OutStory';
import { Testimonials } from '@/components/Testimonials';
import { WeekSpecials } from '@/components/WeekSpecials';

export function Component() {
  return (
    <>
      <HeroSection />
      <WeekSpecials />
      <Testimonials />
      <OutStory />
    </>
  );
}
