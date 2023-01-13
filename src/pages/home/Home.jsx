import React from "react";
import homeImg from "../../assets/home-img.jpg";
import "./home.css";
import ProductDescription from "../../components/product-description/ProductDescription";
import NavBar from "../../components/navbar/NavBar";
import { db } from "../../db/db";

export default function Home({ state, dispatch }) {
  let addToCart = (index) => {
    dispatch({ type: "ADDTOCART", payload: db[index] });
    console.log(state);
  };
  return (
    <>
      <NavBar state={state} />
      <img className="amzbg" src={homeImg} alt="amazon-prime" />
      <div className="container">
        <div className="col  -1">
          {db.map((val, index) => {
            if (val.identifier === 2) {
              return (
                <div className="card1">
                  <ProductDescription
                    title={val.name}
                    rating={val.rating}
                    img={val.img}
                    onTap={() => addToCart(index)}
                    price={val.price}
                    text="Add to Basket"
                  />
                </div>
              );
            }
          })}
        </div>

        <div className="col2">
          {db.map((val, index) => {
            if (val.identifier === 3) {
              return (
                <div className="card2">
                  <ProductDescription
                    title={val.name}
                    rating={val.rating}
                    img={val.img}
                    onTap={() => addToCart(index)}
                    price={val.price}
                    text="Add to Basket"
                  />
                </div>
              );
            }
          })}
        </div>

        <div className="col3">
          {db.map((val, index) => {
            if (val.identifier === 1) {
              return (
                <div className="card3">
                  <ProductDescription
                    title={val.name}
                    rating={val.rating}
                    img={val.img}
                    onTap={() => addToCart(index)}
                    price={val.price}
                    text="Add to Basket"
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
