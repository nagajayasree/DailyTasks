import React from "react";
import "./App.css";
import ClickCounter from "./RenderAsProps/ClickCounter";
import HoverCounter from "./RenderAsProps/HoverCounter";
import User from "./RenderAsProps/User";
import Counter from "./RenderAsProps/Counter";

function App() {
  return (
    <div className="App">
      <User render="Welcome" name={(isLoggedIn) => isLoggedIn ? "js" : "Guest"} />
      <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />

      <Counter
        render={(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      />
    </div>
  );
}

export default App;
