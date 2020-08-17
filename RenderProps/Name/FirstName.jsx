import React, { Component } from "react";

class FirstName extends Component {
  state = {};
  render() {
    return (
      <>
        <p>
          {this.props.first.firstName}
          {/* {this.props.name} */}
        </p>
      </>
    );
  }
}

export default FirstName;
