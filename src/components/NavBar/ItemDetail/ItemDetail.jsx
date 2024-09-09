import { useState, useEffect } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { useCart } from '../../NavBar/context/CartContext';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ItemDetail = ({ id, name, img, price, descripcion, stock }) => {
  const { addItem } = useCart();
  const [quantityAdded, setQuantityAdded] = useState(0);

  const onAdd = (quantity) => {
    addItem({ id, name, price }, quantity);
    setQuantityAdded(quantity);  
  };

  useEffect(() => {
    return () => {
      setQuantityAdded(0); 
    };
  }, []);

  return (
    <div className="ItemDetail">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>{descripcion}</p>
      <p>Precio: ${price}</p>
      <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            {quantityAdded > 0 && (
        <Link to="/cart" className="btn btn-success mt-3">
          Ver Compra
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;
