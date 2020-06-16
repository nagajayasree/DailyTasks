import React, { Component } from "react";

class Validate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: null,
    };
  }

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  handleSubmit = (event) => {
    console.log(event.type);
    event.preventDefault();
    let age = this.state.age;
    if (!Number(age)) {
      alert("Your age must be number");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>
          Hello {this.state.username} {this.state.age}
        </h1>
        Username:
        <input type="text" name="username" onChange={this.handleChange} />
        <br />
        Age:
        <input type="text" name="age" onChange={this.handleChange} />
        <br />
        <input type="submit" />
      </form>
    );
  }
}

export default Validate;
