import React from "react";
import "./VideoListItem.scss";
function VideoListItem({ id, src, videoName, videoBy, handleVideoChange }) {
  return (
    <div className="video-list-item">
      <img
        className="video-list-item__thumnail-card"
        src={src}
        alt={videoName}
        onClick={() => handleVideoChange(id)}
      />
      <div className="video-list-item__details">
        <div>
          <p className="video-list-item__name">{videoName}</p>
        </div>
        <div>
          <p className="video-list-item__maker-name">{videoBy}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoListItem;
