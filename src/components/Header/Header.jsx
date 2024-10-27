import React from "react";
import BrainflixLogo from "../brainflixLogo/brainflixLogo";
import Search from "../Search/Search";
import userImage from "../../assets/images/Mohan-muruge.jpg";
import UserAvatar from "../UserAvatar/UserAvatar";
import IconButton from "../IconButton/IconButton";
import UploadIcon from "../../assets/icons/UploadIcon";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <BrainflixLogo />
      <div className="header__search-container">
        <Search />
        <UserAvatar userImg={userImage} />
      </div>
      <IconButton
        icon={<UploadIcon height={20} width={20} />}
        text={"upload"}
      />
    </div>
  );
};

export default Header;
