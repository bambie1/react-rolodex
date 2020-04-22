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
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    var targetUrl = "https://jsonplaceholder.typicode.com/users";
    fetch(proxyUrl + targetUrl)
      .then((res) => res.json())
      .then((users) => this.setState({ rappers: users }));
  }

  handleChange = (e) => { // lex-scoping?? with arrow functions
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { rappers, searchField } = this.state; //destructuring
    const filtRappers = rappers.filter((rapper) =>
      rapper.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Rappers Rolodex</h1>
        <SearchBox
          placeholder="search rappers"
          handleChange={this.handleChange}
        />
        <CardList rappers={filtRappers} />
      </div>
    );
  }
}

export default App;
