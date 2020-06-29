import React, { Component } from "react";

class LifeCycleMethods extends Component {
  state = {
    greet: "",
    count: 0,
  };

  componentDidMount() {
    console.log("componentDidMounted");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleReset);
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleReset = () => {
    console.log("componentWillUnMount");
  };

  render() {
    return (
      <div>
        {this.state.greet}
        <div>Hello React</div>
        Count {this.state.count}
        <div>
          <button onClick={this.handleIncrement}>Click</button>
        </div>
        <div>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default LifeCycleMethods;
