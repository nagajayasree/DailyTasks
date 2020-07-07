import React, { Component } from "react";

class SearchFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: [
        { id: 1, name: "Apples" },
        { id: 2, name: "Grapes" },
        { id: 3, name: "Bananas" },
        { id: 4, name: "Papayas" },
        { id: 5, name: "Oranges" },
        { id: 6, name: "Mangoes" },
        { id: 7, name: "PineApples" },
        { id: 8, name: "Kiwis" },
        { id: 9, name: "DragonFruits" },
        { id: 10, name: "Jackfruits" },
      ],
      filteredFruits: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({ filteredFruits: e.target.value });
    // console.log("input", e.target.value);
    console.log(this.state.filteredFruits);
  };

  render() {
    return (
      <div className="container">
        <h1>Search Filter</h1>
        <div>
          <input
            type="text"
            value={this.state.filteredFruits}
            onChange={this.onChangeHandler}
            pattern={"[A-Za-z]"}
          />
          {this.state.fruits
            .filter((e) => e.name.includes("Apples"))
            .map((fruit) => {
              return (
                <ul className="list-group" key={fruit.id}>
                  <ol className="list-group-item" key={fruit.id}>
                    {fruit.name}
                  </ol>
                </ul>
              );
            })}
        </div>
      </div>
    );
  }
}

export default SearchFilter;
