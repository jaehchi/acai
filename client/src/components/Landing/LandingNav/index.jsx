import React from 'react';
import { Link } from 'react-router-dom'; 

import './landingNav.sass';

const LandingNav = () => {
  return (
    <div className="la-nav">
      <div className="la-logo">
        <a href="/">acai</a>
      </div>
      <div className="la-links">
        <a href="">Features</a>
        <a href="">About</a>
        <Link className="r-redirect" to="/login" href="/login">Login</Link>
      </div>
    </div>
  );
};

export default LandingNav;