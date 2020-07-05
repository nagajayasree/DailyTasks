import React, { Component } from "react";

function withButtons(Comp) {
  return class AddButtons extends Component {
    state = {
      inc: "Increment",
      dec: "Decrement",
      del: "Delete",
    };
    render() {
      return (
        <div>
          <div>HOC</div>
          <Comp {...this.props} />
          <div>
            <button>{this.state.inc}</button>
            <button>{this.state.dec}</button>
            <button>{this.state.del}</button>
          </div>
        </div>
      );
    }
  };
}

export default withButtons;
