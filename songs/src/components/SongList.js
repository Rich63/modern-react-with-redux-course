import React, { Component } from 'react';
import { connect } from "react-redux";
import { selectSong } from "../actions";  // getting the action

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
        return (
          <div className="item" key={ song.title }>
            <div className="right floated content">
              <button 
                className="ui button primary"
                onClick={ () => this.props.selectSong(song) } // On the mouse event onClick the action gets the selected song and put it to this.props
              >
                Select
              </button>
            </div>
            <div className="content">
              { song.title }
            </div>
          </div>
        );
    });
  };

  render() {
    // this.props === { songs: state.songs };
    return (
      <div className="ui divided list">
        { this.renderList() }
      </div>
    );
  };
};

const mapStateToProps = state => {
  // console.log(state.selectedSong);  // Now the action is added to the Redux state
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);  // add the action as a second.. argument to connect (this is dispatch)

/* 
  So that is exactly how we make use of the react redux
  library to get data from our redux store into a component.
  It's always going to be the exact same scenario:

  - We're always going to import connect at the top.

  - We're always going to call connect and then pass in our 
  component as the second function call.
  
  - We're always going to define mapStateToProps.

  - mapStateToProps is always going to get a first argument
  of state and we're always going to return an object that
  is going to show up as props inside of our component.

  BELOW IS THE SOLUTION of the EXCERSIZE from the course 13.153
    // Action Creators - You don't need to change these
    const increment = () => ({ type: 'increment' });
    const decrement = () => ({ type: 'decrement' });
    

    const Counter = (props) => {
        return (
            <div>
                <button 
                    className="increment"
                    onClick={ props.increment }
                >
                    Increment
                </button>
                <button 
                    className="decrement"
                    onClick={ props.decrement }
                >
                    Decrement
                </button>
                Current Count: <span>{props.newCount}</span>
            </div>
        );
    };
    
      const mapStateToProps = state => {
        console.log(state);
      return { newCount: state.count };
    };

    const WrappedCounter = ReactRedux.connect(
        mapStateToProps, {
          increment,
          decrement
        }
    )(Counter);

    const store = Redux.createStore(Redux.combineReducers({
        count: (count = 0, action) => {
            if (action.type === 'increment') {
                return count + 1;
            } else if (action.type === 'decrement') {
                return count - 1;
            } else {
                return count;
            }
        }
    }));

    ReactDOM.render(
        <ReactRedux.Provider store={store}>
            <WrappedCounter />
        </ReactRedux.Provider>, 
        document.querySelector('#root')
    );
  */