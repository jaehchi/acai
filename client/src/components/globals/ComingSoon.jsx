import React from 'react';
import SVG from './SVG';

const ComingSoon = (props) => {
  return (
    <div className={props.className}>
      <SVG name="gift" width={"300px"} height={"300px"} viewBox="0 0 512 512" fill={"currentColor"}/>
      <h1>Coming soon...</h1>
    </div>
  )
}

export default ComingSoon