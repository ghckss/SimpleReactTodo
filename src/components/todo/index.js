import React from "react";
import List from "./list";
import Register from "./register";
import "./index.scss";

const Todo = () => {
  const isContentNull = false;
  const list = isContentNull ? null : <List />;
  const className = isContentNull ? "content-center" : "content-top";
  return (
    <div className={"todo " + className}>
      <div className="todo-header">
        Simple React Todo
        <Register />
      </div>
      <div className="todo-body">{list}</div>
    </div>
  );
};

export default Todo;
