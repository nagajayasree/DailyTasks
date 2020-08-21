import React, { Component } from "react";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {this.props.rows.map((r) => {
          return (
            <tr>
              <td>{r.row}</td>
              <td>{r.name}</td>
              <td>{r.relation}</td>
            </tr>
          );
        })}
      </>
    );
  }
}

export default TableRow;
