import React from "react";
import ProductCard from "../ProductCard/index.tsx";
import "./styles.css";
import { useFetchShirts } from "../../Hooks/useFetchShirts.ts";

const ProductList = () => {
  const { data } = useFetchShirts();

  if (!data) return null;

  const { displays } = data;

  return (
    <div className="list">
      {displays.map(({ colorLinks, id, name, productVariants, type, uri }) => {
        return (
          <ProductCard
            key={id}
            colorLinks={colorLinks}
            id={id}
            name={name}
            productVariants={productVariants}
            type={type}
            uri={uri}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
