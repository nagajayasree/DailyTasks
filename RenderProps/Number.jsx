import React from "react";
const Number = ({ number, onIncrement, onDecrement }) => {
  return (
    <>
      <p>Number {number}</p>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </>
  );
};

export default Number;

// import React, { Component } from "react";
// import AddNum from "./AddNum";
// import MulNum from "./MulNum";
// import ConcatName from "./ConcatName";

// class Number extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       num: 0,
//       name: "jaya",
//     };
//   }

//   handleIncrement = () => {
//     this.setState({ num: this.state.num + 1 });
//   };

//   handleDecrement = () => {
//     if (this.state.num > 0) {
//       this.setState({ num: this.state.num - 1 });
//     }
//   };

//   render() {
//     return (
//       <>
//         <p>Number taken is:{this.state.num}</p>
//         <button onClick={this.handleIncrement}>Increment</button>
//         <button onClick={this.handleDecrement}>Decrement</button>
//         <AddNum num={this.state.num} />
//         <MulNum num={this.state.num} />
//         <ConcatName name={this.state.name} />
//         {this.props.children}
//       </>
//     );
//   }
// }

// export default Number;
