import React from "react";
import "./prod-desc.css";
export default function ProductDescription({
  title,
  rating,
  img,
  onTap,
  price,
  text,
}) {
  return (
    <>
      <p className="product-title">{title}</p>
      <p>₹ {price}</p>
      <div className="star-container">
        <p className="star">&#9733;</p>
        <p className="star">&#9733;</p>
        <p className="star">&#9733;</p>
        <p className="star">&#9733;</p>
        <p className="rating-info">{rating}</p>
      </div>
      <img className="product-img" src={img} alt="" />
      <button className="btn" onClick={onTap}>
        {text}
      </button>
    </>
  );
}
