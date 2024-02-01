import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

class CommentList extends Component {
  render() {
    console.log(this.props.array);

    return this.props.array.map((commento) => {
      return (
        <ListGroup key={commento.elementId}>
          <ListGroup.Item>{commento.comment}</ListGroup.Item>
          <ListGroup.Item>{commento.rate}</ListGroup.Item>
        </ListGroup>
      );
    });
  }
}
export default CommentList;
