import React, { Component } from "react";
import axios from "axios";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((info) => console.log(info));

    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      this.setState({ users: result.data });
    });
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {this.state.users.map((person) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Users;
