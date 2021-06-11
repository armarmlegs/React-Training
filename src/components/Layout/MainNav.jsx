import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap/";
import style from './MainNav.module.css'

function MainNav() {
  return (
    // <Navbar bg="light" expand="lg">
    //   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link href="/">All meets</Nav.Link>
    //       <Nav.Link href="/Faves">Favorites</Nav.Link>
    //       <Nav.Link href="/NewMeets">New Meeting</Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
    <header className={style.header}>
        <div className={style.logo} > React Baby</div>
        <nav>
            <ul>
                <li><Link to="/"> All Meet Ups </Link></li>
               <li><Link to="/newMeets"> New Meets</Link></li> 
                <li><Link to="/Faves"> Faves </Link></li>

                    
                    
                    

            </ul>
        </nav>
    </header>
  );
}

export default MainNav;
