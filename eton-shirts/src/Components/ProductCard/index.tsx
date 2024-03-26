import React from "react";
import "./styles.css";
import { Shirt } from "../../Hooks/types";

const ProductCard = ({ name, productVariants, colorLinks, uri }: Shirt) => {
  return (
    <div className="card">
      <img
        src={`https://staging-api.etonshirts.com/v1/retail/image/1080/bynder/${productVariants[0].retailImages.flatlay.mediaKey}/${uri}.webp`}
        alt={"Eton example shirt"}
      />
      <div className="card-body">
        <h2>{name}</h2>
        <p>{productVariants[0].price.formattedPrice}</p>
      </div>
    </div>
  );
};

export default ProductCard;
