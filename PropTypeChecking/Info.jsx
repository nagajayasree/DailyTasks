import React, { Component } from "react";
import propTypes from "prop-types";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "jaya",
    };
  }

  static defaultProps = {
    name: "stranger",
  };

  render() {
    const children = this.props.children;
    return (
      <>
        <p>{children}</p>
        Hello {this.props.name}
      </>
    );
  }
}

// Info.defaultProps = {
//   name: "js",
// };

Info.propTypes = {
  children: propTypes.element.isRequired,
};

export default Info;
