import React from "react";
import BrainflixLogo from "../brainflixLogo/brainflixLogo";
import Search from "../Search/Search";
import UserAvatar from "../UserAvatar/UserAvatar";
import Upload from "../Upload/Upload";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <BrainflixLogo />
      <Search />
      <UserAvatar />
      <Upload />
    </div>
  );
};

export default Header;
