import React from 'react';

class SearchBar extends React.Component {

  state = { term: '' };

  onFormSubmit = (e) => {
    e.preventDefault();
    // onSubmit props is passed from App.js
    /* When the form is submitted, the onFormSubmit class method is
        called which invokes, or calls our callback - 
        this.props.onSubmit with this.state.term as an argument. */
    this.props.onSubmit(this.state.term); 
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={ this.onFormSubmit } className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input 
              type="text"
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