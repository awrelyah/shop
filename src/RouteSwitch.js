import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import  Shop from "./components/Shop";
import ShoppingCart from "./components/ShoppingCart";

const RouteSwitch = () => {

  const [cartItems, setCartItems] = useState([]);

  function addToCart(item){
    console.log('added');
    setCartItems(prev => [...prev, item]);
    console.log(cartItems);
  }
  return (
    <BrowserRouter>
    <Header cartItems={cartItems}/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop addToCart={addToCart}/>} />
        <Route path="/cart" element={<ShoppingCart cartItems={cartItems}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;