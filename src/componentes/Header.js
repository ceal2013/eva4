import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <header className="bg-dark text-light text-center py-3">
      <Container>
        <Row>
          <Col md={3}>
            <img src="/ceallogo.jpeg" alt="Logo CEAL Rooms" className="img-fluid" />
          </Col>
          <Col md={9}>
            <Navbar expand="md" variant="dark">
              <Navbar.Toggle aria-controls="navbarNav" />
              <Navbar.Collapse id="navbarNav">
                <Nav className="ml-auto">
                  <Nav.Link href="#home">Inicio</Nav.Link>
                  <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                  <Nav.Link href="#servicios">Servicios</Nav.Link>
                  <Nav.Link href="#contacto">Contacto</Nav.Link>
                  <Nav.Link href="#trabaja">Trabaja con Nosotros</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>C.E.A.L Rooms</h1>
            <h2>Software de Gestión Hotelera</h2>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
