import React from 'react';
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";

class App extends React.Component {
  state = { language: 'english' }

  onLanguageChange = language => {
    this.setState({ language });
  }

  /*
  First LanguageContext.Provider can change the language by clicking on a flag.
  Second LanguageContext.Provider has a value of dutch which is not to be changed
  third UserCreate uses the default value from LanguageContext which is english
  */
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        </div>
        <LanguageContext.Provider value={ this.state.language }>
          <UserCreate />
        </LanguageContext.Provider>

        <LanguageContext.Provider value='dutch'>
          <UserCreate />
        </LanguageContext.Provider>

        <UserCreate />>
      </div>
    );
  };
}

export default App;