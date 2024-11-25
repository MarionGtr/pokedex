import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return <>
        <Navbar expand="lg" className="navbar">
            <Container className="d-flex gap-3">
            <img
              alt="logo"
              src="src/pngpokemon.png"
              width="100"
              height=""
              className="logoPokemon"
            />
                <Navbar.Brand>
                    <Link className='navbar-titre' to={'/'} >Pokédex</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex gap-3">
                        <Link className='navbar-txt' to={'/TypePage'}>Types</Link>
                        <Link className='navbar-txt' to={'/GenerationPage'}>Générations</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

export default NavBar;