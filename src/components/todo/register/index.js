import React, { useState } from "react";
import { Text } from "widgets";
import "./index.scss";

const Register = ({ create }) => {
  const [content, setContent] = useState("");

  const textChange = e => {
    setContent(e.target.value);
  };

  const addTodo = () => {
    create(content);
    setContent("");
  };

  return (
    <div className="register">
      <Text value={content} changeEvent={textChange} enterEvent={addTodo} />
    </div>
  );
};

export default Register;
