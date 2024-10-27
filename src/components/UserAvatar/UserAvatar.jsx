import React from "react";
import "./UserAvatar.scss";
export default function UserAvatar({ userImg }) {
  return (
    <div>
      {userImg ? (
        <img className="user-avatar" src={userImg} alt="User Photo" />
      ) : (
        <div className="user-avatar--no-img" />
      )}
    </div>
  );
}
