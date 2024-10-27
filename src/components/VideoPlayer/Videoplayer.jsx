import "./VideoPlayer.scss";

function VideoPlayer({ src, poster }) {
  return (
    <div className="video-player">
      <video
        className="video-player__video-input"
        src={src}
        poster={
          poster ||
          "https://unit-3-project-api-0a5620414506.herokuapp.com/images/image0.jpg"
        }
        width="100%"
        controls
      />
    </div>
  );
}

export default VideoPlayer;
