import { useState } from "react";
import "./MainVideo.scss";
import "../../styles/partials/_global.scss";
import { format } from "date-fns";
import Videoplayer from "../../components/VideoPlayer/Videoplayer.jsx";
import VideoDetails from "../../components/VideoDetails/VideoDetails.jsx";
import Title from "../../components/Title/Title.jsx";
import VideoDescription from "../../components/VideoDescription/VideoDescription.jsx";
import AddCommentForm from "../../components/AddCommentForm/AddCommentForm.jsx";
import CommentsListItem from "../../components/CommentsListItem/CommentsListItem.jsx";
import VideoListItem from "../../components/VideoListItem/VideoListItem.jsx";
import VideosData from "../../data/VideosData.js";
function MainVideo() {
  const [mainVideo, setMainVideo] = useState(VideosData[0]);
  const onVideoChange = (id) => {
    setMainVideo(VideosData.find((item) => item.id === id));
  };
  return (
    <>
      <Videoplayer src={mainVideo?.video} poster={mainVideo?.image} />
      <div className="desktop-responsive__container">
        <div className="desktop-responsive__current-video-details">
          <div className="video-information">
            <Title heading={mainVideo?.title} />
            <VideoDetails
              name={`By ${mainVideo?.channel}`}
              date={format(new Date(mainVideo?.timestamp), "M/d/yyyy")}
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
                    time={format(new Date(item?.timestamp), "MM/dd/yyyy")}
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
            {VideosData?.filter((item) => item.id != mainVideo?.id)?.map(
              (eachVideo) => {
                return (
                  <div key={eachVideo.id}>
                    <VideoListItem
                      id={eachVideo?.id}
                      src={eachVideo?.image}
                      videoName={eachVideo?.title}
                      videoBy={eachVideo?.channel}
                      handleVideoChange={onVideoChange}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainVideo;
