import Nav from "react-bootstrap/Nav";

const MyFooter = function () {
  return (
    <Nav className="justify-content-center bg-dark p-5">
      <Nav.Item>
        <Nav.Link>Contatti</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Privacy</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Diritti</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
export default MyFooter;
