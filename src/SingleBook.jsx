import Card from "react-bootstrap/Card";

import { Component } from "react";

class SingleBook extends Component {
  // se l'oggetto passato nelle props si chiama "oneBook",
  // lo troverò dove in props.oneBook

  state = {
    selected: false,
  };

  render() {
    return (
      <Card
        border={this.state.selected ? "info" : "gray"}
        style={{ height: "100%" }}
        onClick={() => {
          this.setState({
            selected: this.state.selected ? false : true,
          });
        }}
      >
        <Card.Img variant="top" src={this.props.oneBook.img} />
        <Card.Body className="d-flex flex-column justify-content-evenly">
          <Card.Title>{this.props.oneBook.title}</Card.Title>
          <Card.Text>{this.props.oneBook.category}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
