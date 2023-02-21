import React, { useEffect } from "react";
import { useState } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Alert from "react-bootstrap/Alert";
import products from "../products.json";
import ProductFunc from "./ProductFunc";
// import ProductFunc from "./ProductFunc";

function ProductsFunc() {
  const [showAlert, setShowAlert] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const buy = (product, updateQuantity) => {
    product.quantity--;
    updateQuantity(product.quantity);
    console.log(product.quantity--);
    showAlert1();
  };

  const showAlert1 = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  useEffect(() => {
    console.log("====================================");
    console.log("Component Mounted");
    console.log("====================================");
    setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
  });

  return (
    <>
      {showWelcome && <Alert variant="success">Welcome to our store!</Alert>}
      <CardGroup>
        {products.map((p, i) => (
          <ProductFunc key={i} product={p} buyFunction={buy} />
        ))}
      </CardGroup>
      {showAlert && <Alert variant="success">You bought an Item</Alert>}
    </>
  );
}

export default ProductsFunc;
