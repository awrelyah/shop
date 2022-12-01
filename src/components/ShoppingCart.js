import React, { useState, useEffect } from "react";
import "../style/shoppingCart.css";

function ShoppingCart({ cartItems }) {
  const totalsum = () =>
    cartItems.reduce((acc, curVal) => {
      return acc + curVal.price;
    }, 0);

  const [total, setTotal] = useState(totalsum);

  const items = cartItems.map((item) => {
    return (
      <div className="cart-item" key={item.id}>
        <div>
          <img src={item.url} alt={item.name} />
        </div>
        <div className="item-name">{item.name}</div>
        <div>{item.size}</div>
        <div className="quantity">1</div>
        <div>remove</div>
        <div>{item.price} EUR</div>
      </div>
    );
  });

  return (
    <div className="shopping-cart">
      <h1>Your Bag</h1>
      {cartItems.length > 0 ? (
        <div className="cart">
          <div className="cart-items">{items}</div>
          <div className="total">total {total} EUR</div>
          <div className="buttons">
            <input
              placeholder="Please enter promo code"
              className="promo-input"
            />
            <button>Apply Discount</button>
            <button>Checkout</button>
          </div>
        </div>
      ) : (
        <div>Your cart is empty!</div>
      )}
    </div>
  );
}

export default ShoppingCart;
