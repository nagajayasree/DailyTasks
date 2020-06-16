import React, { Component } from "react";

class ErrorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errormessage: "",
    };
  }

  onChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = "";
    if (nam === "password") {
      if ((val != "") & (val.length < 6)) {
        err = <strong style={{color:'red'}}>Password is too short!</strong>;
        // err = alert('password is too short!');
      }
    }
    this.setState({ [nam]: val });
    this.setState({ errormessage: err });
  };

  render() {
    return (
      <form>
        <h1>Welcome {this.state.username}</h1>
        Username:
        <input type="text" name="username" onChange={this.onChange} />
        <br />
        Password:
        <input type="password" name="password" onChange={this.onChange} />
        <br />
        {this.state.errormessage}
      </form>
    );
  }
}

export default ErrorForm;
