import React, { Component, Fragment } from "react";

class PwdCheck extends Component {
  state = {
    pwd: "jayasree",
  };

  render() {
    if (this.state.pwd !== this.props.reEnterPwd) {
      throw new Error("Invalid Login");
    }
    return (
      <Fragment>
        <div>Password:{this.state.pwd}</div>
        <div>Re-Enter Password:{this.props.reEnterPwd}</div>
        <h3>Password Matched {this.props.children}</h3>
      </Fragment>
    );
  }
}

export default PwdCheck;
