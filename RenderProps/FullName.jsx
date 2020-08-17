import React, { Component } from "react";
import Names from "./Names";
import FirstName from "./FirstName";
import LastName from "./LastName";

class FullName extends Component {
  render() {
    return (
      <>
        <Names render={(n) => <FirstName first={n} />} />
        <Names render={(n) => <LastName last={n} />} />
      </>
    );
  }
}

export default FullName;
