import { useState } from "react";
import "./VideoUpload.scss";
import FormField from "../../components/FormField/FormField";
import IconButton from "../../components/IconButton/IconButton";
import PublishIcon from "../../assets/icons/publish-icon.svg";
import ThumbnailImage from "../../assets/images/Upload-video-preview.jpg";
function VideoUpload() {
  const [newVideoData, setNewVideoData] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // set the data to state
    setNewVideoData({
      title: e?.target?.title.toString(),
      description: e?.target?.description?.toString(),
    });
    // Displaying the collected form data in an alert
    alert(
      `Title is "${e?.target?.title.value.toString()}"\n Description is "${e?.target?.description?.value.toString()}"\n`
    );
    // reset the form
    e.target.reset();
  };
  return (
    <div className="video-upload">
      <h1 className="video-upload__title">Upload Video</h1>
      <div className="video-upload__divider" />
      <form className="video-upload__form" onSubmit={handleSubmit}>
        <div className="responsive__container">
          <div className="video-upload__thumbnail-container">
            <p className="video-upload__thumbnail-title">VIDEO THUMBNAIL</p>
            <img
              className="video-upload__thumbnail"
              src={ThumbnailImage}
              alt={"uploaded video thumbnail"}
            />
          </div>
          <div className="video-upload__formfields-container">
            <FormField
              isTextArea={false}
              label={"Title your video"}
              id="title"
              name="title"
              placeholder="Add a title to your video"
            />

            <FormField
              isTextArea
              label="add a video description"
              id="description"
              name="description"
              placeholder="Add a description to your video"
              rows={6}
              cols={40}
            />
          </div>
        </div>
        <div className="video-upload__btn-container">
          <IconButton icon={PublishIcon} text="publish" type="submit" />
          <button disabled className="video-upload__cancel-button">
            cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default VideoUpload;
