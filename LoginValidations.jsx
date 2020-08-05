import React, { Component } from "react";

class LoginVal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      checkName: null,
      checkPwd: null,
      showPwd: true,
      nameError: "Name Error",
      pwdError: "Pwd Error",
      pwdType: null,
    };
  }

  changeUname = (e) => {
    this.setState({ username: e.target.value });
    if (this.state.username.length + 1 < 3) {
      this.setState({ checkName: "username is too short" });
    } else {
      this.setState({ checkName: null });
    }
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  changePwd = (e) => {
    this.setState({ password: e.target.value });
    if (this.state.password.length + 1 < 8 && !Number(this.state.password)) {
      this.setState({
        checkPwd: "Should contain min 8 chars and number",
      });
    }
    // if () {
    //   this.setState({ pwdError: "" });
    // }
    else {
      this.setState({ checkPwd: null });
    }
  };

  render() {
    console.log(this.state.pwdType);
    return (
      <>
        <h3>User Login</h3>
        {/* {this.state.username.length + 1 < 5
          ? this.state.nameError
          : this.state.checkName} */}
        <p>{this.state.checkName}</p>
        <p>{this.state.checkPwd}</p>
        <form>
          <div>
            <label htmlFor="uname">
              UserName:
              <input onChange={this.changeUname} />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email:
              <input type="email" />
            </label>
          </div>
          <div>
            <label htmlFor="pwd">
              Password:
              <input
                onChange={this.changePwd}
                // type={
                //   typeof this.state.password !== "number"
                //     ? "It should be number"
                //     : this.state.showPwd === true
                //     ? "text"
                //     : "password"
                // }
              />
            </label>
          </div>
        </form>
      </>
    );
  }
}

export default LoginVal;
