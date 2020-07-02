import React, { Component } from "react";

class SubComp extends Component {
  render() {
    //state will be moved to parent component,
    //this becomes a controlled component,
    //because it doesn't have any state,
    //receives data,methods,via props
    return (
      <div>
        {this.props.Greet}
        <h5>Teacher's Info</h5>
        <h6>Name:{this.props.Name}</h6>
        <h6>Age:{this.props.Age}</h6>
        <h6>Profession:{this.props.Profession}</h6>
        <h6>
          Working:
          {this.props.Working === true ? "Yes" : "No"}
        </h6>
        <h6>
          Financial Status:
          {this.props.Age > 60 && this.props.Salary < 2000 ? "Poor" : "Good"}
        </h6>
      </div>
    );
  }
}

export default SubComp;
