import React from "react";

function PlayIcon({ width = "13", height = "16", fill = "#FFFFFF" }) {
  return (
    <svg width={width} height={height} viewBox="0 0 13 16" fill={fill}>
      <g clipPath="url(#clip0)">
        <path
          d="M0.571411 2.07999V13.92C0.571411 14.8229 1.5657 15.3714 2.33141 14.88L11.6343 8.95999C12.3428 8.51428 12.3428 7.48571 11.6343 7.02856L2.33141 1.11999C1.5657 0.628565 0.571411 1.17714 0.571411 2.07999Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="12.5714" height="16" fill={fill} />
        </clipPath>
      </defs>
    </svg>
  );
}

export default PlayIcon;
