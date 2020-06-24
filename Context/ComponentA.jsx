import React, { Component } from "react";
import CompB from "./ComponentB";

class CompA extends Component {
  state = {};
  render() {
    return <CompB />;
  }
}

export default CompA;
