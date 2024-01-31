import { Component } from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

class BookList extends Component {
  render() {
    return this.props.books.slice(7, 12).map((book) => {
      return (
        <Col sm={6} md={4} lg={2} key={book.asin}>
          <Card style={{ height: "100%" }}>
            <Card.Img variant="top" src={book.img} style={{ height: "100%" }} />
            <Card.Body className="d-flex flex-column justify-content-around">
              <Card.Title>{book.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  }
}
export default BookList;
