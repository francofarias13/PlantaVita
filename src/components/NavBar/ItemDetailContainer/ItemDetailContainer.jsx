import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProducts } from '../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import './itemDetailConteiner.css'

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProducts().then((products) => {
      const foundProduct = products.find((prod) => prod.id === itemId);
      setProduct(foundProduct);
    });
  }, [itemId]);

  return (
    <div>
      {product ? <ItemDetail {...product} /> : <p>Cargando...</p>}
    </div>
  );
}