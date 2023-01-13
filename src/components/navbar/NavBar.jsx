import React from "react";
import amazonLogo from "../../assets/amazon-logo.png";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function NavBar({ state }) {
  let location = useLocation();

  return (
    <>
      <nav>
        <Link to="/">
          <img className="amzlogo" src={amazonLogo} alt="logo" />
        </Link>

        <div className="search-box">
          <input type="text" name="search-box" id="search-box" />
          <div className="search-icon">
            <span class="material-symbols-outlined">search</span>
          </div>
        </div>

        <div className="header">
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            <div className="col1 col">
              <p>{location.state ? location.state.email : "Hello guest"}</p>
              <p className="sign-in-btn">
                {location.state ? "Sign-out" : "Sign-in"}
              </p>
            </div>
          </Link>

          <div className="col-2 col">
            <p>Returns</p>
            <p className="sign-in-btn">& Orders</p>
          </div>
          <div className="col-3 col">
            <p>Your</p>
            <p className="sign-in-btn">Prime</p>
          </div>
          <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
            <div className="col4 col">
              <span class="material-symbols-outlined">shopping_bag</span>
              <p className="sign-in-btn" style={{ marginLeft: "8px" }}>
                {state.cartCount}
              </p>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}
