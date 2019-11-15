import React, { useState } from "react";
import EditModal from "./modal";
import { Button } from "widgets";
import DragNDrop from "utils/dnd";
import "./index.scss";

const List = ({ todo, update, remove }) => {
  const dnd = new DragNDrop();
  const [status, setStatus] = useState(false);
  const [todoInformation, setTodoInformation] = useState({});

  const toggleModal = () => {
    setStatus(!status);
  };

  const setModalInfos = (value, index) => {
    toggleModal();
    setTodoInformation({
      value: value,
      index: index
    });
  };

  const removeTodo = index => {
    remove(index);
  };

  const TodoList = todo.map((work, index) => {
    return (
      <li
        draggable="true"
        key={index}
        onDrag={dnd.handleDrag}
        onDragEnd={dnd.handleDragEnd}
      >
        <span className="todo-value">{work.content}</span>
        <Button value="삭제" onClick={() => removeTodo(index)} />
        <Button
          value="수정"
          onClick={() => setModalInfos(work.content, index)}
        />
      </li>
    );
  });

  return (
    <div className="list">
      <ul>{TodoList}</ul>
      {status && (
        <EditModal
          value={todoInformation.value}
          index={todoInformation.index}
          postHandler={update}
          toggle={toggleModal}
        />
      )}
    </div>
  );
};

export default List;
