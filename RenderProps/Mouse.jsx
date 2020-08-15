import React, { Component } from "react";

class Mouse extends Component {
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
          <p>
            The current mouse position is ({this.state.x},{this.state.y})
          </p>
          {this.props.render(this.state)}
          {this.props.name}
        </div>
      </>
    );
  }
}

export default Mouse;
