import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";
import ShelfTitle from "./ShelfTitle";
import Welcome from "./Welcome";
import Hero from "./Hero";
import Shelf from "./Shelf";
import Fantasy from "./Data/books/fantasy.json";
import { Component } from "react";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import books from "./Data/books/horror.json";
import BookList from "./BookList";
import CommentArea from "./CommentArea";

class App extends Component {
  state = {
    asin: "",
    selected: false,
  };

  newAsin = (value) => {
    this.setState({
      asin: value,
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <MyNav></MyNav>
        </header>
        <main>
          <Container fluid>
            <Row>
              <Col>
                <Hero></Hero>
              </Col>
            </Row>
          </Container>
          <Container className="mt-5 mb-5">
            <Row>
              <Col>
                <Welcome></Welcome>
              </Col>
            </Row>
            <Row>
              <Col>
                <ShelfTitle text="In evidenza" />
              </Col>
            </Row>

            <Row className="mt-3">
              <Shelf books={Fantasy}></Shelf>
            </Row>

            <Row className="mt-3">
              <Col>
                <ShelfTitle text="I titoli del momento" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <BookList
                    jsonOfBooks={books}
                    asin={this.state.asin}
                    newAsin={this.newAsin}
                    selected={this.state.selected}
                  />
                </Row>
              </Col>
              <Col>
                <CommentArea asin={this.state.asin}></CommentArea>
              </Col>
            </Row>
          </Container>
        </main>
        <footer>
          <MyFooter></MyFooter>
        </footer>
      </div>
    );
  }
}

export default App;
