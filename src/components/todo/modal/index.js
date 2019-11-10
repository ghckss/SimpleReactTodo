import React, { useState } from "react";
import { Input, Button } from "widgets";
import "./index.scss";

const Modal = ({ value, index, modalEvent, toggleEvent }) => {
  const [content, setContent] = useState(value);

  const textChange = e => {
    setContent(e.target.value);
  };

  const updateTodo = () => {
    modalEvent(content, index);
    closeModal();
  };

  const closeModal = () => {
    toggleEvent();
  };

  return (
    <div className="modal">
      <div className="modal-body">
        <span className="explanation">수정</span>
        <Input.Text
          value={content}
          changeEvent={textChange}
          enterEvent={updateTodo}
        />
        <Button value="수정" clickEvent={updateTodo} />
        <Button value="취소" clickEvent={closeModal} />
      </div>
    </div>
  );
};

export default Modal;
