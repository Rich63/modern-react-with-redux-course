/* 
The parent App component is passing a reference of the
  onSearchSubmit method to the SearchBar child as props, 
  naming it onSubmit. (Your interpretation of this was correct)
  The SearchBar component will make use of that onSubmit props
  and invoke the callback with our term state in the onFormSubmit
  event handler:  this.props.onSubmit(this.state.term);
  This line of code represents the SearchBar communicating back up
  to the parent, which completes the diagram in the beginning.
  When the callback is invoked in SearchBar, this.state.term 
  will be provided as the 'term' argument, so again, your 
  interpretation is correct. */

/* 
onSearchSubmit(term) doesn't know what the value of term is,
  therefor it is passed to the SearchBar component as a callback
  to onFormSubmit where it receives value of term, and lastly
  onSearchSubmit is invoked with value of term, thus logging it
  to the console. */

import React from 'react';
import SearchBar from "./SearchBar" 

class App extends React.Component {
      // the term is logged out here, this is called from 
      // SearchBar.js the line: this.props.onSubmit(this.state.term);
  onSearchSubmit(term) {
    console.log(term);
  }
    // the onSubmit is an arbitrary name for one of the props that 
    // passes the function reference onSearchSubmit
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={ this.onSearchSubmit } />
      </div>
    );
  };
}

export default App;