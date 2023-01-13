import "./App.css";
import React from "react";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { cartItems } from "./store/store";
import cartReducer from "./reducers/cart";
import LoginPage from "./pages/login/Login";

function App() {
  let [state, dispatch] = React.useReducer(cartReducer, cartItems);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home state={state} dispatch={dispatch} />}
          />
        </Routes>
        <Routes>
          <Route
            path="/cart"
            element={<Cart state={state} dispatch={dispatch} />}
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
