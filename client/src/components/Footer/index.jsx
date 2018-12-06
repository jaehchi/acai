import React from 'react';

import './footer.sass';

const Footer = () => {
  return (
    <div id="footer">
      <div className="f-wrapper">
        <h1 className="f-title">Ready to try Acai? It's Free!</h1>
        <button className="f-button">
          <a className="f-button" href="/register">Register Now!</a>
        </button>  
      </div>
    </div>
  );
}

export default Footer;