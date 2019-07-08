import React from 'react';

class SearchBar extends React.Component {

  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  // pass down callback from App component 
  // tells the app that the user just submitted the form
  onSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term); 
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={ this.onSubmit } className="ui form">
          <div className="field">
            <label>Utube Search</label>
            <input 
              type="text"
              value={ this.state.term }
              onChange={ this.onInputChange }
            />
          </div>
        </form>
      </div>
    );
  };
};

export default SearchBar;