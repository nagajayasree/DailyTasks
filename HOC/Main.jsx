//in App.js
import React, { Component } from "react";
import MainComp from "./Advanced/HOC/Main";

class App extends Component {
  render() {
    return (
      <div>
        <MainComp />
      </div>
    );
  }
}

export default App;

//in Main.jsx
import React, { Component } from "react";
import ItemCounter from "./Items";
import AgeCounter from "./Age";

class MainComp extends Component {
  state = {};
  render() {
    return (
      <>
        <ItemCounter id={1} desc={"No.of Items"} />
        <hr />
        <AgeCounter id={2} desc={"Age of a person"} />
      </>
    );
  }
}

export default MainComp;
