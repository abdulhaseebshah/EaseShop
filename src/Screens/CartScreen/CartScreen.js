import React from "react";
import "./CartScreen.css";

const CartScreen = () => {
  return (
    <div className="cart-container">
      <div className="product-list">
        <table border={0}>
          <tr>
            <td>
              <span>Product</span>
            </td>
            <td>
              <span>Price</span>
            </td>
            <td>
              <span>Quantity</span>
            </td>
            <td>
              <span>Total</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className="item">
                <div className="imgBx">
                  <img
                    src="https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    alt=""
                  />
                </div>
                <div class="itemInfo">
                  <a href="" class="title">
                    Seasonal color chuck 70
                  </a>
                  <span>category</span>
                  <span className="remove">Remove</span>
                </div>
              </div>
            </td>
            <td>
              <span>$12.00</span>
            </td>
            <td>
              <span>1</span>
            </td>
            <td>
              <span>$12.00</span>
            </td>
          </tr>
        </table>
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="sub-total">
          <span>Sub total: </span>
          <span>$12.00</span>
        </div>
        <span
          style={{
            marginBottom: "20px",
            color: "#555",
            fontStyle: "italic",
            fontSize: "14px",
          }}
        >
          Taxes and shipping calculated at checkout
        </span>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default CartScreen;
