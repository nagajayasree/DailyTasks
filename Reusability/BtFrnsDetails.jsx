import React, { Component } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

class BtechFrns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
        { heading: "No." },
        { heading: "Name" },
        { heading: "RelationShip" },
      ],
      rows: [
        { row: 1, name: "abc", relation: "Btech Friend" },
        { row: 2, name: "xyz", relation: "Btech Friend" },
        { row: 3, name: "lmn", relation: "Btech Friend" },
        { row: 4, name: "stu", relation: "Btech Friend" },
      ],
    };
  }

  render() {
    return (
      <>
        <p>Btech Friends table</p>
        <table className="table table-bordered">
          <thead>
            <TableHead headers={this.state.headers} />
          </thead>
          <tbody>
            <TableRow rows={this.state.rows} />
          </tbody>
        </table>
      </>
    );
  }
}

export default BtechFrns;
