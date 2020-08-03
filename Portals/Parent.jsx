import React, { useState, Component } from "react";
import Modal from "./Modal";
import "./portal.css";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
  }

  handleClick = () => {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}

// const Parent = () => {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("");
//   return (
//     <>
//       <div onClick={() => setCount(count + 1)}>No.of Clicks:{count}</div>
//       <p>
//         Name:
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br />
//         <strong>{name}</strong>
//       </p>
//       <Modal>
//         <Child />
//       </Modal>
//     </>
//   );
// };

function Child() {
  return (
    <>
      <div className="modal">
        <button>Click</button>
      </div>
    </>
  );
}

export default Parent;
