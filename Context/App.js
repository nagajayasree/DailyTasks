import React from "react";
import "./App.css";
import CompA from "./CodeEvolution/Context/ComponentA";
import { UserProvider } from "./CodeEvolution/Context/userContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="js">
        <CompA />
      </UserProvider>
    </div>
  );
}

export default App;
