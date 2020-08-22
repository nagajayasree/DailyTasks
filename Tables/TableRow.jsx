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
              {/* {r.row && <td>{r.row}</td>} */}
              {/* <td>{r.name}</td> */}
              {/* <td>{r.relation}</td> */}
              {/* {r.age && <td>{r.age}</td>} */}
              {r.value1 && <td>{r.value1}</td>}
              {r.value2 && <td>{r.value2}</td>}
              {r.value3 && <td>{r.value3}</td>}
              {r.value4 && <td>{r.value4}</td>}
              {r.value5 && <td>{r.value5}</td>}
              {r.value6 && <td>{r.value6}</td>}
              {r.value7 && <td>{r.value7}</td>}
              {r.value8 && <td>{r.value8}</td>}
            </tr>
          );
        })}
      </>
    );
  }
}

export default TableRow;
