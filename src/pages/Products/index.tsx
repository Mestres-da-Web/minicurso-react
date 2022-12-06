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
  const [priceFilter, setPriceFilter] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const result = await api.get<IProduct[]>("/product");

      setProductsList(result.data);
    };

    getData();
  }, []);

  const handlePriceChange = (value: number) => {
    setPriceFilter(value);
  };

  const productsFiltered = productsList.filter(
    (product) => product.price > priceFilter,
  );

  return (
    <div>
      <ProductsSubHeader onPriceChange={handlePriceChange} />

      {productsFiltered.length > 0 ? (
        productsFiltered.map((product) => {
          return (
            <div>
              <span>{product.name} - </span>
              <span>{product.price}</span>
            </div>
          );
        })
      ) : (
        <h1>Nenhum produto</h1>
      )}
    </div>
  );
};

export default Products;
