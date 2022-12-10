import SVGProps from "../../@types/SVGProps";

const EditIcon = ({ width = 16.5, height = 16.5, onClick }: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16.5 16.5"
      onClick={onClick}
    >
      <path
        id="Icon_material-mode-edit"
        data-name="Icon material-mode-edit"
        d="M4.5,17.559V21H7.937L18.074,10.859,14.637,7.422ZM20.732,8.2a.913.913,0,0,0,0-1.292L18.587,4.764a.913.913,0,0,0-1.292,0L15.618,6.442l3.437,3.437L20.732,8.2Z"
        transform="translate(-4.5 -4.496)"
        fill="#696974"
      />
    </svg>
  );
};

export default EditIcon;
