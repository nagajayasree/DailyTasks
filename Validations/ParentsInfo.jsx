import React, { Component } from "react";
import DetailContext from "./StuInfo";

class ParentsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {/* <DetailContext.Consumer>
          {(name) => {
            return <div>{name}</div>;
          }}
        </DetailContext.Consumer> */}
        <div className="container">
          <form>
            <div className="fathName">
              <label htmlFor="father">
                Father's Name:
                <input
                  type="text"
                  value={this.props.fatherName}
                  name="fatherName"
                  onChange={this.props.onChange}
                />
              </label>
            </div>
            <div className="mothName">
              <label htmlFor="mother">
                Mother's Name:
                <input
                  type="text"
                  value={this.props.motherName}
                  name="motherName"
                  onChange={this.props.onChange}
                />
              </label>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default ParentsInfo;
