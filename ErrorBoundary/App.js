import React from "react";
import "./App.css";
import PwdCheck from "./Code/Advanced/ErrorBoundary/PwdCheck";
import OtherComp from "./Code/Advanced/ErrorBoundary/OtherComp";
import ErrorBoundary from "./Code/Advanced/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <PwdCheck reEnterPwd="jayasree" />
      </ErrorBoundary>
      <OtherComp />
    </div>
  );
}

export default App;
