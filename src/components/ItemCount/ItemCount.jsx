import "./itemCount.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="Counter">
      <div className="Controls">
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={decrement}
        >
          -
        </button>
        <h4 className="Number">{quantity}</h4>
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={increment}
        >
          +
        </button>
      </div>
      <div>
        <button
          className="btn btn-success btn-sm mt-2"
          onClick={() => onAdd(quantity)}
          disabled={stock === 0}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
