import React from "react";
import LikesIcon from "../../assets/icons/LikesIcon";
import ViewsIcon from "../../assets/icons/ViewsIcon";
import "./VideoDetails.scss";
function VideoDetails({ name, date, views, likes }) {
  return (
    <div className="video-details">
      <div className="video-details__name-date">
        <span className="video-details__name">{name}</span>
        <span className="video-details__date">{date}</span>
      </div>
      <div className="video-details__views-likes">
        <div className="video-details__views">
          <ViewsIcon />
          <span>{views}</span>
        </div>
        <div className="video-details__likes">
          <LikesIcon />
          <span>{likes}</span>
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;
