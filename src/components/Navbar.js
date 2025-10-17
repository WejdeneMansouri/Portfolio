import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Wijden Mansouri </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
<Nav.Link href="#competences" className="nav-link">
  Compétences
</Nav.Link>
<Nav.Link href="#projets" className="mb-4">Projets</Nav.Link>
            <Nav.Link href="#contact"footer-section>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
