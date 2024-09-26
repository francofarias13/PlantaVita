import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import "./itemListContainer.css";
import { getProducts } from "../../firebase/db";

/* eslint-disable react/prop-types */
export const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(setProducts, categoryId);
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
