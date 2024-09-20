import { useCart } from "../context/CartContext";
import cart from "./assets/icons8-carrito-de-compras-80.png";
import "./cartWidget.css";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" className="cart-icon">
      <img src={cart} alt="cart-widget" width="50" />
      {totalItems > 0 && <span className="cart-counter">{totalItems}</span>}
    </Link>
  );
};
