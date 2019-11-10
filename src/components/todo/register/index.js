import React, { useState } from "react";
import { Input } from "widgets";
import "./index.scss";

const Register = ({ create }) => {
  const [value, setValue] = useState("");

  const handleText = e => {
    setValue(e.target.value);
  };

  const appendTodo = e => {
    if (e.keyCode === 13) {
      create(value);
      setValue("");
    }
  };

  return (
    <div className="register">
      <Input.Text value={value} onKeyDown={appendTodo} onChange={handleText} />
    </div>
  );
};

export default Register;
