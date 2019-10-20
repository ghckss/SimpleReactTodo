import React from "react";
import "./index.scss";

const Text = ({ value, width, changeEvent = () => {} }) => {
  const style = {
    width: { width }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={e => changeEvent(e)}
      style={style}
    />
  );
};

export default Text;
