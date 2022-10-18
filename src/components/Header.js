import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import "../style/header.css";

function Header() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="home-link"><img width="40px" src={logo} alt="logo" />Baltic Snkrs</Link>
        <Link to="/shop" className="shop-link">Shop</Link> |{" "}
        <Link to="/cart" className="cart-link">Cart</Link>
      </nav>
    </div>
  );
}

export default Header