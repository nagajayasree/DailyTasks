import React, { Component } from "react";

class EssayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Write an essay about your fav dish",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("An Essay was submitted: " + this.state.value);
    event.preventDafault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
          ></textarea>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default EssayForm;
