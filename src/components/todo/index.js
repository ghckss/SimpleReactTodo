import React from "react";
import ListContainer from "containers/todo/list";
import RegisterContainer from "containers/todo/register";
import "./index.scss";

const Todo = ({ todo }) => {
  const checkTodoNull = todo.length < 1;
  const TodoList = checkTodoNull ? null : <ListContainer />;
  const position = checkTodoNull ? "content-center" : "content-top";

  return (
    <div className={"todo " + position}>
      <div className="todo-header">
        Simple React Todo
        <RegisterContainer />
      </div>
      <div className="todo-body">{TodoList}</div>
    </div>
  );
};

export default Todo;
