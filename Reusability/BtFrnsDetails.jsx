import React, { Component } from "react";
import TableHead from "./TableHead";

class BtechFrns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      head: [{ heading: "No." }, { heading: "Name" }],
      values: [
        { id: 1, name: "abc" },
        { id: 2, name: "xyz" },
        { id: 3, name: "lmn" },
        { id: 4, name: "stu" },
      ],
    };
  }

  Header = () => {
    return (
      <>
        {this.state.head.map((h) => {
          return <th>{h.heading}</th>;
        })}
      </>
    );
  };

  render() {
    return (
      <>
        <table className="table table-bordered"></table>
      </>
    );
  }
}

export default BtechFrns;
