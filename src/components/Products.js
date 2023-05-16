import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Products.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      // console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="container">
        <h1> MOST POPULAR PRODUCTS </h1>
        <div className="row">
          {products.map((product) => {
            // console.log(product, "product");
            const { id, title, price, description, category, image } = product;
            return (
              <>
                <div className="col-md-4">
                  <div className="item">
                    <img
                      style={{ width: "100px" }}
                      alt={title}
                      src={image}
                    ></img>
                    <div className="category"> {category}</div>
                    <div className="title">{title}</div>
                    {/* <div className="desc">{description} </div> */}
                    <div className="price">Price: ${price}</div>
                    <Link to={`/more/${id}`}>
                      <button className="btn-more-info"> More Info </button>
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
