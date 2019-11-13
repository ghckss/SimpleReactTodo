import React from "react";
import "./index.scss";

const Button = ({ value, style, onClick }) => {
  return (
    <button style={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
