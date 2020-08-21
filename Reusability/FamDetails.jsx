import React, { Component } from "react";
import TableComp from "./TableComp";

class FamDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [
        { id: 1, name: "abc", relation: "mother" },
        { id: 2, name: "def", relation: "father" },
        { id: 3, name: "jkl", relation: "brother" },
        { id: 4, name: "xyz", relation: "sister" },
      ],
    };
  }
  render() {
    return (
      <>
        <TableComp family={this.state.members} title="Family Table" />
        {/* {this.props.value.map((col, i) => {
          return <th key={i}>{col}</th>;
        })} */}
      </>
    );
  }
}

export default FamDetails;
