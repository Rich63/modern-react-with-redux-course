import "./Clock.css";
import React from 'react';

class Clock extends React.Component {
  // below is good but then you see the time not direct on your screen
  // state = { time: null }; 

  // With below code the time is seen directly and updated every second
  state = { time: new Date().toLocaleTimeString()};
  
  componentDidMount() {
      setInterval(() => {
          this.setState({ time: new Date().toLocaleTimeString() })    
      }, 1000)
  }
  
  render() {
    return (
        <div className={`time-display`}>
            <h1>The time is:  {this.state.time}</h1>
        </div>
    );
  }
}

export default Clock;