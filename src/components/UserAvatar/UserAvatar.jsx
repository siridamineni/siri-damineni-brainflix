import React from "react";
import "./UserAvatar.scss";
export default function UserAvatar({ userImg }) {
  return (
    <div>
      {userImg ? (
        <div className="user-avatar">
          <img src={userImg} alt="User Photo" />
        </div>
      ) : (
        <div className="user-avatar" />
      )}
    </div>
  );
}
