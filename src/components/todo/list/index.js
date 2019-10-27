import React, { Component } from "react";
import { Button } from "widgets";
import Modal from "components/todo/modal";
import "./index.scss";

class List extends Component {
  state = {
    modal: false,
    modalComponent: null
  };

  toggleModal = (content, index, modalEvent) => {
    this.setState({
      modal: !this.state.modal,
      modalComponent: !this.state.modal ? (
        <Modal
          value={content}
          index={index}
          modalEvent={modalEvent}
          toggleEvent={this.toggleModal}
        />
      ) : null
    });
  };

  removeItem = (index, remove) => {
    remove(index);
  };

  render() {
    const { todo, update, remove } = this.props;
    const list = todo.map((work, index) => {
      return (
        <li key={index}>
          <span className="todo-value">{work.content}</span>
          <Button
            value="삭제"
            clickEvent={() => this.removeItem(index, remove)}
          />
          <Button
            value="수정"
            clickEvent={() => this.toggleModal(work.content, index, update)}
          />
        </li>
      );
    });

    return (
      <div className="list">
        <ul>{list}</ul>
        {this.state.modalComponent}
      </div>
    );
  }
}

export default List;
