import React from "react";
import "../App.css";
import StoreData from "../products.json";
import HeaderComponent from "./HeaderComponent";
import ProductCard from "./Product";

export const Store = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div className="store-container">
        {StoreData.map((data, key) => {
          return (
            <div key={key}>
              <ProductCard
                key={key}
                name={data.name}
                price={data.price}
                img={data.img}
                like={data.img}
                quantity={data.quantity}
                description={data.description}
              ></ProductCard>
            </div>
          );
        })}
      </div>
    </>
  );
};
