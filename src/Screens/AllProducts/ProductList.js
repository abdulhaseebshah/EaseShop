import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    const res = await axios("http://localhost:8000/products");
    setProducts(res.data);
    setLoading(false);
  };
  // console.log(products);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="productList">
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map((item) => {
          return (
            <Link to={`/ProductDetails/${item.id}`} key={item.id}>
              <div className="product">
                <div className="imgBx">
                  <img src={item.image} alt="" className="product-image" />
                </div>
                <span className="category">{item.category}</span>
                <span className="title">{item.name}</span>
                {/* <span className="description">{item.description}</span> */}
                <span className="price">${item.price}.00</span>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default ProductList;
