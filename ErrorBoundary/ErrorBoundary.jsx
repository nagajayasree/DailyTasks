import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    isError: false,
  };

  static getDerivedStateFromError(error) {
    return { isError: true };
  }

  componentDidCatch(error, info) {
    console.log(info);
    console.log(error);
  }

  render() {
    if (this.state.isError) {
      return <h3>Incorrect Pwd</h3>;
    }
    return <div>{this.props.children}</div>;
  }
}

export default ErrorBoundary;
