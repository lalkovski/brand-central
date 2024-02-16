import "./Controls.scss";
import Button from "components/Button/Button";
import { useAppContext } from "AppContext";
import { Link } from "react-router-dom";
import CreateBrand from "pages/CreateBrand";

const Controls = () => {
  const {
    products,
    setProducts,
    defaultProducts,
    isCreatePopupOpen,
    setCreatePopupOpen,
  } = useAppContext();

  const sortByName = () => {
    const sortedProducts = [...products].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setProducts(sortedProducts);
  };

  const sortByPrice = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  const resetProducts = () => {
    setProducts(defaultProducts);
  };

  const openCreatePopup = () => {
    setCreatePopupOpen(true);
  };

  const closeCreatePopup = () => {
    setCreatePopupOpen(false);
  };

  return (
    <div className="controls">
      <div className="left">
        <Button text="Name" onClick={sortByName} />
        <Button text="Price" onClick={sortByPrice} />
        <Button text="Reset" onClick={resetProducts} />
      </div>
      <div className="right">
        <Link to="/products/create">
          <Button text="Create New Product" onClick={openCreatePopup} />
        </Link>
        <CreateBrand />
      </div>
    </div>
  );
};

export default Controls;
