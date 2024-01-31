import { Component } from "react";
import Card from "react-bootstrap/Card";
// import Books from "./Data/books/fantasy.json";
import Col from "react-bootstrap/Col";

// const SingleBook = function (propsObj) {
//   console.log(propsObj);
//   return (
//     <Col sm={6} md={4} lg={2} key={propsObj.asin}>
//       <Card style={{ height: "100%" }}>
//         <Card.Img variant="top" src={propsObj.img} style={{ height: "100%" }} />
//         <Card.Body className="d-flex flex-column justify-content-around">
//           <Card.Title>{propsObj.title}</Card.Title>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };
// export default SingleBook;

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    console.log(this.props.books);
    return (
      <Col sm={6} md={4} lg={2} key={this.props.asin}>
        <Card
          border={this.state.selected === true ? "info" : "gray"}
          style={{ height: "100%" }}
          clicked={this.state.selected}
          onClick={(e) => {
            this.setState({
              ...this.state.selected,
              selected: this.state.selected === true ? false : true,
            });
          }}
        >
          <Card.Img
            variant="top"
            src={this.props.img}
            style={{ height: "100%" }}
          />
          <Card.Body className="d-flex flex-column justify-content-around">
            <Card.Title>{this.props.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default SingleBook;
