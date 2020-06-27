import React, { Component } from "react";
import "./FamilyTable.css";
import FamilyTable2 from "./FamilyTable2";

class FamilyTable extends Component {
  constructor(props) {
    let stuInfo = [
      {
        no: 1,
        name: "Rishi",
        fname: "Dheeraj",
        mname: "Shilpa",
        contact: 8653789345,
        city: "Hyd",
      },
      {
        no: 2,
        name: "Gauri",
        fname: "Vinay",
        mname: "Leela",
        contact: 9567854365,
        city: "Knr",
      },
      {
        no: 3,
        name: "Rohan",
        fname: "Giri",
        mname: "Nandini",
        contact: 7894567324,
        city: "Hyd",
      },
      {
        no: 4,
        name: "Maya",
        fname: "Kamal",
        mname: "Sunaina",
        contact: 9567342145,
        city: "Sdpt",
      },
      {
        no: 5,
        name: "Tanvi",
        fname: "Suman",
        mname: "Rohini",
        contact: 7456893245,
        city: "Wrgl",
      },
    ];
    super(props);
    this.state = {
      Info: stuInfo,
      isDbClicked: false,
    };
  }

  handleDbClick = (e) => {
    // console.log("clicked");
    this.setState({ isDbClicked: true });
  };

  render() {
    if (this.state.isDbClicked) {
      return <FamilyTable2 />;
    }
    return (
      <div className="container">
        <h1>A Family Table</h1>
        <div className="row">
          <table className=" table table-hover">
            <thead>
              <th>Sl.No</th>
              <th>Name</th>
              <th>FatherName</th>
              <th>MotherName</th>
              <th>ContactNo</th>
              <th>City</th>
            </thead>
            <tbody>
              {this.state.Info.map((e) => {
                return (
                  <tr
                    className="table_row"
                    key={e.id}
                    onDoubleClick={this.handleDbClick}
                  >
                    <td>{e.no}</td>
                    <td>{e.name}</td>
                    <td>{e.fname}</td>
                    <td>{e.mname}</td>
                    <td>{e.contact}</td>
                    <td>{e.city}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default FamilyTable;
