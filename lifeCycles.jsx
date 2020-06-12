import React, { Component } from "react";

class LifeCycles extends Component {
  constructor(props) {
    super(props);
    this.state = { name: " " };
    this.UpdateName = this.UpdateName.bind(this);
    this.testClick = this.testClick.bind(this);
    this.RemoveName = this.RemoveName.bind(this);
  }

  UpdateName(event) {
    this.setState({ name: event.target.value });
  }

  RemoveName(event){
    this.setState({name: ''});
  }

  testClick(event) {
    alert("the name entered is:" + this.state.name);
  }

  componentDidMount() {
    console.log("Mounting State : called when component is added");
  }

  shouldComponentUpdate() {
    console.log("Update  State : called when component is updated");
    return true;
  }

  componentDidUpdate() {
    console.log("Update  State : calling after the component is updated");
  }

  componentWillUnmount() {
    alert('name removed');
    console.log("UnMounting State : calling when the component is removed");
  }

  render() {
    return (
      <div>
        Enter Your Name:{''}
        <input type="text" value={this.state.name} onChange={this.UpdateName} />
        <br />
        <h2>{this.state.name}</h2>
        <input type="button" value="Click Here" onClick={this.testClick} />
        <input type="button" value="Remove" onClick={this.RemoveName} 
        onClickCapture={this.componentWillUnmount}
        />
      </div>
    );
  }
}

export default LifeCycles;
