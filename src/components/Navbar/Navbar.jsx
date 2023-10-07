import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "/assets/logo.png";
import CartWidget from './CartWidget/CartWidget.jsx'
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar-styles.css";
import { Link } from 'react-router-dom';

function NavbarExport({count, funcionOnClick}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand id="logoNavbar" href=""><img src={Logo} alt="logo" width="64px"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-between">
          <Nav className="d-flex align-items-center">
            <Link style={{ textDecoration: "none" }} to={"/"}>Inicio</Link>
            <NavDropdown title="Series" id="basic-nav-dropdown">
            <Link style={{ textDecoration: "none" }} to={"/series/Chainsaw Man"} className="ps-3">Chainsaw Man</Link>
            <NavDropdown.Divider />
            <Link style={{ textDecoration: "none" }} to={"/series/Fire Punch"} className="ps-3">Fire Punch</Link>
            <NavDropdown.Divider />
            <Link style={{ textDecoration: "none" }} to={"/series/Komi San"} className="ps-3">Komi San</Link>
            <NavDropdown.Divider />
            <Link style={{ textDecoration: "none" }} to={"/series/Oshi no Ko"} className="ps-3">Oshi No Ko</Link>
            <NavDropdown.Divider />
            <Link style={{ textDecoration: "none" }} to={"/series/Solo Leveling"} className="ps-3">Solo Leveling</Link>
            <NavDropdown.Divider />
            <Link style={{ textDecoration: "none" }} to={"/series/Kaguya Sama"} className="ps-3">Kaguya Sama</Link>
            <NavDropdown.Divider />
            <Link style={{ textDecoration: "none" }} to={"/series/Shikimori San"} className="ps-3">Shikimori San</Link>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link style={{ textDecoration: "none" }} to={"/cart"}><CartWidget count={count} funcionOnClick={funcionOnClick}/></Link> 
          </Nav>          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarExport;
