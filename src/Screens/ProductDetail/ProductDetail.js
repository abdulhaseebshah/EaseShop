import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    const res = await axios(`http://localhost:8000/products/${id}`);
    setProduct(res.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleAddProduct = (product, redirect) => {
    console.log(product);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductExists = cart.find((item) => item.id === product.id);
    if (isProductExists) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...product, quantity: 1 }])
      );
    }
    if (redirect) {
      window.location.href = "/CartList";
    }
  };

  return (
    <div className="details-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="product__details">
          <div className="imgBx">
            <img src={product.image} alt="" />
          </div>
          <div className="txtBx">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <span className="price">${product.price}.00</span>
            <div style={{ display: "flex" }}>
              <button
                className="addto__cart outline"
                onClick={() => handleAddProduct(product, true)}
              >
                Buy Now
              </button>
              <button
                className="addto__cart"
                onClick={() => handleAddProduct(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
