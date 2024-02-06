import { Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { useState } from "react";

const BookList = (props) => {
  // BookList riceve il contenuto di uno dei JSON dalle props
  // ipotizziamo una prop chiamata "jsonOfBooks"
  // la troverò dentro props.jsonOfBooks

  // state = {
  //   searchValue: "",
  // };
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Form.Control
        placeholder="cerca qui"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        className="my-3"
      />
      {props.jsonOfBooks
        .filter((book) =>
          book.title.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((book) => (
          <Col sm={12} lg={4} key={book.asin}>
            <SingleBook
              oneBook={book}
              newAsin={props.newAsin}
              selected={props.selected}
            />
          </Col>
        ))}
    </>
  );
};

export default BookList;
