import React, { Component } from "react";
import "./App.css";
import Number from "./Code/Advanced/RenderProps/Number";
import AddNum from "./Code/Advanced/RenderProps/AddNum";
import MulNum from "./Code/Advanced/RenderProps/MulNum";
import ConcatName from "./Code/Advanced/RenderProps/ConcatName";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      name: "jaya",
    };
  }

  handleIncrement = () => {
    this.setState({ num: this.state.num + 1 });
  };

  handleDecrement = () => {
    if (this.state.num > 0) {
      this.setState({ num: this.state.num - 1 });
    }
  };
  render() {
    return (
      <div className="App">
        <Number
          number={this.state.num}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        <AddNum num={this.state.num} />
        <MulNum num={this.state.num} />
        <ConcatName name={this.state.name} />
      </div>
    );
  }
}

export default App;
