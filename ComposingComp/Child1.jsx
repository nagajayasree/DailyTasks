import React, { Component } from "react";

class Child1 extends Component {
  state = {};
  render() {
    const { markupLang, handleChange } = this.props;
    return (
      <div>
        <div>Markup Language:{markupLang}</div>
        <button onClick={handleChange}>Click Here</button>
      </div>
    );
  }
}

export default Child1;
