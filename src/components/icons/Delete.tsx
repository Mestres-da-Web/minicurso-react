import React from "react";
import SVGProps from "../../@types/SVGProps";

const DeleteIcon = ({ width = 16.5, height = 18.8, onClick }: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.5 18.857"
      width={width}
      height={height}
      onClick={onClick}
    >
      <path
        id="Icon_awesome-trash-alt"
        data-name="Icon awesome-trash-alt"
        d="M1.179,17.089a1.768,1.768,0,0,0,1.768,1.768H13.554a1.768,1.768,0,0,0,1.768-1.768V4.714H1.179ZM11.2,7.661a.589.589,0,1,1,1.179,0v8.25a.589.589,0,0,1-1.179,0Zm-3.536,0a.589.589,0,0,1,1.179,0v8.25a.589.589,0,0,1-1.179,0Zm-3.536,0a.589.589,0,1,1,1.179,0v8.25a.589.589,0,0,1-1.179,0ZM15.911,1.179h-4.42L11.145.49A.884.884,0,0,0,10.353,0H6.143a.874.874,0,0,0-.788.49l-.346.689H.589A.589.589,0,0,0,0,1.768V2.946a.589.589,0,0,0,.589.589H15.911a.589.589,0,0,0,.589-.589V1.768A.589.589,0,0,0,15.911,1.179Z"
        transform="translate(0 0)"
        fill="#696974"
      />
    </svg>
  );
};

export default DeleteIcon;
