import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import cartIcon from "./assets/icons8-carrito-de-compras-80.png";
import "./cartWidget.css";

export const CartWidget = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart" className="cart-icon">
      <img src={cartIcon} alt="Cart" width="50" />
      {totalItems > 0 && <span className="cart-counter">{totalItems}</span>}
    </Link>
  );
};
