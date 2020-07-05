import React, { Component } from "react";
import withButtons from "./withButton";

class ItemCounter extends Component {
  state = {
    count: 23,
  };
  render() {
    return (
      <>
        <div>Counter {this.props.id}</div>
        <div>Description: {this.props.desc}</div>
        Count:{this.state.count}
      </>
    );
  }
}

export default withButtons(ItemCounter);
