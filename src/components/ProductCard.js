import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function ProductCard({ title, image, price, description, id }) {
  return (
    <div className="product-card">
      <div className="pc-inner-1">
      <div className="pc-inner-2">
      <div className="pc-inner-3">
      <div className="pc-inner-4">
      <div className="pc-inner-5">
      <div className="pc-inner-6">
      <div className="pc-inner-7">
      <div className="pc-inner-8">
     
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="pc">
      <Link to={`product/${id}`}>
        <h4>{title}</h4>
        <div className="img-wrapper">
          <img className="product-img" src={image} alt="" />
        </div>
        <h5>{`$${price.toFixed(2)}`}</h5>
      </Link>
      </div>
    </div>
  );
}

export default ProductCard;
