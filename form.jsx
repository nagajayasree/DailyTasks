import React, { Component } from "react";

//conditional rendering
class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  myChangeHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  mySubmitHandler = () => {
    alert(" You are submitting " + this.state.name);
  };
  render() {
    let header = "";
    if (this.state.name) {
      header = <h1>Hello {this.state.name}</h1>;
    } else {
      header = "";
    }
    return (
      <form onSubmit={this.mySubmitHandler}>
        {header}
        <p>Enter your name:</p>
        <input type="text" onChange={this.myChangeHandler} />
        <input type="submit" />
      </form>
    );
  }
}

export default MyForm;
