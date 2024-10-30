import React from "react";
import "./VideoListItem.scss";
function VideoListItem({ src, videoName, videoBy }) {
  return (
    <div className="video-list-item">
      <img
        className="video-list-item__thumnail-card"
        src={src}
        alt={videoName}
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
