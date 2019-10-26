import React from "react";
import { Button } from "widgets";
import "./index.scss";

const List = () => {
  return (
    <div className="list">
      <li>
        <span className="todo-value">todo1</span>
        <Button value="삭제" />
        <Button value="수정" />
      </li>
      <li>
        <span className="todo-value">
          todo2 todo2 todo2 todo2 todo2 todo2 todo2 todo2 todo2
        </span>
        <Button value="삭제" />
        <Button value="수정" />
      </li>
    </div>
  );
};

export default List;
