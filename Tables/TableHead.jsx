import React, { Component } from "react";

class TableHead extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {this.props.headers.map((h) => {
          return (
            <>
              {h.value1 && <th>{h.value1}</th>}
              {h.value2 && <th>{h.value2}</th>}
              {h.value3 && <th>{h.value3}</th>}
              {h.value4 && <th>{h.value4}</th>}
              {h.value5 && <th>{h.value5}</th>}
              {h.value6 && <th>{h.value6}</th>}
              {h.value7 && <th>{h.value7}</th>}
              {h.value8 && <th>{h.value8}</th>}
              {h.value9 && <th>{h.value9}</th>}
            </>
          );
        })}
      </>
    );
  }
}

export default TableHead;
