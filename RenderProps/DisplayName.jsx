import React, { Component } from "react";

class DisplayName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {this.props.name},{this.props.nameFunc()},{this.props.nameFunc2()}
      </>
    );
  }
}

export default DisplayName;


