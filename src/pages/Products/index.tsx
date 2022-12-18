import { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import api from "../../services/api";
import AddProductForm from "./components/AddProductForm";
import DeleteConfirmation from "./components/DeleteConfirmation";
import DeleteFeedback from "./components/DeleteFeedback";
import ProductsSubHeader from "./components/ProductsSubHeader";
import ProductsTable from "./components/ProductsTable";

import styles from "./styles.module.css";
import { IDeleteProduct, IProduct } from "./types";

const Products = () => {
  const [productsList, setProductsList] = useState<IProduct[]>([]);
  const [priceFilter, setPriceFilter] = useState(0);
  const [showProductForm, setShowProductForm] = useState(false);
  const [deleteProductFlowSettings, setDeleteProductFlowSettings] =
    useState<IDeleteProduct>({
      getConfirmation: false,
      showFeedback: false,
      itemId: "",
    });
  const [editItem, setEditItem] = useState<IProduct | undefined>(undefined);

  const getData = async () => {
    const result = await api.get<IProduct[]>("/product");

    setProductsList(result.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handlePriceChange = (value: number) => {
    setPriceFilter(value);
  };

  const productsFiltered = productsList.filter(
    (product) => product.price > priceFilter,
  );

  const handleCloseAddProductModal = () => {
    setShowProductForm(false);
  };

  const handleCloseDeleteConfirmationModal = () => {
    setDeleteProductFlowSettings((deleteProductFlowSettings) => {
      return { ...deleteProductFlowSettings, getConfirmation: false };
    });
  };

  const handleClosDeleteFeedbackModal = () => {
    setDeleteProductFlowSettings((deleteProductFlowSettings) => {
      return { ...deleteProductFlowSettings, showFeedback: false };
    });
  };

  const handleAddProductClick = () => {
    setShowProductForm(true);
  };

  const handleProductCreation = () => {
    setShowProductForm(false);
    setEditItem(undefined);
    getData();
  };

  const handleDeleteClick = (id: string) => {
    setDeleteProductFlowSettings((deleteProductFlowSettings) => {
      return {
        ...deleteProductFlowSettings,
        itemId: id,
        getConfirmation: true,
      };
    });
  };

  const handleDeleteConfirmation = async () => {
    if (deleteProductFlowSettings.itemId) {
      try {
        await api.delete(`/product/${deleteProductFlowSettings.itemId}`);
        setProductsList((productsList) => {
          return productsList.filter(
            (product) => product._id !== deleteProductFlowSettings.itemId,
          );
        });

        setDeleteProductFlowSettings({
          getConfirmation: false,
          showFeedback: true,
          itemId: undefined,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleContinueClick = () => {
    setDeleteProductFlowSettings((deleteProductFlowSettings) => {
      return { ...deleteProductFlowSettings, showFeedback: false };
    });
  };

  const handleEditClick = (item: IProduct) => {
    setEditItem(item);
  };

  return (
    <div className={styles.container}>
      <ProductsSubHeader
        onPriceChange={handlePriceChange}
        onAddProductClick={handleAddProductClick}
      />

      {productsFiltered.length > 0 ? (
        <ProductsTable
          data={productsFiltered}
          onDeleteClick={handleDeleteClick}
          onEditClick={handleEditClick}
        />
      ) : (
        <h1>Nenhum produto</h1>
      )}

      {showProductForm || editItem ? (
        <Modal onClose={handleCloseAddProductModal}>
          <AddProductForm
            defaultValues={editItem}
            onProductCreation={handleProductCreation}
          />
        </Modal>
      ) : null}

      {deleteProductFlowSettings.getConfirmation ? (
        <Modal onClose={handleCloseDeleteConfirmationModal}>
          <DeleteConfirmation onConfirmation={handleDeleteConfirmation} />
        </Modal>
      ) : null}

      {deleteProductFlowSettings.showFeedback ? (
        <Modal onClose={handleClosDeleteFeedbackModal}>
          <DeleteFeedback onContinueClick={handleContinueClick} />
        </Modal>
      ) : null}
    </div>
  );
};

export default Products;
