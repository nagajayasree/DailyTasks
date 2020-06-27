import React, { Component } from "react";
import Details from "./Details";
import Address from "./Address";
import Education from "./Education";

class Student extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-sm-12">
          <h3>Student Registration Form EAMCET 2020</h3>
          <form action="">
            <div className="form-group">
              <div className="row">
                <Details />
                <Address />
                <Education />
                <div className="col-sm-1">
                  <label htmlFor="submit">
                    <input type="button" value="Submit" />
                  </label>
                </div>
                <div className="col-sm-1">
                  <label htmlFor="refresh">
                    <input type="button" value="Refresh" />
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Student;
