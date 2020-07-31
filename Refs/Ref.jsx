import React, { Component } from "react";

class RefComp extends Component {
  constructor() {
    super();
    this.state = { task: "", name: "" };
  }

  //without using refs
  changeTask = (e) => {
    this.setState({ task: e.target.value });
  };

  //using refs
  changeName = () => {
    this.setState({ name: this.refs.Name.value });
  };

  render() {
    return (
      <>
        Todo List
        <div>
          <input type="text" onChange={this.changeTask} />
          <br />
          <em>{this.state.task}</em>
        </div>
        <br />
        <div>
          Name
          {/* using refs */}
          <input type="text" ref="Name" onChange={this.changeName} />
          <br />
          <em>{this.state.name}</em>
        </div>
      </>
    );
  }
}

export default RefComp;
