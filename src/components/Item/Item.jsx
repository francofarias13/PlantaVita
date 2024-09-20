import "./item.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Item = ({ id, name, img, price, stock }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title mb-2">{name}</h5>
        <p className="card-text mb-1">Precio: ${price}</p>
        <p className="card-text mb-2">Stock disponible: {stock}</p>
        <Link to={`/item/${id}`} className="btn btn-success">
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
