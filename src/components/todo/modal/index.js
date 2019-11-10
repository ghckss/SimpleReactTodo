import React, { useState } from "react";
import { Input, Button } from "widgets";
import "./index.scss";

const Modal = ({ value, index, modalEvent, toggleEvent }) => {
  const [content, setContent] = useState(value);

  const textChange = e => {
    setContent(e.target.value);
  };

  const updateTodo = e => {
    modalEvent(content, index);
    closeModal();
  };

  const closeModal = () => {
    toggleEvent();
  };

  return (
    <div className="modal">
      <div className="modal-body">
        <span className="modal-title">수정</span>
        <Input.Text
          value={content}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              updateTodo();
            }
          }}
          onChange={textChange}
        />
        <Button value="수정" onClick={updateTodo} />
        <Button value="취소" onClick={closeModal} />
      </div>
    </div>
  );
};

export default Modal;
