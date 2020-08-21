import React, { Component } from "react";
import FamDetails from "./FamDetails";
import BtechFrns from "./BtFrnsDetails";

class TableComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableName: "School Friends Table",
      schFrnds: [
        { id: 1, name: "hij" },
        { id: 2, name: "ghi" },
        { id: 3, name: "pqr" },
        { id: 4, name: "cde" },
      ],
      btechfrns: [],
    };
  }
  render() {
    let details = [];
    this.state.btechfrns.map((b) => {
      details.push(<BtechFrns value={b.name} key={b.id} />);
    });

    return (
      <>
        <p>List of Tables</p>
        {this.props.title}
        <div className="table">
          <table className="table table-bordered">
            <thead>
              <tr>
                <td>Sl.No</td>
                <td>Name</td>
                <td>RelationShip</td>
              </tr>
            </thead>
            <tbody>
              {this.props.family.map((n) => {
                return (
                  <tr key={n.id}>
                    <td>{n.id}</td>
                    <td>{n.name}</td>
                    <td>{n.relation}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* {this.props.heading}
        <div className="table">
          <table className="table table-bordered">
            <thead>
              <tr>
                <td>Sl.No</td>
                <td>Name</td>
              </tr>
            </thead>
            <tbody>
              {this.props.btfrns.map((n) => {
                return (
                  <tr key={n.id}>
                    <td>{n.id}</td>
                    <td>{n.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div> */}

        <div>
          <p>Btech Friends Table</p>
          <table className="table table-bordered">
            <tbody>
              <tr>
                {details.map((b) => {
                  return (
                    <tr key={b.id}>
                      <td>{b.id}</td>
                      <td>{b.name}</td>
                    </tr>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>

        {this.state.tableName}
        <div className="table">
          <table className="table table-bordered">
            <thead>
              <tr>
                <td>S.No</td>
                <td>Name</td>
              </tr>
            </thead>
            <tbody>
              {this.state.schFrnds.map((s) => {
                return (
                  <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default TableComp;
