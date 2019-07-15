import React from 'react';
import { connect } from "react-redux";

const SongDetail = ({ mySelectedSong }) => {
  if (!mySelectedSong) {
    return <div>Select a song please!</div>
  };
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: { mySelectedSong.title }
        <br />
        Duration: { mySelectedSong.duration }
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { mySelectedSong: state.selectedSong }; // mySelectedSong is called by SongDetail function
};

export default connect(mapStateToProps)(SongDetail);