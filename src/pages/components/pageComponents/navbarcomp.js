import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from '../../../images/icon.png';

function NavbarComp() {
    return (
        <Navbar fixed="top" expand="lg" className="border-bottom" bg="dark" data-bs-theme="light" variant="dark">
            <Container>
                <Navbar.Brand className="d-flex align-items-center text-light">
                    <img
                        src={logo}
                        alt="Logo"
                        width="50"
                        height="50"
                        className="d-inline-block align-top mx-3 rounded-3"
                        title="Lintas Zona Fakta"
                    />
                    Lintas Zona Fakta
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        {['home', 'nasional', 'internasional', 'ekonomi', 'olahraga', 'teknologi', 'hiburan', 'gayahidup'].map((page) => (
                            <Nav.Link key={page} href={page === 'home'? '/id' : `/id/${page}`} className="mx-3 text-light">{page.charAt(0).toUpperCase() + page.slice(1)}</Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComp;
