import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./itemDetailConteiner.css";
import { getSingleProduct } from "../../firebase/db";

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getSingleProduct(itemId, setProduct);
  }, [itemId]);

  return (
    <div>{product ? <ItemDetail {...product} /> : <p>Cargando...</p>}</div>
  );
};
