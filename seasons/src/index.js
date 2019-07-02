import React from 'react';
import ReactDOM from 'react-dom';
//import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  // constructor(props) {  // Good place to do one-time setup
  //   super(props);
  //   this.state = { lat: null, errorMessage: '' };
  // };

  state = { lat: null, errorMessage: '' };

  componentDidMount() { // Good place to do data-loading
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  };

  componentDidUpdate() {  // Good place to do more data-loading when state/props change
    console.log('My component was just updated - it rerendered');
  };

  componentWillUnmount() {  // Good place to do cleanup (especially for non-react stuff)
    console.log('My component was just unmounted');
  };

  render() {  // avoid doing anything besides returning JSX
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          Error: { this.state.errorMessage } 
        </div>
      )
    };

    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          Latutude: { this.state.lat } 
        </div>
      )
    };

    return <div>loading.....</div>
  };
};

ReactDOM.render(<App />, document.querySelector('#root'));