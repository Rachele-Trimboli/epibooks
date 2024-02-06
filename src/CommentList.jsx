import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

const CommentList = (props) => {
  // console.log(props.array);

  return props.array.map((commento) => {
    return (
      <ListGroup key={commento.elementId}>
        <ListGroup.Item>{commento.comment}</ListGroup.Item>
        <ListGroup.Item>{commento.rate}</ListGroup.Item>
      </ListGroup>
    );
  });
};
export default CommentList;
