import { useEffect, useState } from "react";
import api from "../../services/api";

interface IProduct {
  _id: string;
  name: string;
  description: string;
  amount: number;
  price: number;
  pastPrice: number;
  category: string;
  brand: string;
  store: string;
}

const Products = () => {
  const [value, setValue] = useState(0);
  const [productsList, setProductsList] = useState<IProduct[]>([]);

  useEffect(() => {
    const getData = async () => {
      const result = await api.get<IProduct[]>("/product");

      setProductsList(result.data);
    };

    getData();
  }, []);

  return (
    <div>
      <select onChange={(e) => console.log(e.target.value)}>
        <option>Todos os produtos</option>
        <option>Produtos excluídos</option>
      </select>
      <input
        type="range"
        min="0"
        max="100"
        onChange={(e) => {
          console.log(e.target.value);
          setValue(parseInt(e.target.value));
        }}
      />
      <span>{value}</span>
      <button onClick={() => console.log("Button pressed")}>
        Novo produto
      </button>
      {productsList.length > 0 ? (
        productsList.map((product) => {
          return <h2>{product.name}</h2>;
        })
      ) : (
        <h1>Nenhum produto</h1>
      )}
    </div>
  );
};

export default Products;
