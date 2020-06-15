import React, { Component } from "react";

class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "music" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("You have selected: " + this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your activity:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="studies">Studies</option>
            <option value="games">Games</option>
            <option value="swimming">Swimming</option>
            <option value="music">Music</option>
            <option value="dance">Dance</option>
            <option value="others">Other Activities</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Activities;
