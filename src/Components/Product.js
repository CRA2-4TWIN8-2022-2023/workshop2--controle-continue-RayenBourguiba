// import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import propTypes from 'prop-types';
import Button from "react-bootstrap/Button";
import React from "react";
import Card from "react-bootstrap/Card";
import { Component } from "react";

// const ProductCard = ({
//   name,
//   price,
//   img,
//   like,
//   quantity,
//   // description,
// }) => {
//   if (!name) return <div />;
//   return (
//     <Card style={{ width: "18rem" }}>
//       <Card.Img variant="top" src={require('../Assets/images/'+img)} />
//       <Card.Body>
//         <Card.Title>{name}</Card.Title>
//         <Card.Text>
//           Price: {price}
//         </Card.Text>
//         <Card.Text>
//           Quantity: {quantity}
//         </Card.Text>
//         <Card.Text>
//           Likes: {like}
//         </Card.Text>
//         <Row>
//           <Col>
//             <Button variant="primary">Like</Button>
//           </Col>
//           <Col>
//             <Button variant="info">Buy</Button>
//           </Col>
//         </Row>
//       </Card.Body>
//     </Card>
//   );
// };

// ProductCard.propTypes = {
//   name: propTypes.string,
//   price: propTypes.string,
//   img: propTypes.string ,
//   like: propTypes.number,
//   quantity: propTypes.number,
//   description: propTypes.string
// }

// export default ProductCard

class Product extends Component {
  constructor(props){
    super(props);
    this.state={
      product: props.produit
    }
  }
  render() {
    return (
      <Card>
        <Card.Img variant="top" src={require("../Assets/images/" + this.props.produit.img)} />
        <Card.Body>
          <Card.Title>{this.props.produit.name}</Card.Title>
          <Card.Text>Prix: {this.props.produit.price}</Card.Text>
          <Card.Text>Quantite: {this.props.produit.quantity}</Card.Text>
          <Card.Text>Likes: {this.props.produit.like}</Card.Text>
          <Button variant="primary">Like</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Product;
