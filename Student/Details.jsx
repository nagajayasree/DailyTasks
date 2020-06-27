import React, { Component } from "react";

class Details extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <form action="">
              <div className="form-group">
                <label htmlFor="name">
                  <div className="row">
                    <div className="col-sm-6">Name</div>
                    <div className="col-sm-2">:</div>
                    <div className="col-sm-4">
                      <input type="text" />
                    </div>
                  </div>
                </label>
                <label htmlFor="fatherName">
                  <div className="row">
                    <div className="col-sm-6"> Father's Name</div>
                    <div className="col-sm-2">:</div>
                    <div className="col-sm-4">
                      <input type="text" />
                    </div>
                  </div>
                </label>
                <label htmlFor="motherName">
                  <div className="row">
                    <div className="col-sm-6">Mother's Name</div>
                    <div className="col-sm-2">:</div>
                    <div className="col-sm-4">
                      <input type="text" />
                    </div>
                  </div>
                </label>
                <label htmlFor="dob">
                  <div className="row">
                    <div className="col-sm-6"> Date Of Birth</div>
                    <div className="col-sm-2">:</div>
                    <div className="col-sm-4">
                      <input type="date" />
                    </div>
                  </div>
                </label>
                <label htmlFor="emailId">
                  <div className="row">
                    <div className="col-sm-6"> Email-Id</div>
                    <div className="col-sm-2">:</div>
                    <div className="col-sm-4">
                      <input type="email" />
                    </div>
                  </div>
                </label>
                <label htmlFor="mobNo">
                  <div className="row">
                    <div className="col-sm-6">Mobile Number</div>
                    <div className="col-sm-2">:</div>
                    <div className="col-sm-4">
                      <input type="text" />
                    </div>
                  </div>
                </label>
                <label htmlFor="gender">
                  <div className="row">
                    <div className="col-sm-6">Gender</div>
                    <div className="col-sm-2">:</div>
                    <div className="col-sm-4">
                      <input type="radio" className="col-sm-3" />
                      <label htmlFor="male">Male</label>
                      <input type="radio" className="col-sm-3" />
                      <label htmlFor="female">Female</label>
                    </div>
                  </div>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
