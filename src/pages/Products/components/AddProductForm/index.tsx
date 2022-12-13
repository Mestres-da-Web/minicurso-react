import React from "react";
import InputSelect from "../../../../components/InputSelect";
import InputText from "../../../../components/InputText";
import InputTextArea from "../../../../components/InputTextArea";
import styles from "./styles.module.css";

const AddProductForm = () => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className={styles.container}>
      <h1>Adicionar novo produto</h1>
      <button>X</button>
      <form onSubmit={handleFormSubmit}>
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
          name="seller"
          label="LOJA DE VENDA"
          placeholder="DIGITE O NOME DA LOJA PARCEIRA"
        />

        <InputText
          name="product"
          label="NOME DO PRODUTO"
          placeholder="ESCREVA O NOME DO SEU ITEM"
        />

        <InputText
          name="price"
          label="PREÇO DO PRODUTO"
          placeholder="DIGITE O PREÇO"
        />

        <InputTextArea
          name="description"
          label="DESCRIÇÃO DO PRODUTO"
          placeholder="DESCREVA SEU PRODUTO"
        />

        <InputText
          name="inventory"
          label="QUANTIDADE EM ESTOQUE"
          placeholder="Nº UNIDADES"
        />

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default AddProductForm;
