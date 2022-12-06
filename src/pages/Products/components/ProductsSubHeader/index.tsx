import Button from "../../../../components/Button";
import Select from "../../../../components/Select";
import RangePriceFilter from "../RangePriceFilter";

import styles from "./styles.module.css";

interface Props {
  onPriceChange?: (value: number) => void;
}

const ProductsSubHeader = ({ onPriceChange }: Props) => {
  return (
    <div className={styles.container}>
      <h1>Produtos</h1>
      <Select />
      <RangePriceFilter onPriceChange={onPriceChange} />
      <Button />
    </div>
  );
};

export default ProductsSubHeader;
