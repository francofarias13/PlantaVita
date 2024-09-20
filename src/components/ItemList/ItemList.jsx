/* eslint-disable react/prop-types */
import Item from "../Item/Item";
import "./itemList.css";

export const ItemList = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        {products.map((prod) => (
          <div key={prod.id} className="col-sm-12 col-md-4 col-lg-3 mb-4">
            <Item {...prod} />
          </div>
        ))}
      </div>
    </div>
  );
};
