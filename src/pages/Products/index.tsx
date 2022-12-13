import { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import api from "../../services/api";
import AddProductForm from "./components/AddProductForm";
import ProductsSubHeader from "./components/ProductsSubHeader";
import ProductsTable from "./components/ProductsTable";

import styles from "./styles.module.css";

export interface IProduct {
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
  const [showModal, setShowModal] = useState(true);

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

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <ProductsSubHeader onPriceChange={handlePriceChange} />

      {productsFiltered.length > 0 ? (
        <ProductsTable data={productsFiltered} />
      ) : (
        <h1>Nenhum produto</h1>
      )}

      {showModal ? (
        <Modal onClose={handleCloseModal}>
          <AddProductForm />
        </Modal>
      ) : null}
    </div>
  );
};

export default Products;
