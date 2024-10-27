import React from "react";
import "./VideoListItem.scss";
function VideoListItem() {
  return (
    <div className="video-list-item">
      <img
        className="video-list-item__thumnail-card"
        src="https://unit-3-project-api-0a5620414506.herokuapp.com/images/image1.jpg"
        alt=""
      />
      <div className="video-list-item__details">
        <p className="video-list-item__name">Exploring cities of Europe</p>
        <p>Ryan Hernandez</p>
      </div>
    </div>
  );
}

export default VideoListItem;
