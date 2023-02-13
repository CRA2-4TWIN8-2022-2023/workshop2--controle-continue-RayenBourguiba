import React from "react";
import { Col, Row } from "react-bootstrap";
import "../App.css";
import StoreData from "../products.json";
import HeaderComponent from "./HeaderComponent";
import ProductCard from "./Product";

export const Store = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <Row className="store-container">
        {StoreData.map((data, key) => {
          return (
            <Col key={key}>
              <ProductCard
                key={key}
                name={data.name}
                price={data.price}
                img={data.img}
                like={data.like}
                quantity={data.quantity}
                description={data.description}
              ></ProductCard>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
