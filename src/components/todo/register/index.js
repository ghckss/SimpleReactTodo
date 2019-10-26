import React, { Component } from "react";
import { Text } from "widgets";
import "./index.scss";

class Register extends Component {
  state = {
    content: ""
  };

  textChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  addTodo = e => {
    if (e.keyCode === 13) {
      this.props.create(this.state.content);
      this.setState({
        content: ""
      });
    }
  };

  render() {
    return (
      <div className="register">
        <Text
          value={this.state.content}
          changeEvent={this.textChange}
          enterEvent={this.addTodo}
        />
      </div>
    );
  }
}

export default Register;
