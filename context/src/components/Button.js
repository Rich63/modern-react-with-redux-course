import React from 'react';
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  // Adding a new property to the class Button called contextType
  // below static is the same as writing 'Button.contextType = LanguageContext'
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Indienen';
    return (
      <button className="ui button primary">{ text }</button>
    );
  };
}

export default Button;