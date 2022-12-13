import Button from "../../../../components/Button";
import PlusIcon from "../../../../components/icons/Plus";
import Select from "../SelectSubHeader";
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
      <Button icon={<PlusIcon />} text={"Novo produto"} />
    </div>
  );
};

export default ProductsSubHeader;
