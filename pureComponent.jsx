import React, { PureComponent } from "react";

class TestComp extends PureComponent {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = { number: 1 };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ number: 1 });
    }, 2000);
    console.log("mounted");
  }

  render() {
    console.log("rendered");
    return <div>{this.state.number}</div>;
  }
}

export default TestComp;
