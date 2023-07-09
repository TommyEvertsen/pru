import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../components/css/NavbarMashi.css";

function NavbarMashi() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary "
      defaultExpanded
    >
      <Container>
        <Navbar.Brand className="ms-auto right" href="#home">
          Phuc Huynh Evertsen
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features" className="ms-auto">
              About me
            </Nav.Link>
            <Nav.Link href="#cv" className="ms-auto">
              CV
            </Nav.Link>
            <Nav.Link href="#teaching" className="ms-auto">
              Teaching
            </Nav.Link>
            <Nav.Link href="#teaching" className="ms-auto">
              Research
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMashi;
