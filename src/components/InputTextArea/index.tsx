import React from "react";
import styles from "./styles.module.css";

interface Props {
  name: string;
  label: string;
  placeholder: string;
  height?: number;
}

const InputTextArea = ({ name, label, placeholder, height }: Props) => {
  return (
    <div className={styles.container} style={{ height }}>
      <label>{label}</label>
      <br />
      <textarea placeholder={placeholder} />
    </div>
  );
};

export default InputTextArea;
