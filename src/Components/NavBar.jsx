import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import TypeService from '../Services/TypeService';
import { NavDropdown } from 'react-bootstrap';
import GenerationService from '../Services/GenerationService';

const NavBar = () => {
    const navigate = useNavigate()
    const [types, setTypes] = useState([])
    const [gen, setGen] = useState ([])


    const fetchTypes = async () => {
        try {
            const response = await TypeService.getAllTypes()
           setTypes(response.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchTypes()
    }, [])


    const fetchGen = async () => {
        try {
            const response = await GenerationService.getAllGen()
           setGen(response.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchGen()
    }, [])

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
                <Navbar.Toggle className="btn-navbar" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex gap-3">
                        <NavDropdown className="txt-dropdown" title="Types" id="basic-nav-dropdown">
                            {types.map((type, index) => {
                                return <NavDropdown.Item className="txt-menu" key={type.name + "nav"} onClick={() => { navigate('/type/' + type.name) }}>{type.name}</NavDropdown.Item>
                            }
                            )}
                        </NavDropdown>   
                    </Nav>
                    <Nav className="d-flex gap-3">
                        <NavDropdown className="txt-dropdown" title="Générations" id="basic-nav-dropdown">
                            {gen.map((gen, index) => {
                                return <NavDropdown.Item  key={gen.name + "nav"} onClick={() => { navigate('/gen/' + gen.name) }}>{gen.name}</NavDropdown.Item>
                            }
                            )}
                        </NavDropdown>   
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

export default NavBar;