import React, { Component, Fragment } from "react";
import Comp from "./Child";

class MemoTest extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1, name: "Romeo" };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ count: 1, name: "Romeo" });
    }, 2000);
  }

  render() {
    console.log(this.state.count);
    return (
      <Fragment>
        <div>{this.state.count}</div>
        <Comp name={this.state.name} />
      </Fragment>
    );
  }
}

export default MemoTest;
