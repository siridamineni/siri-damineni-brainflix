import React from "react";
import "./VideoListItem.scss";
function VideoListItem({ src, videoName, videoBy }) {
  return (
    <div className="list-item">
      <div className="list-item__thumnail-card">
        <img src={src} alt={videoName} />
      </div>
      <div className="list-item__details">
        <div>
          <p className="list-item__name">{videoName}</p>
        </div>
        <div>
          <p className="list-item__maker-name">{videoBy}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoListItem;
