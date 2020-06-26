import React, { Component } from "react";
import "./LoginPage2.css";

class LoginPage2 extends Component {
  constructor(props) {
    super(props);
    let list = [
      {
        id: "1",
        name: "Lilly",
        contactNo: "2657687898",
        mailId: "dsggd@gmail.com",
      },
      {
        id: "2",
        name: "Gill",
        contactNo: "85965989889",
        mailId: "fhjqnvj@gmail.com",
      },
      {
        id: "3",
        name: "Alice",
        contactNo: "1324354655",
        mailId: "fgklgjv@gmail.com",
      },
      {
        id: "4",
        name: "Krish",
        contactNo: "4465768798",
        mailId: "dsyfgqak@gmail.com",
      },
    ];

    this.state = {
      DataList: list,
    };
  }

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
              {this.state.DataList.map((e) => {
                return (
                  <tr key={e.id}>
                    <td>{e.name}</td>
                    <td>{e.contactNo}</td>
                    <td>{e.mailId}</td>
                  </tr>
                );
              })}
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
               {userList.map((e) => {
                return (
                  <tr key={e.uid}>
                    <td>{e.uname}</td>
                    <td>{e.descID}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default LoginPage2;
