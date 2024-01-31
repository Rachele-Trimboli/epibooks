import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";
import ShelfTitle from "./ShelfTitle";
import Welcome from "./Welcome";
import Hero from "./Hero";
import Shelf from "./Shelf";
import Fantasy from "./Data/books/fantasy.json";
import Romance from "./Data/books/romance.json";
import Scifi from "./Data/books/scifi.json";
import Horror from "./Data/books/horror.json";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import BookList from "./BookList";

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
            <Shelf books={Fantasy}></Shelf>
          </Row>

          <Row className="mt-3">
            <Col>
              <ShelfTitle text="Romance" />
            </Col>
          </Row>

          <Row className="mt-3">
            <Shelf books={Romance}></Shelf>
          </Row>

          <Row className="mt-3">
            <Col>
              <ShelfTitle text="I titoli del momento" />
            </Col>
          </Row>
          <Row className="mt-3 justify-content-evenly">
            <SingleBook
              title={Romance[0].title}
              img={Romance[0].img}
              key={Romance[0].asin}
            ></SingleBook>
            <SingleBook
              title={Scifi[0].title}
              img={Scifi[0].img}
              key={Scifi[0].asin}
            ></SingleBook>
          </Row>
          <Row className="mt-3 ">
            <Col>
              <ShelfTitle text="I tuoi sogni" />
            </Col>
          </Row>
          <Row className="mt-3 justify-content-center">
            <BookList books={Romance}></BookList>
          </Row>
          <Row className="mt-3">
            <Col>
              <ShelfTitle text="I tuoi incubi" />
            </Col>
          </Row>
          <Row className="mt-3 justify-content-center">
            <BookList books={Horror}></BookList>
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
