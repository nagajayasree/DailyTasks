import React, { Component } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
  constructor(props) {
    super(props);
    // this.state = {};
    this.element = document.createElement("div");
  }

  componentDidMount() {
    node.appendChild(this.element);
  }

  componentWillUnmount() {
    node.removeChild(this.element);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.element);
  }
}

export default Modal;
