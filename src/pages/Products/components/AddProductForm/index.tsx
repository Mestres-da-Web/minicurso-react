import React from "react";
import Button from "../../../../components/Button";
import CloseIcon from "../../../../components/icons/Close";
import InputSelect from "../../../../components/InputSelect";
import InputText from "../../../../components/InputText";
import InputTextArea from "../../../../components/InputTextArea";
import api from "../../../../services/api";
import styles from "./styles.module.css";

interface Props {
  onProductCreation: () => void;
}

const AddProductForm = ({ onProductCreation }: Props) => {
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const result = Object.fromEntries(data);

    try {
      await api.post("/product", result);
      onProductCreation();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerLine}>
        <h1 className={styles.title}>Adicionar novo produto</h1>
        <CloseIcon />
      </div>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <div className={styles.line}>
          <InputSelect
            name="category"
            label="CATEGORIA"
            options={["Acessórios", "Periféricos"]}
          />
          <InputText
            name="brand"
            label="ESCOLHER MARCA"
            placeholder="ESCOLHER MARCA"
          />
          <InputText
            name="store"
            label="LOJA DE VENDA"
            placeholder="DIGITE O NOME DA LOJA PARCEIRA"
          />
        </div>

        <InputText
          name="name"
          label="NOME DO PRODUTO"
          placeholder="ESCREVA O NOME DO SEU ITEM"
        />

        <InputText
          name="price"
          label="PREÇO DO PRODUTO"
          placeholder="DIGITE O PREÇO"
        />

        <div className={styles.line}>
          <InputTextArea
            name="description"
            label="DESCRIÇÃO DO PRODUTO"
            placeholder="DESCREVA SEU PRODUTO"
            height={200}
          />

          <InputText
            name="amount"
            label="QUANTIDADE EM ESTOQUE"
            placeholder="Nº UNIDADES"
          />
        </div>

        <div className={styles.buttonLine}>
          <Button text="Adicionar produto" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
