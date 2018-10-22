import React from "react";

const Input = ({ type, name, placeholder, func }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={func}
    />
  );
}

export default Input;