// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// function getButtonText() { // reference to function
//   return 'Click on me!'
// }

function getTime() {
  return (new Date().toLocaleTimeString())
}

// Create a React component
const App = () => {
  // const buttonText = 'Click Me!'; // You can use different types as variables cq. String, Int, Array like [10, 20] etc

  // When running into error like 'Objects are not valid as a React child (found: object with keys {text})' you have to reference to {buttonText.text}
  const buttonText = { text: 'Reference to object with property text' }; 
  const style = { backgroundColor: 'blue', color: 'white' };
  const labelText = 'Enter name please:'

  return (
    <div>
      {/* <label className="label" htmlFor="name">Enter name:</label> */}
      <label className="label" htmlFor="name">{labelText}</label>
      <input id="name" type="text"/>
      {/* <button style={{ backgroundColor: 'blue', color: 'white' }}> */}
      <button style={style}>
        {/* {buttonText} */}
        {buttonText.text}
        {/* {getButtonText()} reference to function*/}
      </button>
      <h1>
        Time: {getTime()}
      </h1>
    </div>
  );
};

// Take the React component and show up on the screen
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
