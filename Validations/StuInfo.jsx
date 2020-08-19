import React, { Component } from "react";
import ParentsInfo from "./ParentsInfo";
import Addr from "./Addr";

// const DetailContext = createContext();

class StuInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      firstName: "",
      lastName: "",
      motherName: "",
      fatherName: "",
      address: "",
      isError: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // noError = () => {
  //   try {
  //     this.state.lastName.charAt(0) !==
  //       this.state.lastName.toString.startsWith(/^[A-Z]/);
  //   } catch (isError) {
  //     this.setState({ isError: null });
  //   }
  // };

  validate = (e) => {
    e.preventDefault();

    if (this.state.firstName === "") {
      this.setState({ firstName: "FirstName is required" });
    } else if (isNaN(this.state.firstName) === false) {
      this.setState({ firstName: "INVALID ENTRY" });
    } else if (this.state.firstName.length < 5) {
      this.setState({ firstName: "Password too short" });
    } else {
      this.setState({ firstName: this.state.firstName });
    }

    if (this.state.lastName === "") {
      this.setState({ lastName: "LastName is required" });
    } else if (
      this.state.lastName.charAt(0) !== this.state.lastName.match(/^[A-Z]/)
    ) {
      this.setState({ lastName: this.state.lastName.charAt(0).toUpperCase() });
    } else {
      this.setState({ lastName: this.state.lastName });
    }

    if (this.state.motherName === "") {
      this.setState({ motherName: "Field must be filled" });
    }

    if (this.state.fatherName === "") {
      this.setState({ fatherName: "Field must be filled" });
    }

    if (this.state.address === "") {
      this.setState({ address: "Field is empty" });
    }
  };

  render() {
    return (
      <>
        {/* <DetailContext.Provider name={this.state.name}>
          <ParentsInfo />
        </DetailContext.Provider> */}
        <div className="container">
          <h2>Student Information</h2>
          <form onSubmit={this.validate}>
            {/* {this.state.firstName} */}
            <div className="fname">
              <label htmlFor="firstname">
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  // value={this.state.firstName === "" ? "name required" : this.state.firstName}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="lname">
              <label htmlFor="lastname">
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <ParentsInfo
              validate={this.validate}
              onChange={this.handleChange}
              fatherName={this.state.fatherName}
              motherName={this.state.motherName}
            />
            <Addr
              validate={this.validate}
              onChange={this.handleChange}
              address={this.state.address}
            />
          </form>
        </div>
      </>
    );
  }
}

export default StuInfo;
