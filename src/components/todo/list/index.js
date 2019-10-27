import React from "react";
import { Button } from "widgets";
import "./index.scss";

const List = ({ todo, update, remove }) => {
  const list = todo.map((work, index) => {
    return (
      <li key={index}>
        <span className="todo-value">{work.content}</span>
        <Button value="삭제" />
        <Button value="수정" />
      </li>
    );
  });
  return (
    <div className="list">
      <ul>{list}</ul>
    </div>
  );
};

export default List;
