import React from 'react';

const VideoDetail = ({ videoFromOnVideoSelectedInApp }) => {
  if (!videoFromOnVideoSelectedInApp) {
    return <div>Loading...</div>
  };

  const videoSrc = `https://www.youtube.com/embed/${ videoFromOnVideoSelectedInApp.id.videoId }`;
  
  return (
    <div>
      <div className="ui embed">
        <iframe title="Video player" src={ videoSrc } allowfullscreen="true" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{ videoFromOnVideoSelectedInApp.snippet.title }</h4>
        <p className="ui content">{ videoFromOnVideoSelectedInApp.snippet.description }</p>
      </div>
    </div>
  );
};

export default VideoDetail;