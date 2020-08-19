import React, { Component } from "react";

class Addr extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="address">
            <label htmlFor="addr">
              Address:
              <input
                type="text"
                value={this.props.address}
                name="address"
                onChange={this.props.onChange}
              />
            </label>
          </div>
          <div>
            <input type="submit" />
          </div>
        </div>
      </>
    );
  }
}

export default Addr;
