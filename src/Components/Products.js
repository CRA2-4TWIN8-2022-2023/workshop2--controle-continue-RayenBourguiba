import { Component } from "react";
import React from "react";
import products from "../products.json";
import CardGroup from "react-bootstrap/CardGroup";
import ProductCorr from "./Product";

class Products extends Component {
  state = {};

  buy = (products) => {
    products.quantity--;
  };
  render() {
    return (
      <>
        <CardGroup>
          {products.map((p, i) => (
            <ProductCorr key={i} p={p} buyFunction={this.buy} />
          ))}
        </CardGroup>
      </>
    );
  }
}

export default Products;
