import React, { Component } from "react";

class Child4 extends Component {
  state = {};
  render() {
    const { framework, handleChange } = this.props;
    return (
      <div>
        <div>One of the JS Frameworks:{framework}</div>
        <button onClick={handleChange}>Know About</button>
      </div>
    );
  }
}

export default Child4;
