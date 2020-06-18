import React, { Component } from "react";

class Composition extends Component {
  render() {
    return (
      <div>
        <h1>Composition</h1>
        <Tabs>
          <Content />
        </Tabs>
      </div>
    );
  }
}

function Tabs(props) {
  return <div>{props.children}</div>;
}

function Content() {
  return (
    <div>
      <p>Home</p>
      <p>AboutUs</p>
      <p>Contact</p>
      <p>Help</p>
    </div>
  );
}

export default Composition;
