import "../css/VideoItem.css"

import React from 'react';

const VideoItem = ({ videoToShow, onSelectedVideo }) => {
    return (
      <div
        onClick={ () => onSelectedVideo(videoToShow) } 
        className="video-item item">
        <img
          className="ui image"
          alt={ videoToShow.snippet.title }
          src={ videoToShow.snippet.thumbnails.medium.url }
        />
        <div className="content">
          <div className="header">
            { videoToShow.snippet.title }
          </div>
        </div>
      </div>
    );
};

export default VideoItem;