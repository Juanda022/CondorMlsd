import {Navbar,Container,Nav} from "react-bootstrap"
import { Outlet,Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBarProfe = () =>{
    const history = useNavigate();
    //<Nav.Link as={Link} to="/estu/notas" >Notas</Nav.Link>
    function clearLocalStorage() {
        localStorage.clear(); // Borra todos los datos del local storage
        history('/',{replace: true});
    }

    return(
        <>
            <Navbar className="navBg" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/prof">Condor MLSD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to="/prof/cursos" >Cursos</Nav.Link>
                    </Nav>
                    </Navbar.Collapse> 

                    <button onClick={clearLocalStorage} className='btn btn-light'>Logout</button>
                </Container>
            </Navbar>
            <section>
                <Outlet></Outlet>
            </section>
        </>
    );
}

export default NavBarProfe;