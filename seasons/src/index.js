import React from 'react';
import ReactDOM from 'react-dom';
//import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);

    // THIS IS THE ONLY TIME we do direct assignment to this.state 
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
    position => {
      this.setState({ lat: position.coords.latitude });
      //NEVER, NEVER,NEVER,
      //NEVER DO SOMETHING LIKE: this.state.lat = position.coords.latitude
    },
    err => {
      this.setState({ errorMessage: err.message })
    });
  }

  // below render with if statements is called conditional rendering
  render() {
    if (this.state.errorMessage && !this.state.lat) {
    return (
      <div>
        Error: { this.state.errorMessage } 
      </div>
    )};

    if (!this.state.errorMessage && this.state.lat) {
    return (
      <div>
        Latutude: { this.state.lat } 
      </div>
    )};

    return <div>loading.....</div>
  };
};

ReactDOM.render(<App />, document.querySelector('#root'));