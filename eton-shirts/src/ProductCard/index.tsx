import React from "react";

const ProductCard = () => {
  return (
    <div className="card">
      <img
        src={
          "https://staging-api.etonshirts.com/v1/retail/image/1080/bynder/5d4aa93e-2bc9-4439-8815-ffb94f8a324a/magical-mystery-tour-overshirt.webp"
        }
        alt={"Eton example shirt"}
      />
      <div className="card-body">
        <h2>{"Eton example shirt"}</h2>
        <p>{"Nice looking example shirt"}</p>
      </div>
    </div>
  );
};

export default ProductCard;
