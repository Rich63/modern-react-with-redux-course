import React, { Component } from 'react';
import { connect } from "react-redux";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
        return (
          <div className="item" key={ song.title }>
            <div className="right floated content">
              <button className="ui button primary">
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
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);

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
*/