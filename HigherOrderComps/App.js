import React from "react";
import "./App.css";
import ClickCounter from "./CodeEvolution/HigherOrderComps/ClickCounter";
import HoverCounter from "./CodeEvolution/HigherOrderComps/HoverCounter";

function App() {
  return (
    <div className="App">
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

export default App;
