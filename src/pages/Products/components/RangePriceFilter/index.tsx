import { useState } from "react";

import styles from "./styles.module.css";

const RangePriceFilter = () => {
  const [value, setValue] = useState(0);

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
        max="100"
        onChange={(e) => {
          console.log(e.target.value);
          setValue(parseInt(e.target.value));
        }}
      />
      <span className={styles.value}>R${value}</span>
    </div>
  );
};

export default RangePriceFilter;
