import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../App.css";

function Products() {
  const [products, setProducts] = useState(null);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .then((json) => console.log(json));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const loadingMessage = () => <h1>Loading...</h1>;

  const productsList = products?.map((product) => {
    console.log("products: ", products);
    return (
      <ProductCard
        key={product.id}
        id={product.id}
        title={product.title}
        image={product.image}
        price={product.price}
        description={product.description}
        className="product-card"
      />
    );
  });

  return (
    <div className="products-list">
      {products ? productsList : loadingMessage()}
    </div>
  );
}

export default Products;
