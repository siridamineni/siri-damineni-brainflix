import "./VideoDescription.scss";
function VideoDescription({ description }) {
  return (
    <div className="video-description">
      <p>{description}</p>
    </div>
  );
}

export default VideoDescription;
