import {Link} from "react-router-dom";
import {Container,Navbar,Nav} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';

export default function Header(){
    return(
        <div>
            <div as={Link} to="/" className='bg-success text-center border text-white expand=lg col-xl-12 py-1' >
                <img src="https://placehold.co/60x40/orange/cyan" 
                alt="logo placeholder" 
                className="d-inline-block align-center col-xl-1 ms-0" />
                <h2 className="d-inline-block align-center col-xl-11 ms-auto" >Corralon de Materiales America</h2>
            </div>

            <Navbar bg="dark" variant="dark" text-white expand="lg">
                <Container>
                    <Nav className="ms-auto align-items-lefts">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/materiales">
                            Materiales
                        </Nav.Link>
                        <Nav.Link as={Link} to="/ofertas">
                            Ofertas
                        </Nav.Link>
                        <Nav.Link as={Link} to="/servicios">
                            Servicios
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contacto">
                            Contacto
                        </Nav.Link>
                        <div className="d-flex align-items-center" >
                            <button variant="outline-light" as={Link} to="/login" className="me-2 ml-4 btn btn-primary"> 
                                Admin
                            </button>
                            <Link to="/carrito" className="text-white ">
                                <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
                            </Link>
                        </div>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

