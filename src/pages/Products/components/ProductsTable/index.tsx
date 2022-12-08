import { IProduct } from "../..";
import ProductIcon from "../../../../assets/macbook.svg";

import styles from "./styles.module.css";

interface Props {
  data: IProduct[];
}

const ProductsTable = ({ data }: Props) => {
  return (
    <table className={styles.table}>
      <tr>
        <th>Nome do produto</th>
        <th>Marca</th>
        <th>#ID</th>
        <th>Entregue por</th>
        <th>Qº Estoque</th>
        <th>Preço</th>
      </tr>

      {data.map((product) => {
        return (
          <tr>
            <td className={styles.name}>
              <img
                className={styles.img}
                src={ProductIcon}
                alt="icone do produto"
              />
              <span>{product.name}</span>
            </td>
            <td className={styles.brand}>
              <span>{product.brand}</span>
            </td>
            <td className={styles.id}>
              <span>{product._id}</span>
            </td>
            <td className={styles.brand}>
              <span>{product.brand}</span>
            </td>
            <td className={styles.amount}>
              <span>{product.amount}</span>
            </td>
            <td className={styles.price}>
              <span>R$ {product.price}</span>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default ProductsTable;
