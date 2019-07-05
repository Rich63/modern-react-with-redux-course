import React from "react";
     
const SearchBar = ({ handleFormSubmit, handleInputChange, term }) => {
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleFormSubmit}>
        <div className="field">
          <label>Image Search</label>
          <input
            name="search"
            type="text"
            value={term}
            onChange={handleInputChange}
            placeholder="What do you want to search?"
          />
        </div>
      </form>
    </div>
  );
};
 
export default SearchBar;