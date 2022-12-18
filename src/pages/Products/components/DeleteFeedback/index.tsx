import React from "react";
import Button from "../../../../components/Button";
import styles from "./styles.module.css";

import DeleteFeedbackImg from "../../../../assets/delete-feedback.svg";

interface Props {
  onContinueClick: () => void;
}

const DeleteFeedback = ({ onContinueClick }: Props) => {
  return (
    <div className={styles.container}>
      <img src={DeleteFeedbackImg} alt="Icone delete" />
      <h2>
        Produto excluído
        <br />
        com sucesso!
      </h2>

      <Button
        className={styles.button}
        text="Continuar"
        onClick={onContinueClick}
      />
    </div>
  );
};

export default DeleteFeedback;
