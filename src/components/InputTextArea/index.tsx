import React from "react";
import styles from "./styles.module.css";

interface Props {
  name: string;
  label: string;
  defaultValue?: string;
  placeholder: string;
  height?: number;
}

const InputTextArea = ({
  name,
  label,
  defaultValue,
  placeholder,
  height,
}: Props) => {
  return (
    <div className={styles.container} style={{ height }}>
      <label>{label}</label>
      <br />
      <textarea
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default InputTextArea;
