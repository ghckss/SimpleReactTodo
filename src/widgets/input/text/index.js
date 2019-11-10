import React from "react";
import "./index.scss";

const Text = ({ value, style, onKeyDown, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      style={style}
      onChange={e => onChange(e)}
      onKeyDown={e => onKeyDown(e)}
    />
  );
};

export default Text;
