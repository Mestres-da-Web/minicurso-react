import React from "react";

interface Props {
  name: string;
  label: string;
  placeholder: string;
}

const InputText = ({ name, label, placeholder }: Props) => {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input type={"text"} placeholder={placeholder} />
    </div>
  );
};

export default InputText;
