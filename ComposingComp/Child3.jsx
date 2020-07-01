import React, { Component } from "react";

class Child3 extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>JS Library :{this.props.library}</div>
        <button onClick={this.props.handleChange}>Click</button>
      </div>
    );
  }
}

export default Child3;
