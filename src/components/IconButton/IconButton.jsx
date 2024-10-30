import React from "react";
import "./IconButton.scss";

function IconButton({ icon, text, handleClick }) {
  return (
    <button className="button" onClick={handleClick}>
      {icon}
      {text}
    </button>
  );
}

export default IconButton;
