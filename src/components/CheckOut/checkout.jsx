import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { addOrderToFirebase } from "../../firebase/db";
import { Link } from "react-router-dom";
import "./checkout.css";

export const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
  });
  const [orderSummary, setOrderSummary] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      setOrderSummary(cart);
      const totalAmount = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setTotal(totalAmount);
    }
  }, [cart]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      user,
      items: orderSummary,
      total: total,
      date: new Date(),
    };

    const id = await addOrderToFirebase(order);
    setOrderId(id);
    clearCart();
  };

  return (
    <div className="checkout-modal">
      {orderId ? (
        <div>
          <h2>Resumen de Compra</h2>
          <p>
            Nombre: {user.nombre} {user.apellido}
          </p>
          <p>Email: {user.email}</p>
          <p>Teléfono: {user.telefono}</p>

          <h3>Productos Seleccionados</h3>
          <ul>
            {orderSummary.map((item) => (
              <li key={item.id}>
                <p>
                  {item.name} - {item.quantity} x ${item.price} = $
                  {item.price * item.quantity}
                </p>
              </li>
            ))}
          </ul>

          <h3>Total: ${total}</h3>
          <p>Fecha: {new Date().toLocaleDateString()}</p>
          <p>ID de compra: {orderId}</p>

          <Link to="/" className="btn btn-primary mt-3">
            Volver al inicio
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={user.nombre}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Apellido</label>
            <input
              type="text"
              name="apellido"
              value={user.apellido}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Teléfono</label>
            <input
              type="tel"
              name="telefono"
              value={user.telefono}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-success">
            Confirmar Datos
          </button>
        </form>
      )}
    </div>
  );
};
