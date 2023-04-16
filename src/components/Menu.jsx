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
        <Nav className="me-auto">
          <Link to="/espaco">Espaco</Link>
        </Nav>
        <Nav>
          <Link to="/login">Login</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Menu;