import { useState, useRef } from "react";
import "./VideoUpload.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormField from "../../components/FormField/FormField";
import IconButton from "../../components/IconButton/IconButton";
import PublishIcon from "../../assets/icons/publish-icon.svg";
import EditIcon from "../../assets/icons/edit-icon.svg";
import ThumbnailImage from "../../assets/images/Upload-video-preview.jpg";

function VideoUpload() {
  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState(ThumbnailImage);
  const [thumbnailFile, setThumnailFile] = useState();

  //created ref for file input element to activate event handler on clicking on the image
  const imgFileUploadRef = useRef();

  //attaching click event handler to the input element
  const handleImageChange = (e) => {
    e.preventDefault();
    imgFileUploadRef.current.click();
  };

  //Convert uploaded image from ref to object URL blob for display and setting it to state Variable as a file for server upload.
  const handleImageDisplay = () => {
    const imageFile = imgFileUploadRef.current.files[0];
    if (imageFile) {
      const cachedUrl = URL.createObjectURL(imageFile);
      setThumbnail(cachedUrl);
      setThumnailFile(imageFile);
    }
  };

  const handleNavigateToHome = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", `${e?.target?.title?.value}`);
    formData.append("description", `${e?.target?.description?.value}`);
    thumbnailFile && formData.append("image", thumbnailFile);
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/videos`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    handleNavigateToHome();
  };

  return (
    <div className="video-upload">
      <h1 className="video-upload__title">Upload Video</h1>
      <div className="video-upload__divider" />
      <form className="video-upload__form" onSubmit={handleSubmit}>
        <div className="responsive__container">
          <div className="video-upload__thumbnail-container">
            <p className="video-upload__thumbnail-title">VIDEO THUMBNAIL</p>
            <div className="video-upload__thumbnail-wrapper">
              <img
                className="video-upload__thumbnail"
                src={thumbnail}
                alt="uploaded video thumbnail"
              />
              <button
                className="video-upload__editIcon"
                onClick={(e) => {
                  handleImageChange(e);
                }}>
                <img src={EditIcon} />
              </button>
            </div>
            <input
              ref={imgFileUploadRef}
              className="video-upload__thumbnail-input"
              type="file"
              name="thumbnailUpload"
              accept="image/*"
              onChange={handleImageDisplay}
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
