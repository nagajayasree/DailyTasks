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
      search: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({ search: e.target.value });
    //console.log(input,e.target.value);
  };

  render() {
     let filteredFruits = this.state.fruits.filter((fruit) => {
      return (
        fruit.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    return (
      <div className="container">
        <h1>Search Filter</h1>
        <div>
          <input
            type="text"
            value={this.state.search}
            onChange={this.onChangeHandler}
          />
          {filteredFruits
            // .filter((e) => e.name.includes("G"))
            .map((fruit) => {
              return (
                <ul className="list-group" key={fruit.id}>
                  <ol
                    className="list-group-item"
                    key={fruit.id}
                  >
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
