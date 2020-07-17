import React, { Component } from "react";
import axios from "axios";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      name: "",
      id: "",
    };
  }
  
  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleChangeId = (e) => {
    this.setState({ id: e.target.value });
  };

  handleSubmitId = (e) => {
    e.preventDefault();
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then((response) => {
        console.log(response);
        console.log(response.data);
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const person = {
      name: this.state.name,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/users", { person })
      .then((response) => {
        console.log(response);
        console.log(response.data);
      });
  };


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
    <Fragment>
      <div>
        <h1>Users</h1>
        <ul>
          {this.state.users.map((person) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
      </div>
      <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Person Name:
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <button type="submit">Add</button>
          </div>
          <div>
            <label>
              Person ID:
              <input type="text" name="id" onChange={this.handleChangeId} />
            </label>
            <button onClick={this.handleSubmitId}>Delete</button>
          </div>
        </form>
     </Fragment>
    );
  }
}

export default Users;
