import React from "react";

function Child(props) {
  return (
    <div>
      <button onClick={props.greetHandler}>Greet Parent</button>
      <button onClick={() => props.wishHandler('Happy Fathers Day')}>Wish Parent</button>
    </div>
  );
}

export default Child;
