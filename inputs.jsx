import React, { Component } from "react";

class Mobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
      numberOfApps: 2,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === "isActive" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <label>
          Is active:
          <input
            type="checkbox"
            name="isActive"
            checked={this.state.isActive}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of Apps:
          <input
            type="number"
            name="numberOfApps"
            value={this.state.numberOfApps}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}

export default Mobile;
