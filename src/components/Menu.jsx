import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <Navbar expand="lg" bg="primary" variant="light">
      <Container>
        <Navbar.Brand href="/" style={{color: "white"}}>Studiez</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
        <Nav className="me-auto">
          <Nav.Link to="/espaco">Espaco</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link to="/login">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Menu;