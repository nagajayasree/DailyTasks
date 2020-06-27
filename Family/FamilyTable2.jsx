import React, { Component } from "react";

class FamilyTable2 extends Component {
  constructor(props) {
    const info = [
      {
        refNo: 1,
        Standard: "VI",
        rollNo: 12,
        age: 11,
      },
      {
        refNo: 2,
        Standard: "V",
        rollNo: 9,
        age: 10,
      },
      {
        refNo: 3,
        Standard: "X",
        rollNo: 34,
        age: 16,
      },
      {
        refNo: 4,
        Standard: "IV",
        rollNo: 26,
        age: 9,
      },
      {
        refNo: 5,
        Standard: "IX",
        rollNo: 22,
        age: 15,
      },
    ];
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <a href="">
            <i className="fa fa-arrow-left"></i>
          </a>
        </div>
        <div className="container">
          <table className="table table-hover">
            <thead>
              <th>Name</th>
              <th>Standard</th>
              <th>RollNo</th>
              <th>Age</th>
            </thead>
            <tbody>
              <tr className="table_row">
                <td>Rishi</td>
                <td>VI</td>
                <td>22</td>
                <td>11</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default FamilyTable2;
