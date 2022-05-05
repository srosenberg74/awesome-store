import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

function ProductDetails() {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setItem(json));
  });

  if (item.description) {
    item.description = 
      item.description[0].toUpperCase() + item.description.slice(1);
      // item.description = item.description.filter((item) => item !== "/");    
  }

  return (
    <div className="details-main">
      {item.title ? (
        <div>
          <h3>{item.title}</h3>
          <div className="details-inner">
            <div className="details-img-wrap">
              <img className="details-img" src={item.image} alt="" />
            </div>
            <p className="details-description">{item.description}</p>
          </div>
          <h3>{`$${item.price.toFixed(2)}`}</h3>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default ProductDetails;
