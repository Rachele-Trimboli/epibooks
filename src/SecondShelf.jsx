// import { Component } from "react";

// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Books from "../src/Data/books/romance.json";

// class SecondShelf extends Component {
//   render() {
//     return Books.slice(0, 6).map((Book) => {
//       return (
//         <Col sm={6} md={4} lg={2} key={Book.asin}>
//           <Card style={{ height: "100%" }}>
//             <Card.Img variant="top" src={Book.img} style={{ height: "100%" }} />
//             <Card.Body className="d-flex flex-column justify-content-around">
//               <Card.Title>{Book.title}</Card.Title>
//               <Card.Text>{Book.category}</Card.Text>
//               <Button variant="outline-info">{Book.price + "€"} </Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       );
//     });
//   }
// }

// export default SecondShelf;
