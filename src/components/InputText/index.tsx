import React from "react";
import styles from "./styles.module.css";
interface Props {
  name: string;
  label: string;
  defaultValue?: string;
  placeholder: string;
}

const InputText = ({ name, label, defaultValue, placeholder }: Props) => {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <br />
      <input
        name={name}
        type={"text"}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default InputText;
