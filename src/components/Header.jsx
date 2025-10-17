import {Link} from "react-router-dom";
import {Container,Navbar,Nav} from "react-bootstrap";

export default function Header(){
    return(
        <Navbar bg="dark" variant="dark" text-white expand="lg">

            <Container>
                
                <Navbar.Brand as={Link} to="/">
                    <div>
                        <h3 text-center >MATERIALES DE CONSTRUCCION</h3>
                    </div>
                    
                    <img src="src/objetos/logo.jpg" alt="logo"  class="img-fluid" />
                </Navbar.Brand>

                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/clientes">
                        Clientes
                    </Nav.Link>
                    <Nav.Link as={Link} to="/productos">
                        Productos
                    </Nav.Link>
                    <Nav.Link as={Link} to="/servicios">
                        Servicios
                    </Nav.Link>
                    <Nav.Link as={Link} to="/contacto">
                        Contacto
                    </Nav.Link>
               </Nav>
            </Container>
        </Navbar>
    );
}

