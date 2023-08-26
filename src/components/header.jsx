import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../components/css/NavbarMashi.css";



function NavbarMashi() {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      style={{ backgroundColor: "red !important"  }}
      className="custom-navbar bg-body-tertiary header"
   
      defaultExpanded
    >
      <Container >
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="about-me" className="ms-auto nav-text">
              About me
            </Nav.Link>
            <Nav.Link href="#cv" className="ms-auto nav-text">
              CV
            </Nav.Link>
            <Nav.Link href="#teaching" className="ms-auto nav-text">
              Teaching
            </Nav.Link>
            <Nav.Link href="#teaching" className="ms-auto nav-text">
              Research
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMashi;
