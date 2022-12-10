import React from "react";
import styles from "./styles.module.css";

interface Props {
  children: JSX.Element;
  onClose: () => void;
}

const Modal = ({ children, onClose }: Props) => {
  const handleClick = () => {
    onClose();
  };

  const handleStopPropagation = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <div onClick={handleStopPropagation}>{children}</div>
    </div>
  );
};

export default Modal;
