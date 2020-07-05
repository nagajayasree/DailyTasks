import React, { Component } from "react";
import withButtons from "./withButton";

class AgeCounter extends Component {
  state = {
    age: 56,
  };
  render() {
    return (
      <>
        <div>Counter {this.props.id}</div>
        <div>Description: {this.props.desc}</div>
        Age:{this.state.age}
      </>
    );
  }
}

export default withButtons(AgeCounter);
