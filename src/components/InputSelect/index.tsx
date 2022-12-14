import React from "react";
import styles from "./styles.module.css";

interface Props {
  name: string;
  label: string;
  options: string[];
}

const InputSelect = ({ name, label, options }: Props) => {
  return (
    <div className={styles.container}>
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
