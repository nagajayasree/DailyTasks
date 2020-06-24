import React, { Component } from "react";
import CompC from "./ComponentC";

class CompB extends Component {
  state = {};
  render() {
    return <CompC />;
  }
}

export default CompB;
