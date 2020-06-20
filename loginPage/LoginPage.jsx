import React, { Component } from "react";
import "./Style.css";

class LoginPage extends Component {
  render() {
    return (
      <form className="loginPage">
        <div className="container1">
          <h2 className="welcome">WELCOME!</h2>
          <br />
          <h3 className="desc">Enter your ID and Password</h3>
        </div>
        <div className="container2">
          <p className="heading">SIGN IN</p>
          <input
            className="uname"
            type="text"
            placeholder="Enter User Name Here"
          />
          <br />
          <input className="pwd" type="password" placeholder="Enter Password" />
          <br />
          <div className="button">
            <button className="btn">Login</button>
          </div>
          <div className="forgotPwd">
            <a href="#" className="forgot">
              Forgot Password
            </a>
          </div>
        </div>
      </form>
    );
  }
}

export default LoginPage;
