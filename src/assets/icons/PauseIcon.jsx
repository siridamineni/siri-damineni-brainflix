import React from "react";

function PauseIcon({ width = "25", height = "24", fill = "#FFFFFF" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.71427 20C9.89284 20 10.8571 19.0357 10.8571 17.8571V7.14286C10.8571 5.96429 9.89284 5 8.71427 5C7.5357 5 6.57141 5.96429 6.57141 7.14286V17.8571C6.57141 19.0357 7.5357 20 8.71427 20ZM15.1428 7.14286V17.8571C15.1428 19.0357 16.1071 20 17.2857 20C18.4643 20 19.4286 19.0357 19.4286 17.8571V7.14286C19.4286 5.96429 18.4643 5 17.2857 5C16.1071 5 15.1428 5.96429 15.1428 7.14286Z"
        fill={fill}
      />
    </svg>
  );
}

export default PauseIcon;