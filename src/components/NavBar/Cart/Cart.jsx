import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: ${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
