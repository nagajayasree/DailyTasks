import React, { Component } from "react";
import "./LoginPage.css";
import LoginPage2 from "./LoginPage2";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    let list = [
      { id: "1", desc: "jaya", descID: "123" },
      { id: "2", desc: "sree", descID: "456" },
    ];
    this.state = {
      userId: "",
      password: "",
      matchPwd: "abcxyz",
      login: false,
      userList: list,
    };
  }

  changeLoginId = (e) => {
    this.setState({ userId: e.target.value });
  };

  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleClick = (e) => {
    if (this.state.password == this.state.matchPwd) {
      this.setState({ login: true });
    } else {
      alert("Wrong Password!");
    }
    // alert("You are loggedin" + " " + this.state.userId);
  };
  render() {
    if (this.state.login) {
      return <LoginPage2 userList={this.state.userList} />;
    }
    return (
      <div className="container-fluid main_page">
        <div className="row">
          <div className="header_block">
            <div className="col-sm-4 col-xs-6">
              <h1 id="greet">WELCOME!</h1>
              <p id="info">React Developer</p>
              <div className="phone_content">
                <p id="phone_info">Student</p>
              </div>
            </div>
          </div>
          <div className="col-sm-8 col-xs-6">
            <div className="login_block">
              <form>
                <h4 className="signin">SIGN IN</h4>
                <div className="form-group">
                  <div className="input_tag">
                    <label htmlFor="uname" placeholder="Enter Id">
                      UserId:
                      <input
                        className="input_tag1"
                        type="text"
                        onChange={this.changeLoginId}
                      />
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input_tag">
                    <label htmlFor="pwd" placeholder="Enter Password">
                      Password:
                      <input
                        className="input_tag2"
                        type="text"
                        onChange={this.changePassword}
                      />
                    </label>
                  </div>
                  <div className="button_login">
                    <input
                      type="button"
                      value="Login"
                      className="button_tag"
                      onClick={this.handleClick}
                    />
                    {/* <button className="button_tag">Login</button> */}
                  </div>
                  <a className="forgotpwd" href="">
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
