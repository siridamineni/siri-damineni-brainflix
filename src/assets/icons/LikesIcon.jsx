import React from "react";

function LikesIcon({ width = "17", height = "16", fill = "#AFAFAF" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.325 0C10.846 0 9.4265 0.682105 8.5 1.76C7.5735 0.682105 6.154 0 4.675 0C2.057 0 0 2.03789 0 4.63158C0 7.81474 2.89 10.4084 7.2675 14.3495L8.5 15.4526L9.7325 14.3411C14.11 10.4084 17 7.81474 17 4.63158C17 2.03789 14.943 0 12.325 0Z"
        fill={fill}
      />
    </svg>
  );
}

export default LikesIcon;