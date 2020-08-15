import React, { Component } from "react";
import Cat from "./Cat";

class MouseWithCat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  render() {
    return (
      <>
        <div style={{ height: "100px" }} onMouseMove={this.handleMouseMove}>
          <Cat mouse={this.state} />
        </div>
      </>
    );
  }
}

export default MouseWithCat;
