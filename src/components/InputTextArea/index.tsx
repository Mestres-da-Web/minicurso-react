import React from "react";

interface Props {
  name: string;
  label: string;
  placeholder: string;
}

const InputTextArea = ({ name, label, placeholder }: Props) => {
  return (
    <div>
      <label>{label}</label>
      <br />
      <textarea placeholder={placeholder} />
    </div>
  );
};

export default InputTextArea;
