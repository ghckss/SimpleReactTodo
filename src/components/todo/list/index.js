import React, { useState } from "react";
import { Button } from "widgets";
import EditModal from "./modal";
import "./index.scss";

const List = ({ todo, update, remove }) => {
  const [status, setStatus] = useState(false);
  const [value, setValue] = useState("");
  const [index, setIndex] = useState("");

  const toggleModal = () => {
    setStatus(!status);
  };

  const setModalInfos = (content, index) => {
    toggleModal();
    setValue(content);
    setIndex(index);
  };

  const removeTodo = index => {
    remove(index);
  };

  const TodoList = todo.map((todo, index) => {
    return (
      <li key={index}>
        <span className="todo-value">{todo.content}</span>
        <Button value="삭제" onClick={() => removeTodo(index)} />
        <Button
          value="수정"
          onClick={() => setModalInfos(todo.content, index)}
        />
      </li>
    );
  });

  return (
    <div className="list">
      <ul>{TodoList}</ul>
      {status && (
        <EditModal
          value={value}
          index={index}
          postHandler={update}
          toggle={toggleModal}
        />
      )}
    </div>
  );
};

export default List;
