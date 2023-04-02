import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <Navbar expand="lg" bg="primary" variant="light">
      <Container>
        <Navbar.Brand href="/" style={{color: "white"}}>Studiez</Navbar.Brand>
        <Nav>
          <Link to="/login">Login</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Menu;