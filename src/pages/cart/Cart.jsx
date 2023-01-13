import React from "react";
import "./cart.css";
import banner from "../../assets/banner.jpg";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";

export default function Cart({ state, dispatch }) {
  let [total, setTotal] = React.useState(0);
  const navigate = useNavigate();
  React.useEffect(() => {
    setTotal(
      state.products.reduce((acc, curr) => {
        return acc + curr.price;
      }, 0)
    );
  }, [state.products]);

  let removeFromCart = (index) => {
    console.log(state.products);
    dispatch({ type: "REMOVEFROMCART", payload: index });
  };
  return (
    <>
      <NavBar state={state} />

      <div className="cart-container">
        <div className="cart-header">
          <div className="banner__info">
            <img className="banner" src={banner} alt="banner" />
            <h4>Hello</h4>
            <h2>Your shopping Basket</h2>
            {state.cartCount === 0 ? (
              <p>
                You have no items in your basket. To buy one or more items,
                click "Add to Basket" next to the item
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="cart-total">
            <p>
              Subtotal ({state.cartCount} items): {total})
            </p>
            <small style={{ marginTop: "10px" }}>
              <input type="checkbox" /> This order contains a gift
            </small>
            <button
              className="btn"
              style={{ padding: "10px 10px", color: "#111" }}
              onClick={() => navigate("/")}
            >
              {" "}
              Proceed to Checkout
            </button>
          </div>
        </div>
        {state.products.map((val, index) => {
          return (
            <div className="cart-card">
              <img src={val.img} alt="" style={{ width: "200px" }} />
              <div className="product-info">
                <h3>{val.name}</h3>
                <h3>$ {val.price}</h3>
                <div className="star-container" style={{ marginBottom: "0" }}>
                  <p className="star">&#9733;</p>
                  <p className="star">&#9733;</p>
                  <p className="star">&#9733;</p>
                  <p className="star">&#9733;</p>
                  <p className="rating-info">{val.rating}</p>
                </div>
                <button className="btn" onClick={() => removeFromCart(index)}>
                  Remove from Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
