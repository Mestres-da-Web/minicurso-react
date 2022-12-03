import { useEffect, useState } from "react";
import api from "../../services/api";
import ProductsSubHeader from "./components/ProductsSubHeader";

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
      <ProductsSubHeader />

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
