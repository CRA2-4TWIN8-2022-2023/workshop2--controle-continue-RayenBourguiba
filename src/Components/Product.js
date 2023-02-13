import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import propTypes from 'prop-types';

const ProductCard = ({
  name,
  price,
  img,
  like,
  quantity,
  // description,
}) => {
  if (!name) return <div />;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={require('../Assets/images/'+img)} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Price: {price}
        </Card.Text>
        <Card.Text>
          Quantity: {quantity}
        </Card.Text>
        <Card.Text>
          Likes: {like}
        </Card.Text>
        <Row>
          <Col>
            <Button variant="primary">Like</Button>
          </Col>
          <Col>
            <Button variant="info">Buy</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

ProductCard.propTypes = {
  name: propTypes.string,
  price: propTypes.string,
  img: propTypes.string ,
  like: propTypes.number,
  quantity: propTypes.number,
  description: propTypes.string
}

export default ProductCard
