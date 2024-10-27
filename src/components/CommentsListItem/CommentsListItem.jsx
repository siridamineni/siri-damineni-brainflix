import React from "react";
import UserAvatar from "../UserAvatar/UserAvatar";
import "./CommentsListItem.scss";
function CommentsListItem({ name, time, description }) {
  return (
    <div className="comments">
      <div className="comments__Avatar">
        <UserAvatar />
      </div>
      <div className="comments__container">
        <div className="comments__name-date-content">
          <div>
            <p className="comments__name">{name}</p>
          </div>
          <div>
            <p className="comments__date">{time}</p>
          </div>
        </div>
        <div>
          <p className="comments__desc">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default CommentsListItem;
