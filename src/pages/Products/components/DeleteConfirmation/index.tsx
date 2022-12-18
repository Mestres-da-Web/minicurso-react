import React from "react";
import Button from "../../../../components/Button";
import styles from "./styles.module.css";

import DeleteConfirmationImg from "../../../../assets/delete-confirmation.svg";

interface Props {
  onConfirmation: () => Promise<void>;
}

const DeleteConfirmation = ({ onConfirmation }: Props) => {
  return (
    <div className={styles.container}>
      <img src={DeleteConfirmationImg} alt="Icone delete" />
      <h2>
        Tem certeza que deseja
        <br />
        excluir este produto?
      </h2>
      <span>
        Após excluir, você não poderá
        <br />
        reverter a ação
      </span>
      <Button
        className={styles.button}
        text="Excluir produto"
        onClick={onConfirmation}
      />
    </div>
  );
};

export default DeleteConfirmation;
