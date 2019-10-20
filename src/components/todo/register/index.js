import React, { Component } from "react";
import { Button, Text } from "widgets";
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

  render() {
    return (
      <div className="register">
        <Text value={this.state.content} changeEvent={this.textChange} />
        <Button value="추가" />
      </div>
    );
  }
}

export default Register;
