import React, { Component } from "react";

class Address extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <form action="">
              <div className="form-group">
                <label htmlFor="address">
                  <div className="row">
                    <div className="col-sm-4">Address</div>
                    <div className="col-sm-2">:</div>
                    <div className="col-sm-2">
                      <textarea
                        name="address"
                        cols="45"
                        rows="6"
                        placeholder="Enter your Address"
                      ></textarea>
                    </div>
                  </div>
                </label>
                <label htmlFor="city">
                  <div className="row">
                    <div className="col-sm-6">City</div>
                    <div className="col-sm-2">:</div>
                    <div className="col-sm-4">
                      <input type="text" />
                    </div>
                  </div>
                </label>
                <label htmlFor="pincode">
                  <div className="row">
                    <div className="col-sm-6">Pin Code</div>
                    <div className="col-sm-2">:</div>
                    <div className="col-sm-4">
                      <input type="text" />
                    </div>
                  </div>
                </label>
                <label htmlFor="state">
                  <div className="row">
                    <div className="col-sm-6">State</div>
                    <div className="col-sm-2">:</div>
                    <div className="col-sm-4">
                      <input type="text" />
                    </div>
                  </div>
                </label>
                <label htmlFor="country">
                  <div className="row">
                    <div className="col-sm-6">Country</div>
                    <div className="col-sm-2">:</div>
                    <div className="col-sm-4">
                      <input type="text" value="India" />
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

export default Address;
