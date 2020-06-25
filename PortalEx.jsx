import React, { Component } from "react";
import ReactDOM from "react-dom";

class PortalEx extends Component {
  render() {
    return ReactDOM.createPortal(
      <h1>Portal Example</h1>,
      document.getElementById("portal-root")
    );
  }
}

export default PortalEx;
