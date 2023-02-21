import Button from "react-bootstrap/Button";
import React from "react";
import Card from "react-bootstrap/Card";
import { Component } from "react";

class ProductCorr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.p,
      like: props.p.like,
    };
  }

  addLikes = () => {
    this.setState((prevState) => ({
      product: {
        ...prevState.product,
        like: prevState.product.like + 1,
      },
    }));
  };

  render() {
    return (
      <Card style={{ width: "18rem" }} key={this.props.i}>
        <Card.Img
          variant="top"
          src={require("../Assets/images/" + this.props.p.img)}
        />
        <Card.Body>
          <Card.Title>{this.props.p.name}</Card.Title>
          <Card.Text>{this.props.p.description}</Card.Text>
          <Card.Text>{this.props.p.price} DT</Card.Text>
          <Card.Text>Likes : {this.state.product.like} </Card.Text>
          <Card.Text>Quantity : {this.props.p.quantity} </Card.Text>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="info" onClick={this.addLikes}>
              Like
            </Button>
            <Button variant="primary">Buy</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default ProductCorr;
