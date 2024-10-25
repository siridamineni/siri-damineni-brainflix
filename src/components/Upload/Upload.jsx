import React from "react";
import "./Upload.scss";
import FileUploadIcon from "@mui/icons-material/FileUpload";
function Upload() {
  return (
    <button className="upload__button">
      <FileUploadIcon style={{ fill: "#FFFFFF" }} />
      <span>UPLOAD</span>
    </button>
  );
}

export default Upload;
