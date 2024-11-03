import React from "react";
import "./IconButton.scss";

function IconButton({ icon, text, handleClick }) {
  return (
    <button className="btn" onClick={handleClick}>
      <img className="btn__icon" src={icon} alt="button icon" />
      {text}
    </button>
  );
}

export default IconButton;
