import React from "react";
import LikesIcon from "../../assets/icons/LikesIcon";
import ViewsIcon from "../../assets/icons/ViewsIcon";
import "./VideoDetails.scss";
function VideoDetails({ name, date, views, likes }) {
  return (
    <div className="video-details">
      <div className="video-details__name-date">
        <p className="video-details__name">{name}</p>
        <p className="video-details__date">{date}</p>
      </div>
      <div className="video-details__views-likes">
        <div className="video-details__views">
          <ViewsIcon />
          {views}
        </div>
        <div className="video-details__likes">
          <LikesIcon />
          {likes}
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;
