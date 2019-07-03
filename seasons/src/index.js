import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {

  // This is the same as a constructor
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  };

  // A helper function to avoid conditionals in render()
  renderContent() { 
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          Error: { this.state.errorMessage } 
        </div>
      )
    };

    // Here i get the state and send it as a prop to SeasonDisplay component
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={ this.state.lat } />
    };

    return <Spinner message="Please accept location request." />
  };

  render() {
    return (
      <div>
        <div>{ this.renderContent() }</div>
      </div>
    );
  };
};

ReactDOM.render(<App />, document.querySelector('#root'));