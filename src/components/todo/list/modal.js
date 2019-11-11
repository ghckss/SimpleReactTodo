import React, { useState } from "react";
import { Input, Button } from "widgets";
import Modal from "widgets/modal";

const EditModal = ({ value, index, postHandler, toggle }) => {
  const [content, setContent] = useState(value);

  const textChange = e => {
    setContent(e.target.value);
  };

  const updateTodo = e => {
    postHandler(content, index);
    closeModal();
  };

  const closeModal = () => {
    toggle();
  };

  return (
    <React.Fragment>
      <Modal title="수정">
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
      </Modal>
    </React.Fragment>
  );
};

export default EditModal;
