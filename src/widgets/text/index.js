import React from "react";
import "./index.scss";

const Text = ({
  value,
  width,
  enterEvent = () => {},
  changeEvent = () => {}
}) => {
  const style = {
    width: { width }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={e => changeEvent(e)}
      onKeyDown={e => enterEvent(e)}
      style={style}
    />
  );
};

export default Text;
