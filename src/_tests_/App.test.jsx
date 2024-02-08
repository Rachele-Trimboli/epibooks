import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import Welcome from "../Welcome";
import books from "../Data/books/horror.json";
import SingleBook from "../SingleBook";
import CommentArea from "../CommentArea";

describe("Welcome mounting", () => {
  // il componente welcome è nel documento?
  it("correctly mount Welcome component", () => {
    render(<App />);
    const welcome = screen.getByTestId("welcome");
    expect(welcome).toBeInTheDocument();
  });
  //   Il numero di Card è uguale al numero di libri nel json?

  it("Correctly mount the same number of cards and books", async () => {
    render(<App />);
    const jsonbooks = books;
    const cards = await screen.findAllByTestId("card");
    expect(cards).toHaveLength(jsonbooks.length);
  });
  // Verifica che il componente CommentArea venga renderizzato correttamente.

  it("correctly mount commentarea at start", () => {
    render(<CommentArea />);
  });
  //   Verifica che all’avvio della pagina, senza aver ancora cliccato su nessun libro, non ci siano istanze del componente SingleComment all’interno del DOM.
  //   Verifica infine che, cliccando su di un libro con recensioni, esse vengano caricate correttamente all’interno del DOM.

  it("correctly mount commentArea", async () => {
    render(<App />);
    const commentArea = screen.queryAllByTestId("listitem");
    expect(commentArea).toHaveLength(0);
    const book = screen.queryAllByTestId("singlebook");
    fireEvent.click(book[0]);
    const newCommentArea = await screen.findAllByTestId("listitem");
    expect(newCommentArea).not.toHaveLength(0);
  });
  //   Verifica, magari con più tests, che il filtraggio dei libri tramite navbar si comporti come previsto.
  it("correctly mount searchNavbar", () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText("cerca qui");
    fireEvent.change(searchInput, { target: { value: searchInput.value } });
    const cards = screen.queryAllByTestId("card");
    expect(cards).not.toHaveLength(0);
  });
  //   Verifica che, cliccando su un libro, il suo bordo cambi colore.

  it("cambia correttamente il colore del bordo", async () => {
    render(<App />);
    const img = await screen.findAllByTestId("singlebook");
    const card = await screen.findAllByTestId("card");

    fireEvent.click(img[0]);
    const clickedCard = await screen.findAllByTestId("card");

    expect(clickedCard[0]).toHaveStyle({ borderColor: "info" });
  });
});
