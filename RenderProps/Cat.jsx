import React, { Component } from "react";
import cat from "./cat.jpg";

class Cat extends Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src={cat}
        style={{
          position: "absolute",
          left: mouse.x,
          top: mouse.y,
          width: "100px",
          height: "100px",
        }}
      />
    );
  }
}

export default Cat;
