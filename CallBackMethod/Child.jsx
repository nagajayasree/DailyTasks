import React, { Component } from "react";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empName: "Ram",
      empId: 13657,
      place: "Hyd",
      isCity: true,
    };
  }

  render() {
    return (
      <div>
        <p>
          {this.state.empName} lives in {this.state.place} which is{" "}
          {this.state.isCity == true ? "Urban" : "Rural"} area,
          {this.props.children}
        </p>
        <div>
          <button onClick={() => this.props.ageIncrement(1)}>
            IncrementAge
          </button>
        </div>
        <div>
          <button onClick={() => this.props.ageDecrement(1)}>
            DecrementAge
          </button>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
