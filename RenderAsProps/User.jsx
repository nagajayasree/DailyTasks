import React, { Component } from "react";

class User extends Component {
  state = {};
  render() {
  return <div>{this.props.render} {this.props.name(true)}</div>;
  }
}

export default User;
