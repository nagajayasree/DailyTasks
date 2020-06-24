import React, { Component } from "react";
import "./LoginPage2.css";

class LoginPage2 extends Component {
  state = {};
  render() {
    const { userList } = this.props;
    console.log(userList);
    return (
      <div className="container">
        <div className="content">
          <h2>User Info</h2>
          <table className="table table-borderless table-hover">
            <thead>
              {userList.map((e) => {
                return (
                  <tr key={e.descID}>
                    <td>{e.desc}</td>
                  </tr>
                );
              })}
              <tr>
                <th>Name</th>
                <th>Contact No</th>
                <th>Email-Id</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jack</td>
                <td>9894456786</td>
                <td>jack124@gmail.com</td>
              </tr>
              <tr>
                <td>Marry</td>
                <td>8357826594</td>
                <td>rosemarry@gmail.com</td>
              </tr>
              <tr>
                <td>Bob</td>
                <td>8765397209</td>
                <td>bob3802@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default LoginPage2;
