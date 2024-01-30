import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";
import FirstShelf from "./FirstShelf";
import ShelfTitle from "./ShelfTitle";
import SecondShelf from "./SecondShelf";
import ThirdShelf from "./ThirdShelf";
import Welcome from "./Welcome";
import Hero from "./Hero";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";

function App() {
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
              <ShelfTitle text="Fantasy" />
            </Col>
          </Row>

          <Row className="mt-3">
            <FirstShelf></FirstShelf>
          </Row>

          <Row className="mt-3">
            <Col>
              <ShelfTitle text="Romance" />
            </Col>
          </Row>

          <Row className="mt-3">
            <SecondShelf></SecondShelf>
          </Row>
          <Row className="mt-3">
            <Col>
              <ShelfTitle text="Scifi" />
            </Col>
          </Row>
          <Row className="mt-3">
            <ThirdShelf></ThirdShelf>
          </Row>
        </Container>
      </main>
      <footer>
        <MyFooter></MyFooter>
      </footer>
    </div>
  );
}

export default App;
