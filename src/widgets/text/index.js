import React from "react";
import "./index.scss";

const Input = ({ value, width, changeEvent = () => {} }) => {
  const style = {
    width: { width }
  };
  return (
    <input
      type="text"
      value={value}
      onChange={() => changeEvent()}
      style={style}
    />
  );
};

export default Input;
