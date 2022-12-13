import React from "react";

interface Props {
  name: string;
  label: string;
  options: string[];
}

const InputSelect = ({ name, label, options }: Props) => {
  return (
    <div>
      <label>{label}</label>
      <br />
      <select>
        {options.map((option) => (
          <option>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
