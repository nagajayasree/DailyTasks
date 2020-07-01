import React, { Component } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
import Child4 from "./Child4";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markupLang: "HTML",
      scriptLang: "JavScript",
      framework: "Angular js",
      library: "React js",
    };
  }

  handleMarkUp = () => {
    this.setState({ markupLang: "It uses tags to define elements" });
  };

  handleScripting = () => {
    this.setState({ scriptLang: "A lang with series of commands" });
  };

  handleFrmwk = () => {
    this.setState({
      framework:
        "It is a platform for building mobile and desktop web applications",
    });
  };

  handleLib = () => {
    this.setState({
      library: "Tool for building UI components",
    });
  };

  render() {
    return (
      <div>
        This is a Parent Comp and contains Child Components
        <Child1
          markupLang={this.state.markupLang}
          handleChange={this.handleMarkUp}
        />
        <Child2
          scriptLang={this.state.scriptLang}
          handleChange={this.handleScripting}
        />
        <Child3 library={this.state.library} handleChange={this.handleLib} />
        <Child4
          framework={this.state.framework}
          handleChange={this.handleFrmwk}
        />
      </div>
    );
  }
}

export default Parent;
