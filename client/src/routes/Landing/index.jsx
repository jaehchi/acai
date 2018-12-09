import React from 'react';

import Canva from '../../components/Landing/Canva';
import LandingNav from '../../components/Landing/LandingNav';
import Hero from '../../components/Landing/Hero';
import Footer from '../../components/Landing/Footer';

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