import "./VideoPlayer.scss";

function VideoPlayer({ poster }) {
  return (
    <div className="video-player">
      <video
        className="video-player__video-input"
        src=""
        poster={poster}
        width="100%"
        controls
      />
    </div>
  );
}

export default VideoPlayer;
