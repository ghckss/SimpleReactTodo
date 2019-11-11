import React from "react";
import "./index.scss";

const Modal = ({ children, title }) => {
  const titleNode = title && <span className="modal-title">{title}</span>;
  return (
    <div className="modal">
      <div className="modal-body">
        {titleNode}
        {children}
      </div>
    </div>
  );
};

export default Modal;
