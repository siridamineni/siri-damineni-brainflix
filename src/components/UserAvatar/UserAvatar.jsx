import React from "react";
import "./UserAvatar.scss";
import userImage from "../../assets/images/Mohan-muruge.jpg";
export default function UserAvatar() {
  return <img className="Header__avatar" src={userImage} alt="User Photo" />;
}
