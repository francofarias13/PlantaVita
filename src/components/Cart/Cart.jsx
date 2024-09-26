import { useCart } from "../../context/CartContext";
import { useState } from "react";
import { Checkout } from "../CheckOut/checkout";
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem } = useCart();
  const [showCheckout, setShowCheckout] = useState(false); // Estado para mostrar el modal

  return (
    <div className="cart-container">
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">No hay productos en el carrito.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: ${item.price * item.quantity}</p>
            <button
              className="btn btn-danger"
              onClick={() => removeItem(item.id)}
            >
              Eliminar
            </button>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <button
          className="btn btn-success mt-3"
          onClick={() => setShowCheckout(true)}
        >
          Confirmar Compra
        </button>
      )}

      {showCheckout && <Checkout />}
    </div>
  );
};

export default Cart;
