import React, { Component } from "react";

export class Multiply extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 5 };
  }
  render() {
    return <div>{this.state.num * this.state.num}</div>;
  }
}
