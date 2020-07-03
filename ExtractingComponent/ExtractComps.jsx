import React, { Component } from "react";
import ChildComponent from "./Components";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: Date(),
      text: "Happy Coding",
      author: {
        name: "Hello Kitty",
        avatarUrl: "https://placekitten.com/g/64/64",
      },
    };
  }

  formatDate = (date) => {
    this.setState({ date: date.Date.getDate() });
  };

  render() {
    return (
      <div>
        <ChildComponent
          date={this.state.date}
          text={this.state.text}
          author={this.state.author}
        />
      </div>
    );
  }
}

export default Comment;
