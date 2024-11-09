import { useState, useEffect } from "react";
import "./Home.scss";
import "../../styles/partials/_global.scss";
import { format } from "date-fns";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import LikesIcon from "../../assets/icons/likes.svg";
import ViewsIcon from "../../assets/icons/views.svg";
import AddCommentIcon from "../../assets/icons/add-comment-icon.svg";
import UserAvatar from "../../components/UserAvatar/UserAvatar.jsx";
import FormField from "../../components/FormField/FormField.jsx";
import IconButton from "../../components/IconButton/IconButton.jsx";
import userImage from "../../assets/images/Mohan-muruge.jpg";
import CommentsListItem from "../../components/CommentsListItem/CommentsListItem.jsx";
import VideoListItem from "../../components/VideoListItem/VideoListItem.jsx";

function Home() {
  const params = useParams();
  const navigate = useNavigate();
  const [videosList, setVideosList] = useState([]);
  const [mainVideo, setMainVideo] = useState();
  const [addComment, setAddComment] = useState("");
  const [isLargerScreen, setIsLargerScreen] = useState(window.innerWidth > 767);

  //handle input change
  const handleChange = (e) => {
    setAddComment(e.target.value.toString());
  };
  //handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    //reset the form
    setAddComment("");
  };
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleNextVideo = (id) => {
    navigate(`/videos/${id}`);
    handleScroll();
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/videos`)
      .then((res) => {
        setVideosList(res.data);
      })
      .catch((err) => console.log(err));
    const handleResize = () => {
      setIsLargerScreen(window.innerWidth > 767);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVideoDetailsById = async (id) => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/videos/${id}`)
      .then((res) => {
        setMainVideo(res.data);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    if (params?.videoId) {
      getVideoDetailsById(params.videoId);
    } else if (videosList && videosList?.length > 0) {
      getVideoDetailsById(videosList[0].id);
    }
  }, [videosList, params]);
  return (
    <>
      <div className="video-player">
        <video
          className="video-player__video-input"
          src=""
          poster={mainVideo?.image}
          width="100%"
          height="100%"
          controls
        />
      </div>
      <div className="desktop-responsive__container">
        <div className="desktop-responsive__current-video-details">
          <div className="video-info">
            <h1 className="video-info__title">{mainVideo?.title}</h1>
            <div className="video-info__details">
              <div className="video-info__name-date">
                <span className="video-info__name">{`By ${mainVideo?.channel}`}</span>
                <span className="video-info__date">
                  {mainVideo?.timestamp
                    ? format(new Date(mainVideo.timestamp), "M/d/yyyy")
                    : ""}
                </span>
              </div>
              <div className="video-info__views-likes">
                <div className="video-info__views">
                  <img src={ViewsIcon} alt="views" />
                  <span>{mainVideo?.views}</span>
                </div>
                <div className="video-info__likes">
                  <img src={LikesIcon} alt="likes" />
                  <span>{mainVideo?.likes}</span>
                </div>
              </div>
            </div>
            <div className="video-info__description">
              <p>{mainVideo?.description}</p>
            </div>
          </div>
          <h3 className="comments-list__label">
            {mainVideo?.comments?.length} Comments
          </h3>
          <form className="comment-form" onSubmit={handleSubmit}>
            <div className="comment-form__img-container">
              <UserAvatar userImg={userImage} />
            </div>
            <div className="comment-form__formfields">
              <div className="comment-form__formfield">
                <FormField
                  isTextArea={isLargerScreen ? false : true}
                  label={"join the conversation"}
                  id={"comment"}
                  name="comment"
                  placeholder="Add a New Comment"
                  inputValue={addComment}
                  handleChange={handleChange}
                />
              </div>
              <div className="comment-form__btn-container">
                <IconButton
                  icon={AddCommentIcon}
                  text="COMMENT"
                  type="submit"
                />
              </div>
            </div>
          </form>
          <div className="comments-list">
            {mainVideo?.comments?.map((item) => {
              return (
                <div className="comments-list__item" key={item?.id}>
                  <CommentsListItem
                    name={item?.name}
                    time={
                      item?.timestamp
                        ? format(new Date(item.timestamp), "MM/dd/yyyy")
                        : ""
                    }
                    description={item?.comment}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="desktop-responsive__next-videos">
          <div className="video-list">
            <h3 className="video-list__heading">NEXT VIDEOS</h3>
            {videosList.length > 0 &&
              videosList
                ?.filter((item) => item.id != mainVideo?.id)
                ?.map((eachVideo) => {
                  return (
                    <div
                      key={eachVideo.id}
                      onClick={() => handleNextVideo(eachVideo.id)}>
                      <VideoListItem
                        src={eachVideo?.image}
                        videoName={eachVideo?.title}
                        videoBy={eachVideo?.channel}
                      />
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
