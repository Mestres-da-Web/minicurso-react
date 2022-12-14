import * as React from "react";
import SVGProps from "../../@types/SVGProps";

const CloseIcon = ({ width = 13.978, height = 13.989, onClick }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    onClick={onClick}
  >
    <path
      d="M13.686 12.282 1.707.293A1 1 0 0 0 .293 1.707L12.271 13.7a1 1 0 1 0 1.415-1.414Z"
      fill="#696974"
    />
    <path
      d="m1.707 13.67 11.98-11.962A1 1 0 0 0 12.274.292L.293 12.255a1 1 0 1 0 1.414 1.415Z"
      fill="#696974"
    />
  </svg>
);

export default CloseIcon;
