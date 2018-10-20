import React from "react";

const Input = ({ type, name, placeholder, func, className }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={func}
      className={className}
    />
  );
}

export default Input;