import FeaturedPackages from '@/components/FeaturedPackages';
import PopularDestinations from '@/components/PopularDestinations';
import Promotions from '@/components/Promotions';
import Slider from '@/components/Slider';
import Testimonials from '@/components/Testimonials';
import TravelBooking from '@/components/TravelBooking';
import React from 'react';
function Home() {
  return (
    <div className="home-container">
      <Slider />
      <TravelBooking />
      <PopularDestinations />
      <Promotions />
      <FeaturedPackages />
      <Testimonials />
    </div>
  );
}

export default Home