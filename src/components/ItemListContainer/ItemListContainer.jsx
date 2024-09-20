import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import "./itemListContainer.css";
import { getProducts } from "../asyncMock";


/* eslint-disable react/prop-types */
export const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        if (categoryId) {
          setProducts(response.filter((prod) => prod.category === categoryId));
        } else {
          setProducts(response);
        }
      })
      .catch((error) => console.error(error));
  }, [categoryId]);

  return (
    <div>
      <div className="center-text">
        <h1>{greeting}</h1>
      </div>
      <ItemList products={products} />
    </div>
  );
};
