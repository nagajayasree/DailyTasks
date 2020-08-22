import React, { Component } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

class BtechFrns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
        { heading1: "No." },
        { heading2: "Name" },
        { heading3: "RelationShip" },
        { heading4: "Age" },
      ],
      rows: [
        { row: 1, name: "abc", relation: "Btech Friend" },
        { row: 2, name: "xyz", relation: "Btech Friend" },
        { row: 3, name: "lmn", relation: "Btech Friend" },
        { row: 4, name: "stu", relation: "Btech Friend" },
        { row: 5, name: "ghi", relation: "Btech Friend" },
        { newRow: 6, newName: "hjf", newRelation: "Btech Friend" },
      ],
      RowList: [],
      HeaderList: [],
    };
  }

  componentDidMount() {
    let head = [];
    let val = [];
    {
      this.state.headers.map((h) => {
        let headObj = {};
        headObj.value1 = h.heading1;
        headObj.value2 = h.heading2;
        headObj.value3 = h.heading3;
        head.push(headObj);
      });
      this.Header(head);
    }
    {
      this.state.rows.map((r) => {
        let rowObj = {};
        rowObj.value1 = r.row;
        rowObj.value2 = r.name;
        rowObj.value3 = r.relation;
        rowObj.value4 = r.newRow;
        rowObj.value5 = r.newName;
        rowObj.value6 = r.newRelation;
        val.push(rowObj);
      });
      this.Values(val);
    }
  }

  Header = (head) => {
    this.setState({ HeaderList: head });
  };

  Values = (val) => {
    this.setState({ RowList: val });
  };

  render() {
    return (
      <>
        <p>Btech Friends table</p>
        <table className="table table-bordered">
          <thead>
            <TableHead headers={this.state.HeaderList} />
          </thead>
          <tbody>
            <TableRow rows={this.state.RowList} />
          </tbody>
        </table>
      </>
    );
  }
}

export default BtechFrns;
