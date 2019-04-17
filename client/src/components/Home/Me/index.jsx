import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import SVG from '../../globals/SVG';

const Me = (props) => {
  const path = `/channels/@me`;
  return (
    <div className="guildItem">
      <NavLink to={path} className="g-avatar" activeClassName="g-active" isActive={ () => ( props.location.pathname.includes('/@me') )}  data-tip={"Home"} data-for="homeTip" >
        <SVG height={"50px"} width={"50px"} viewBox={"0 -15 512 512"}/>
      </NavLink>
      <ReactTooltip id="homeTip" place="right" effect="solid" className="guild__tooltip"/>  
      <div className="g-selector"></div>
      
    </div>
  );
};

export default withRouter(Me);