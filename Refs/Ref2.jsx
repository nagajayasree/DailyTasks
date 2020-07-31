import React, { Component } from "react";

class RefComp2 extends Component {
  constructor() {
    super();
    this.myText = React.createRef();
  }

  focusInput = () => {
    this.myText.current.focus();
  };

  render() {
    return (
      <>
        <input type="text" ref={this.myText} />
        <input
          type="button"
          value="Focus the Input"
          onClick={this.focusInput}
        />
      </>
    );
  }
}

export default RefComp2;
