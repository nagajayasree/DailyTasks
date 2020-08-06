import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    case "dec":
      return { count: state.count - 1 <= 0 ? 0 : state.count - 1 };
    case "reset":
      return { count: (state.count = 0) };
    default:
      throw new Error();
  }
}

function ReducerHook() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count:{state.count}
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default ReducerHook;
