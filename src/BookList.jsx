import { Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  // BookList riceve il contenuto di uno dei JSON dalle props
  // ipotizziamo una prop chiamata "jsonOfBooks"
  // la troverò dentro props.jsonOfBooks

  state = {
    searchValue: "",
  };

  render() {
    return (
      <>
        <Form.Control
          placeholder="cerca qui"
          value={this.state.searchValue}
          onChange={(e) => {
            this.setState({ searchValue: e.target.value });
          }}
          className="my-3"
        />
        {this.props.jsonOfBooks
          .filter((book) =>
            book.title
              .toLowerCase()
              .includes(this.state.searchValue.toLowerCase())
          )
          .map((book) => (
            <Col sm={6} md={4} lg={2} key={book.asin}>
              <SingleBook oneBook={book} />
            </Col>
          ))}
      </>
    );
  }
}

export default BookList;
