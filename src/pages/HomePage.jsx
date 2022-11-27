import React from 'react';
import HeroSlider from '../components/homecomp/HeroSlider';
import DescriptionSection from '../components/homecomp/DescriptionSection';
import OverView from '../components/homecomp/OverView';

function HomePage() {
  return (
    <div className="home-page" id="home-page">
      <HeroSlider />
      <DescriptionSection />
      <OverView />
    </div>
  );
}

export default HomePage;
