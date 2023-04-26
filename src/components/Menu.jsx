import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/modules/auth/actions'

// Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Menu() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <Navbar expand="lg" bg="primary" variant="light">
      <Container>
        {isLoggedIn ? 
        (<>
        <Nav>
          <Navbar.Brand href='/espaco-aluno' style={{ color: 'white' }} >Studiez</Navbar.Brand>
          <NavDropdown style={{ color: 'white' }} title="Avaliações" id='dropdown' >
            <NavDropdown.Item  href='/avaliacao'>Realizar avaliação</NavDropdown.Item>
            <NavDropdown.Item  href='/'>Histórico</NavDropdown.Item>
          </NavDropdown>
        </Nav>
          <Nav>
            <Link onClick={() => dispatch(logout())} to="/">Sair</Link>
          </Nav>
        </>)
         : 
        (<>
          <Navbar.Brand href='/' style={{ color: 'white' }} >Studiez</Navbar.Brand>
          <Nav>
            <Link to="/login">Entrar</Link>
          </Nav>
        </>)}
      </Container>
    </Navbar>
  );
}

export default Menu;