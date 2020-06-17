import React, { Component } from "react";

//Before lifting state up
class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    let value = this.state.count;
    let check =
      value > 0
        ? this.setState({ count: this.state.count - 1 })
        : this.state.count;
    return check;
  };

  render() {
    return (
      <div>
        <p>Counter : {this.state.count}</p>
        <input type="button" value="Increment" onClick={this.increment} />
        <input type="button" value="Decrement" onClick={this.decrement} />
      </div>
    );
  }
}

//after lifting State up
class Counter extends Component {
  render() {
    const myStyle = {
      color: "blue",
    };
    return (
      <div style={myStyle}>
        <h1>Counter : {this.props.count}</h1>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
