import React, { useState, Component } from "react";
import Modal from "./Modal";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  return (
    <>
      <div onClick={() => setCount(count + 1)}>No.of Clicks:{count}</div>
      <p>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <strong>{name}</strong>
      </p>
      <Modal>
        <Child />
      </Modal>
    </>
  );
};

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
