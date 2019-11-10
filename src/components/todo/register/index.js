import React, { useState } from "react";
import { Input } from "widgets";
import "./index.scss";

const Register = ({ create }) => {
  const [content, setContent] = useState("");

  const textChange = e => {
    setContent(e.target.value);
  };

  const addTodo = e => {
    if (e.keyCode === 13) {
      create(content);
      setContent("");
    }
  };

  return (
    <div className="register">
      <Input.Text value={content} onKeyDown={addTodo} onChange={textChange} />
    </div>
  );
};

export default Register;
