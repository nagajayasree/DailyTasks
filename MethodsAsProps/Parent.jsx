import React, { Component } from "react";
import Child from "./Child";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Parent",
    };
    this.greetParent = this.greetParent.bind(this);
    this.wishParent = this.wishParent.bind(this);
  }

  greetParent() {
    alert(`Hello ${this.state.parentName}`);
  }

  wishParent(wish) {
      alert(`Hello ${this.state.parentName},${wish}`)
  }

  render() {
    return (
      <div>
        <Child greetHandler={this.greetParent} wishHandler={this.wishParent}  />
      </div>
    );
  }
}

export default ParentComponent;
