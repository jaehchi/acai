import React, { Component } from 'react';

import './canva.sass';

class Canva extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="canva">
        <div className="c-wrapper">
          <div className="c-content">
            <h1>It's time to join in on the fun!</h1>
            <p>All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone. Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.</p>
          </div>
          <div className="c-canvas">
            <div className="c-canva">
            
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Canva;