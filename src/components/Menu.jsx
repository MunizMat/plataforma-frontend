import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/modules/auth/actions'

function Menu() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <Navbar expand="lg" bg="primary" variant="light">
      <Container>
        <Navbar.Brand href="/" style={{color: "white"}}>Studiez</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav className="me-auto">
          <Link to="/espaco">Espaco</Link>
        </Nav>
        <Nav>
        {isLoggedIn ? (<Link onClick={() => dispatch(logout())} to="/">Sair</Link>) : (<Link to="/login">Entrar</Link>)}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Menu;