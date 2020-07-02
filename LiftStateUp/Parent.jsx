import React, { Component } from "react";
import SubComp from "./Child";

class MainComp extends Component {
  state = {
    name: "Rakul",
    age: 35,
    profession: "teacher",
    job: {
      isWorking: true,
      salary: "Rs.20,000",
    },
  };

  greetPerson = () => {
    return (
      <div>
        Hello {this.state.name === "Rahul" ? "Rahul" : "Teacher"},Have a good
        day!
      </div>
    );
  };

  render() {
    return (
      <div>
        <h1>Lifting State Up</h1>
        <SubComp
          Name={this.state.name}
          Age={this.state.age}
          Profession={this.state.profession}
          Working={this.state.job.isWorking}
          Salary={this.state.job.salary}
          Greet={this.greetPerson()}
        />
      </div>
    );
  }
}

export default MainComp;
