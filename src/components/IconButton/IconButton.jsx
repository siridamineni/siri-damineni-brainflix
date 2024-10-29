import React from "react";
import "./IconButton.scss";

function IconButton({ icon, text }) {
  return (
    <button className="button">
      {icon}
      {text}
    </button>
  );
}

export default IconButton;
