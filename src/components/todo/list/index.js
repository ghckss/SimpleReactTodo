import React, { useState } from "react";
import { Button } from "widgets";
import Modal from "components/todo/modal";
import "./index.scss";

const List = ({ todo, update, remove }) => {
  const [status, setStatus] = useState(false);
  const [value, setValue] = useState("");
  const [index, setIndex] = useState("");

  const toggleModal = () => {
    setStatus(!status);
  };

  const setModalValue = (content, index) => {
    toggleModal();
    setValue(content);
    setIndex(index);
  };

  const removeItem = index => {
    remove(index);
  };

  const list = todo.map((work, index) => {
    return (
      <li key={index}>
        <span className="todo-value">{work.content}</span>
        <Button value="삭제" clickEvent={() => removeItem(index)} />
        <Button
          value="수정"
          clickEvent={() => setModalValue(work.content, index)}
        />
      </li>
    );
  });

  return (
    <div className="list">
      <ul>{list}</ul>
      {status && (
        <Modal
          value={value}
          index={index}
          modalEvent={update}
          toggleEvent={toggleModal}
        />
      )}
    </div>
  );
};

export default List;
