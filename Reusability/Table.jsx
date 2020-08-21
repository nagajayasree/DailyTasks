import React, { Component } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

class TableDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
        { heading: "Sl.No" },
        { heading: "Name" },
        { heading: "RelationShip" },
      ],
      rows: [
        { row: 1, name: "prq", relation: "father" },
        { row: 2, name: "npr", relation: "mother" },
        { row: 3, name: "npr", relation: "brother" },
        { row: 4, name: "acr", relation: "sister" },
      ],
    };
  }
  render() {
    return (
      <>
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

export default TableDisplay;
