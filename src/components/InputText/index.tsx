import React from "react";
import styles from "./styles.module.css";
interface Props {
  name: string;
  label: string;
  placeholder: string;
}

const InputText = ({ name, label, placeholder }: Props) => {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <br />
      <input type={"text"} placeholder={placeholder} />
    </div>
  );
};

export default InputText;
