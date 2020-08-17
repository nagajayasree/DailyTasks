import React, { Component } from "react";

class LastName extends Component {
  state = {};
  render() {
    return (
      <>
        {this.props.last.lastName}
        {/* {this.props.name} */}
      </>
    );
  }
}

export default LastName;
