import React, { Component } from "react";
import FirstName from "./FirstName";
import LastName from "./LastName";

class Names extends Component {
  state = {
    firstName: "jayasree",
    lastName: "ramaka",
  };
  render() {
    return (
      <>
        {this.props.render(this.state)}
        {/* <FirstName name="js" /> */}
        {/* <LastName name="r" /> */}
      </>
    );
  }
}

export default Names;
