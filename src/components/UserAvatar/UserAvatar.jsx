import React from "react";
import "./UserAvatar.scss";
import userImage from "../../assets/images/Mohan-muruge.jpg";
export default function UserAvatar() {
  return (
    <div>
      <img className="user-avatar" src={userImage} alt="User Photo" />
    </div>
  );
}
