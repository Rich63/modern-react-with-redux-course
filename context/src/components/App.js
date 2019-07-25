import React from 'react';
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends React.Component {
  state = { language: 'english', color: 'blue' }

  onLanguageChange = language => {
    this.setState({ language });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        </div>
        <LanguageContext.Provider value={ this.state.language }>
          <ColorContext.Provider value={ 'red' }>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  };
}

export default App;