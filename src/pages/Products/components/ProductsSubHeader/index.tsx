import Button from "../../../../components/Button";
import Select from "../../../../components/Select";
import RangePriceFilter from "../RangePriceFilter";

import styles from "./styles.module.css";

const ProductsSubHeader = () => {
  return (
    <div className={styles.container}>
      <h1>Produtos</h1>
      <Select />
      <RangePriceFilter />
      <Button />
    </div>
  );
};

export default ProductsSubHeader;
