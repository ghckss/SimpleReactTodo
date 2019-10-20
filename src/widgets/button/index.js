import React from "react";
import "./index.scss";

const Button = ({ value, style, clickEvent }) => {
  return (
    <button style={style} onClick={clickEvent}>
      {value}
    </button>
  );
};

export default Button;
