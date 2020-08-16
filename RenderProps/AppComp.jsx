import React from "react";
import "./App.css";
import DisplayName from "./DisplayName";

function App() {
  return (
    <div className="App">
      <DisplayName
        name="rnjs"
        nameFunc={() => ["jayasree", " ", "ramaka"]}
        nameFunc2={() => <p>Naga Jaya Sree</p>}
      />
    </div>
  );
}

export default App;
