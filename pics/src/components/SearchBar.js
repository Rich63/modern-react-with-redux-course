import React from 'react';

class SearchBar extends React.Component {
  // constructor() {
  //   super();

  //   binding this to the function onFormSubmit() an other solution to bind this to a function
  //   this.onFormSubmit = this.onFormSubmit.bind(this); 
  // }

  state = { term: '' };

  // onInputChange(event) {
  //   console.log(event.target.value);
  // };

  // When using onFormSubmit(e) this is undefined, by creating an arrowfunction like 
  // onFormSubmit = (e) => { } this is bind to function, one solution
  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={ this.onFormSubmit } className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* <input type="text" onChange={ (this.onInputChange) } /> */}
            <input 
              type="text"
              // term is filled every time an user types a letter because of the onChange
              value={ this.state.term }
              onChange={ (e) => this.setState({ term: e.target.value }) }
            />
          </div>
        </form>
      </div>
    );
  };
};

export default SearchBar;