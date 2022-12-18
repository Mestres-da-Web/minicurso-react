import React from "react";
import styles from "./styles.module.css";

interface Props {
  name: string;
  label: string;
  defaultValue?: string;
  options: string[];
}

const InputSelect = ({ name, label, defaultValue, options }: Props) => {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <br />
      <select name={name}>
        {options.map((option) => {
          if (defaultValue?.toLowerCase() === option.toLowerCase()) {
            return <option selected>{option}</option>;
          } else {
            return <option>{option}</option>;
          }
        })}
      </select>
    </div>
  );
};

export default InputSelect;
