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
      onKeyDown={e => {
        if (e.keyCode === 13) enterEvent();
      }}
      style={style}
    />
  );
};

export default Text;
