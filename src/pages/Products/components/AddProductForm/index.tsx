import React from "react";
import Button from "../../../../components/Button";
import CloseIcon from "../../../../components/icons/Close";
import InputSelect from "../../../../components/InputSelect";
import InputText from "../../../../components/InputText";
import InputTextArea from "../../../../components/InputTextArea";
import api from "../../../../services/api";
import { IProduct } from "../../types";
import styles from "./styles.module.css";

interface Props {
  defaultValues?: IProduct;
  onProductCreation: () => void;
}

const AddProductForm = ({ defaultValues, onProductCreation }: Props) => {
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const result = Object.fromEntries(data);

    if (defaultValues) {
      try {
        await api.put(`/product/${defaultValues._id}`, result);
        onProductCreation();
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await api.post("/product", result);
        onProductCreation();
      } catch (error) {
        console.log(error);
      }
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
            defaultValue={defaultValues?.category}
            options={["Acessórios", "Periféricos"]}
          />
          <InputText
            name="brand"
            label="ESCOLHER MARCA"
            defaultValue={defaultValues?.brand}
            placeholder="ESCOLHER MARCA"
          />
          <InputText
            name="store"
            label="LOJA DE VENDA"
            defaultValue={defaultValues?.store}
            placeholder="DIGITE O NOME DA LOJA PARCEIRA"
          />
        </div>

        <InputText
          name="name"
          label="NOME DO PRODUTO"
          defaultValue={defaultValues?.name}
          placeholder="ESCREVA O NOME DO SEU ITEM"
        />

        <InputText
          name="price"
          label="PREÇO DO PRODUTO"
          defaultValue={defaultValues?.price.toString()}
          placeholder="DIGITE O PREÇO"
        />

        <div className={styles.line}>
          <InputTextArea
            name="description"
            label="DESCRIÇÃO DO PRODUTO"
            defaultValue={defaultValues?.description}
            placeholder="DESCREVA SEU PRODUTO"
            height={200}
          />

          <InputText
            name="amount"
            label="QUANTIDADE EM ESTOQUE"
            defaultValue={defaultValues?.amount.toString()}
            placeholder="Nº UNIDADES"
          />
        </div>

        <div className={styles.buttonLine}>
          <Button
            text={defaultValues ? "Editar Produto" : "Adicionar produto"}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
