import React from "react";
import { Button } from "widgets";
import "./index.scss";

const List = ({ todo, update, remove }) => {
  const removeItem = index => {
    remove(index);
  };
  const list = todo.map((work, index) => {
    return (
      <li key={index}>
        <span className="todo-value">{work.content}</span>
        <Button value="삭제" clickEvent={() => removeItem(index)} />
        <Button value="수정" clickEvent={update} />
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
