import { useState } from "react";
import "./VideoUpload.scss";
import Title from "../../components/Title/Title";
import FormField from "../../components/FormField/FormField";
import IconButton from "../../components/IconButton/IconButton";
import PublishIcon from "../../assets/icons/PublishIcon";
import ThumbnailImage from "../../assets/images/Upload-video-preview.jpg";
function VideoUpload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value.toString());
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value.toString());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Title is ${title} and Description is ${description}`);
    //reset the form
    setTitle("");
    setDescription("");
  };
  return (
    <div className="video-upload">
      <Title heading={"Upload Video"} />
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
              inputValue={title}
              handleChange={handleTitleChange}
            />

            <FormField
              isTextArea
              label="add a video description"
              id="description"
              name="description"
              placeholder="Add a description to your video"
              inputValue={description}
              handleChange={handleDescriptionChange}
              rows={5}
              cols={40}
            />
          </div>
        </div>
        <div className="video-upload__btn-container">
          <IconButton icon={<PublishIcon />} text="publish" type="submit" />
          <button className="video-upload__cancel-button">cancel</button>
        </div>
      </form>
    </div>
  );
}

export default VideoUpload;
