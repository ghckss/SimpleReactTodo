import React, { Component } from "react";
import { Text, Button } from "widgets";
import "./index.scss";

class Modal extends Component {
  state = {
    content: this.props.value
  };

  textChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  updateTodo = () => {
    this.props.modalEvent(this.state.content, this.props.index);
    this.closeModal();
  };

  closeModal = () => {
    this.props.toggleEvent();
  };

  render() {
    return (
      <div className="modal">
        <div className="modal-body">
          <span className="explanation">수정</span>
          <Text
            value={this.state.content}
            changeEvent={this.textChange}
            enterEvent={this.updateTodo}
          />
          <Button value="수정" clickEvent={this.updateTodo} />
          <Button value="취소" clickEvent={this.closeModal} />
        </div>
      </div>
    );
  }
}

export default Modal;
