import { useState, useEffect } from "react";
import "./MainVideo.scss";
import "../../styles/partials/_global.scss";
import { format } from "date-fns";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Videoplayer from "../../components/VideoPlayer/Videoplayer.jsx";
import VideoDetails from "../../components/VideoDetails/VideoDetails.jsx";
import Title from "../../components/Title/Title.jsx";
import VideoDescription from "../../components/VideoDescription/VideoDescription.jsx";
import AddCommentForm from "../../components/AddCommentForm/AddCommentForm.jsx";
import CommentsListItem from "../../components/CommentsListItem/CommentsListItem.jsx";
import VideoListItem from "../../components/VideoListItem/VideoListItem.jsx";
function MainVideo() {
  const params = useParams();
  const navigate = useNavigate();
  const [videosList, setVideosList] = useState();
  const [mainVideo, setMainVideo] = useState();
  const handleNextVideo = (id) => {
    navigate(`/videos/${id}`);
  };
  useEffect(() => {
    axios
      .get(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((res) => setVideosList(res.data))
      .catch((err) => console.log(err));
  }, []);

  const getVideoDetailsById = async (id) => {
    axios
      .get(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((res) => {
        setMainVideo(res.data);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    if (params?.videoId) {
      getVideoDetailsById(params.videoId);
    } else if (videosList?.length > 0) {
      getVideoDetailsById(videosList[0].id);
    }
  }, [videosList, params]);
  return (
    <>
      <Videoplayer src={mainVideo?.video} poster={mainVideo?.image} />
      <div className="desktop-responsive__container">
        <div className="desktop-responsive__current-video-details">
          <div className="video-information">
            <Title heading={mainVideo?.title} />
            <VideoDetails
              name={`By ${mainVideo?.channel}`}
              date={
                mainVideo?.timestamp
                  ? format(new Date(mainVideo.timestamp), "M/d/yyyy")
                  : ""
              }
              views={mainVideo?.views}
              likes={mainVideo?.likes}
            />
            <VideoDescription description={mainVideo?.description} />
          </div>
          <h3 className="comments-list__label">
            {mainVideo?.comments?.length} Comments
          </h3>
          <AddCommentForm />
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
            {videosList
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

export default MainVideo;
