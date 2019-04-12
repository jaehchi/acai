import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import SVG from '../../globals/SVG';

const Me = (props) => {
  const path = `/channels/@me`;
  return (
    <div className="guildItem">
      <NavLink to={path} className="g-avatar" activeClassName="g-active" isActive={ () => ( props.location.pathname.includes('/@me') )} >
        <SVG height={"50px"} width={"50px"} viewBox={"0 -15 512 512"}/>
      </NavLink>
      <div className="g-selector"></div>
      
    </div>
  );
};

export default withRouter(Me);