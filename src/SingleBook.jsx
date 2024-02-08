import Card from "react-bootstrap/Card";

import { useState } from "react";

const SingleBook = (props) => {
  // se l'oggetto passato nelle props si chiama "oneBook",
  // lo troverò dove in props.oneBook

  // state = {
  //   selected: false,
  // };
  const [selected, setSelected] = useState(false);

  return (
    <Card
      border={selected ? "info" : "gray"}
      style={{ height: "100%" }}
      data-testid="card"
    >
      <Card.Img
        data-testid="singlebook"
        variant="top"
        src={props.oneBook.img}
        onClick={() => {
          // setState({
          //   selected: props.selected ? false : true,
          // });
          setSelected(!selected);
          props.newAsin(props.oneBook.asin);
          // console.log(props.oneBook.asin);
        }}
      />
      <Card.Body className="d-flex flex-column justify-content-evenly">
        <Card.Title>{props.oneBook.title}</Card.Title>
        <Card.Text>{props.oneBook.category}</Card.Text>
        {/* {this.state.selected === true && (
            <CommentArea asin={this.props.oneBook.asin}></CommentArea>
          )} */}
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
