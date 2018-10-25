import React from 'react';

import './landingNav.sass';

const LandingNav = () => {
  return (
    <div className="la-nav">
      <div className="la-logo">
        <a href="/">acai</a>
      </div>
      <div className="la-links">
        <a href="">Features</a>
        <a href="">asdfs</a>
        <a href="register">Login</a>
      </div>
    </div>
  );
};

export default LandingNav;