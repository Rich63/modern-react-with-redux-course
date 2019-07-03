import React from 'react';

const Spinner = (props) => {
  return (
      <div className="ui active dimmer">
        <div className="ui big text loader">{ props.message }</div>
      </div>
  );
};

// When there is no props.message this will be in place
Spinner.defaultProps = {
  message: "Loading...."
};

export default Spinner;