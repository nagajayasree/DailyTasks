import React, { useState, Fragment } from "react";
import { useEffect } from "react";

const HookPrac = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `${name} has clicked ${count} times!`;
    let greeting = document.getElementById("greet");
    console.log(greeting.innerHTML);
    // document.write(Date());
    // console.log(`${name} has clicked ${count} times!`);
  });

  return (
    <Fragment>
      <h1 id="greet">Hello</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        {name} won the game {count} times!
      </div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </Fragment>
  );
};

export default HookPrac;
