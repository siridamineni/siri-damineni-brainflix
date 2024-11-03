import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "../Search/Search";
import userImage from "../../assets/images/Mohan-muruge.jpg";
import BrainFlixLogoImage from "../../assets/images/BrainflixLogoImage";
import UserAvatar from "../UserAvatar/UserAvatar";
import IconButton from "../IconButton/IconButton";
import UploadIcon from "../../assets/icons/upload-icon.svg";
import "./Header.scss";
const Header = () => {
  const navigate = useNavigate();
  const [isLargerScreen, setIsLargerScreen] = useState(window.innerWidth > 767);
  const handleUploadPageNavigation = () => {
    navigate(`/upload`);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsLargerScreen(window.innerWidth > 767);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="header">
      <Link className="header--home-link" to="/">
        <BrainFlixLogoImage height="30" />
      </Link>
      {isLargerScreen ? (
        <div className="header__container">
          <Search />
          <IconButton
            icon={UploadIcon}
            text={"upload"}
            handleClick={handleUploadPageNavigation}
          />
          <UserAvatar userImg={userImage} />
        </div>
      ) : (
        <>
          <div className="header__search-container">
            <Search />
            <UserAvatar userImg={userImage} />
          </div>
          <IconButton
            icon={UploadIcon}
            text={"upload"}
            handleClick={handleUploadPageNavigation}
          />
        </>
      )}
    </div>
  );
};

export default Header;
