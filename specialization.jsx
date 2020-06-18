function App() {
  return (
    <div className="App">
      <BgColor top={<TopComponent />} bottom={<BottomComponent />}>
        <p>This is children</p>
      </BgColor>
    </div>
  );
}
export default App;

import React, { Component } from "react";
class BgColor extends Component {
  render() {
    return (
      <div>
        {/* specialization */}
        {this.props.top}
        {this.props.bottom}
        {/* composition */}
        {this.props.children}
      </div>
    );
  }
}
function TopComponent() {
  return (
    <div
      className="green"
      style={({ color: "white" }, { backgroundColor: "green" })}
    ></div>
  );
}
function BottomComponent() {
  return (
    <div
      className="blue"
      style={({ color: "white" }, { backgroundColor: "blue" })}
    ></div>
  );
}

export default BgColor;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

