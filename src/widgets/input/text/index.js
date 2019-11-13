import React from "react";
import "./index.scss";

const Text = ({ value, style, onKeyDown, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      style={style}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default Text;
