import React, { Component } from "react";

class MapAndList extends Component {
  render() {
    var numbers = [1, 2, 3, 4, 5];
    const multiplyNum = numbers.map((number) => {
      return <ul key={number.toString()}>{number * 5}</ul>;
    });

    const names = ["john", "bob", "robin", "josie"];
    const namesList = names.map((name) => {
      return <li key={name.toString()}>{name}</li>;
    });

    return (
      <div>
        {multiplyNum}
        {namesList}
      </div>
    );
  }
}

export default MapAndList;
