import React, { Component } from "react";
import Mouse from "./Mouse";
import Cat from "./Cat";
import MouseWithCat from "./MouseWithCat";

class MouseTracker extends Component {
  render() {
    return (
      <>
        <h1>Move the mouse!</h1>
        {/* <Mouse />
        <MouseWithCat /> */}
        <Mouse render={(mouse) => <Cat mouse={mouse} />} />
      </>
    );
  }
}

export default MouseTracker;
