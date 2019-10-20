import React from "react";
import List from "./list";
import Register from "./register";

const Todo = () => {
  const list = false ? <List /> : null;
  return (
    <div className="todo">
      <Register />
      {list}
    </div>
  );
};

export default Todo;
