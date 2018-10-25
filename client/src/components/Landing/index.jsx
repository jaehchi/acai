import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import Canva from './Canva';
import LandingNav from './LandingNav';

import './landing.sass';
class Landing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="landing">
        <LandingNav/> 
        <Canva/>
      </div>
    );
  }
}

export default Landing;