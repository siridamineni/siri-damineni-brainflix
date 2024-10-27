import "./VideoPlayer.scss";

function VideoPlayer({ src, poster }) {
  return (
    <div className="video-player">
      <video
        className="video-player__video-input"
        src={src}
        poster={poster}
        width="100%"
        controls
      />
    </div>
  );
}

export default VideoPlayer;
