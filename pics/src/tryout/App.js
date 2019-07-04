import React, { Component } from "react";
import SearchBar from "./SearchBar";
 
class App extends Component {
  state = {
    term: ""
  };
 
  handleInputChange = e => {
    this.setState({
      term: e.target.value
    });
  };
 
  handleFormSubmit = e => {
    e.preventDefault();
    console.log(this.state.term);
  };
 
  render() {
    const { handleFormSubmit, handleInputChange } = this;
    const { term } = this.state;
    const style = { marginTop: "10px" };
    return (
      <div className="ui container" style={style}>
        <SearchBar
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          term={term}
        />
      </div>
    );
  }
}
 
export default App;


