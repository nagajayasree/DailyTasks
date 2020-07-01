import React, { Component } from "react";

class Child2 extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>Scripting Language:{this.props.scriptLang}</div>
        <button onClick={this.props.handleChange}>Click Here</button>
      </div>
    );
  }
}

export default Child2;
