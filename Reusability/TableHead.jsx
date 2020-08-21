import React, { Component } from "react";

class TableHead extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {this.props.headers.map((h) => {
          return <th>{h.heading}</th>;
        })}
      </>
    );
  }
}

export default TableHead;
