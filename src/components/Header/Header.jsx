import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BrainflixLogo from "../brainflixLogo/brainflixLogo";
import Search from "../Search/Search";
import userImage from "../../assets/images/Mohan-muruge.jpg";
import UserAvatar from "../UserAvatar/UserAvatar";
import IconButton from "../IconButton/IconButton";
import UploadIcon from "../../assets/icons/UploadIcon";
import "./Header.scss";
const Header = () => {
  const [isLargerScreen, setIsLargerScreen] = useState(window.innerWidth > 767);
  useEffect(() => {
    const handleResize = () => {
      setIsLargerScreen(window.innerWidth > 767);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {isLargerScreen ? (
        <div className="header">
          <Link className="header--home-link" to="/">
            <BrainflixLogo />
          </Link>
          <div className="header__container">
            <Search />
            <Link className="header--upload-link" to="/upload">
              <IconButton
                icon={<UploadIcon height={20} width={20} />}
                text={"upload"}
              />
            </Link>
            <UserAvatar userImg={userImage} />
          </div>
        </div>
      ) : (
        <div className="header">
          <Link className="header--home-link" to="/">
            <BrainflixLogo />
          </Link>
          <div className="header__search-container">
            <Search />
            <UserAvatar userImg={userImage} />
          </div>
          <Link className="header--upload-link" to="/upload">
            <IconButton
              icon={<UploadIcon height={20} width={20} />}
              text={"upload"}
            />
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
