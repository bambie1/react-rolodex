import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      rappers: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ rappers: users }));
  }

  render() {
    const { rappers, searchField } = this.state; //destructuring
    const filtRappers = rappers.filter((rapper) =>
      rapper.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="search rappers"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList rappers={filtRappers} />
      </div>
    );
  }
}

export default App;
