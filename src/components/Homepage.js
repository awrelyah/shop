import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import shoe from "../img/jordan.gif";
import "../style/homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <div className="square-container">
        <div className="red-square num1"></div>
        <div>
          <div className="red-square num2"></div>
          <div className="red-square num3"></div>
        </div>
      </div>

      <div className="container-row">
        <div className="container left">
          <img width="100px" src={logo} alt="logo" />
          <h3>BALTIC SNKRS - SNEAKERS & CLOTHING</h3>
          <h1>100% authentic shoes and clothing</h1>
          <h3>based in Tallinn, Estonia</h3>
          <Link to="/shop" className="shop-now-btn">
            Shop Now
          </Link>
        </div>
        <div className="container right">
          <img src={shoe} alt="spinning shoe" className="shoe-img" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
