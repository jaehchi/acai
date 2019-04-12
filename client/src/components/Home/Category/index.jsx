import React, { Component } from 'react';

import AddChannel from '../../Modals/AddChannel';
import SVG from '../../globals/SVG';

import './category.sass';

class Category extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { channel, match } = this.props;

    return (
      <div>
        <div className="category" >
          <SVG name="arrow" width={"10px"} height={"10px"} viewBox="0 0 451.846 451.847"/>
          <div>{channel.name}</div>
          <AddChannel id={channel.id} name={channel.name}/>
        </div>
      </div>
    );
  }
};

export default Category;