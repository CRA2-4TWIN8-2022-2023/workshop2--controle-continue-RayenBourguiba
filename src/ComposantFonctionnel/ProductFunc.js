import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";
import { useState } from "react";

function ProductFunc(props) {
  const [product] = useState(props.product);
  const [like, setLike] = useState(props.product.like);
  const [quantity, setQuantity] = useState(props.product.quantity);

  const addLikes = () => {
    setLike(like + 1);
  };

  const updateQuantity = () => {
    setQuantity(quantity - 1);
  };

  const styleClass = like > 5 ? "bestProduct" : "text-center";

  return (
    <>
      <Card className={styleClass}>
        <Card.Img
          variant="top"
          src={require("../Assets/images/" + props.product.img)}
        />
        <Card.Body>
          <Card.Title> {props.product.name}</Card.Title>.
          <Card.Text>{props.product.description}</Card.Text>
          <Card.Text> {props.product.price} </Card.Text>
          <Card.Text>Likes :{like}</Card.Text>
          <Card.Text>quantité :{quantity}</Card.Text>
          <Button variant="primary" onClick={addLikes}>
            Like
          </Button>{" "}
          <Button
            variant="primary"
            onClick={() => props.buyFunction(product, updateQuantity)}
            disabled={quantity === 0}
          >
            Buy
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductFunc;
