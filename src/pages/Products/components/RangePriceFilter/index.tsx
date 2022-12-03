import { useState } from "react";

const RangePriceFilter = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <label htmlFor="input_range">Filtro preço</label>
      <input
        id="input_range"
        type="range"
        min="0"
        max="100"
        onChange={(e) => {
          console.log(e.target.value);
          setValue(parseInt(e.target.value));
        }}
      />
      <span>{value}</span>
    </div>
  );
};

export default RangePriceFilter;
