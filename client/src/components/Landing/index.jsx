import React from 'react';

import Canva from './Canva';
import LandingNav from './LandingNav';
import Hero from './Hero';
import Footer from './Footer';

import './landing.sass';

const Landing = () => {
  return (
    <div className="landing">
      <LandingNav/> 
      <Canva/>
      <Hero/>
      <Footer/>
    </div>
  );
};

export default Landing;