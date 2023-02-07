import { Component } from "react";
import React from "react";
import Button from 'react-bootstrap/Button';


class CompoasantClass extends Component {
  state = { myText: "Hello World!", valeur: 0 };

  handleClick = () => {
    this.setState({
      valeur: this.state.valeur + 1,
    });
  };
  render() {
    return (
      <>
        This is a class component <br></br> {this.state.myText}
        <input
          type="button"
          onClick={() => this.handleClick()}
          value="Increment"
        />
        <Button variant="primary" onClick={() => this.handleClick()}>Increment</Button>
        <h2>{this.state.valeur}</h2>
      </>
    );
  }
}

export default CompoasantClass;
