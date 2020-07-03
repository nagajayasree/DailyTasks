import React, { Component } from "react";

class ChildComponent extends Component {
  render() {
    return (
      <div>
        <div className="image">
          <img src={this.props.author.avatarUrl} alt={this.props.author.name} />
        </div>
        <div className="author_name">{this.props.author.name}</div>
        <div className="text">{this.props.text}</div>
        <div className="date">{this.props.date}</div>
      </div>
    );
  }
}

export default ChildComponent;
