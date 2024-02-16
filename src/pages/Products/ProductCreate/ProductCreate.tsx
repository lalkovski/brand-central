import "./ProductCreate.scss";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";
import { SmartForm } from "components/Forms/SmartForm";
import { Input } from "components/Forms/Input";
import { Textarea } from "components/Forms/Textarea";
import { Select } from "components/Forms/Select";
import { createProductValidation } from "helpers/yup-validation-rules";
import { useEffect, useState } from "react";
import { getCategories, getStates } from "./product-create-api";
import { useAppContext, Product } from "AppContext";

interface ProductCreateProps {
  isOpen?: boolean | undefined;
  onClose?: () => void | undefined;
}

const ProductCreate = ({ isOpen, onClose }: ProductCreateProps) => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [states, setStates] = useState([]);
  const { products, setProducts } = useAppContext();

  const loadCategoriesAndStates = async () => {
    try {
      const categoriesResponse = await getCategories();
      const statesResponse = await getStates();
      const categoriesData = categoriesResponse.data;
      const statesData = statesResponse.data;
      setCategories(categoriesData);
      setStates(statesData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadCategoriesAndStates();
  }, []);

  const handleClose = () => {
    onClose?.();
    navigate(-1);
  };

  if (!isOpen) {
    return null;
  }

  const handleCreateProduct = (data: Product) => {
    const { id, ...restData } = data;

    const newProduct = {
      id: Date.now(),
      ...restData,
    };

    setProducts([...products, newProduct]);

    onClose?.();
    navigate(-1);
  };

  return (
    <>
      <div className="overlay" onClick={handleClose}></div>
      <div className="create-popup">
        <h2 className="title">Create New Product</h2>
        <SmartForm
          validationSchema={createProductValidation}
          onSubmit={handleCreateProduct}
        >
          <Input type="text" name="title" placeholder="Title" />
          <Input type="number" name="price" placeholder="Price" />
          <Input type="text" name="picture" placeholder="Image URL" />
          <Textarea name="description" placeholder="Description" />
          <Select name="state" options={states} />
          <Select name="category" options={categories} />

          <div className="button-container">
            <Button text="Cancel" onClick={handleClose} />
            <Button text="Create" type="submit" />
          </div>
        </SmartForm>
      </div>
    </>
  );
};

export default ProductCreate;
