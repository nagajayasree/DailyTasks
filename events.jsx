import React, { Component } from "react";

class Book extends Component {
  constructor(props) {
    super(props);
    this.pageTurn = this.pageTurn.bind(this);
  }
  open() {
    alert("you opened the book");
  }
  // using arrow function
  close = () => {
    alert(this);
  };
  //binding to the constructor
  pageTurn() {
    alert(this);
  }
  //passing args
  openPageNo = (n) => {
    alert(n);
  };
  //binding event handler to 'this'
  tearPageNo(n) {
    alert(n);
  }
  //event as arg
  read = (a, b) => {
    alert(a);
    alert(b.type);
  };
  //with bind method
  write = (a, b) => {
    alert(b.type);
  };

  render() {
    return (
      <div>
        <button onClick={this.open}>Open</button>
        <button onClick={this.close}>Close</button>
        <button onClick={this.pageTurn}>Turn page</button>
        <button onClick={() => this.openPageNo("1")}>Open page</button>
        <button onClick={this.tearPageNo.bind(this, "2")}>Tear Page</button>
        <button onClick={(event) => this.read("3", event)}>Paste</button>
        <button onDoubleClick={(event) => this.read("5", event)}>Paste</button>
        <button onClick={this.write.bind(this, "Hello")}>Write</button>
      </div>
    );
  }
}

export default Book;
