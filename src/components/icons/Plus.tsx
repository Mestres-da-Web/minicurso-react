import SVGProps from "../../@types/SVGProps";

const PlusIcon = ({ width = 20, height = 20 }: SVGProps) => {
  return (
    <svg
      id="ic_Plus"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 18"
    >
      <path
        id="Path"
        d="M10,8h7a1,1,0,0,1,0,2H10v7a1,1,0,0,1-2,0V10H1A1,1,0,0,1,1,8H8V1a1,1,0,0,1,2,0Z"
        fill="#fafafb"
      />
    </svg>
  );
};

export default PlusIcon;
