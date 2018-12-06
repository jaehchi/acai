import React from 'react';

import Canva from '../../components/Canva';
import LandingNav from '../../components/LandingNav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

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