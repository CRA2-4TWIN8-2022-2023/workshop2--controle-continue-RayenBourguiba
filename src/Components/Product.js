import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductCard = ({
  name,
  price,
  img,
  like,
  quantity,
  description,
}) => {
  if (!name) return <div />;
  return (
    <Card style={{ width: "18rem" }}>
      {/* <Card.Img variant="top" src=``./Assets/images/placeholder.jpg`` /> */}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description} {price} {img} {like} {quantity}
        </Card.Text>
        <Row>
          <Col>
            <Button variant="primary">Like</Button>
          </Col>
          <Col>
            <Button variant="primary">Buy</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProductCard
