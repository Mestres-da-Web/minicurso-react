import { useState } from "react";

import styles from "./styles.module.css";

interface Props {
  onPriceChange?: (value: number) => void;
}

const RangePriceFilter = ({ onPriceChange }: Props) => {
  const [value, setValue] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
    if (onPriceChange !== undefined) onPriceChange(parseInt(e.target.value));
  };

  return (
    <div className={styles.container}>
      <label htmlFor="input_range" className={styles.label}>
        Filtro preço:
      </label>
      <input
        id="input_range"
        className={styles.input}
        type="range"
        min="0"
        max="1000"
        value={value}
        onChange={handleChange}
      />
      <span className={styles.value}>R${value}</span>
    </div>
  );
};

export default RangePriceFilter;
