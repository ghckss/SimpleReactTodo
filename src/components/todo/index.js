import React from "react";
import ListContainer from "containers/todo/list";
import RegisterContainer from "containers/todo/register";
import "./index.scss";

const Todo = () => {
  const isContentNull = false;
  const list = isContentNull ? null : <ListContainer />;
  const className = isContentNull ? "content-center" : "content-top";
  return (
    <div className={"todo " + className}>
      <div className="todo-header">
        Simple React Todo
        <RegisterContainer />
      </div>
      <div className="todo-body">{list}</div>
    </div>
  );
};

export default Todo;
