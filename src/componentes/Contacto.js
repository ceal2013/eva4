import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Contacto() {
  return (
    <Container>
      <section id="contacto">
        <div id="titulo-seccion" className="row">
          <h2>Contacto</h2>
        </div>

        <Form action="/confirmacion" method="POST">
          <Form.Group controlId="nombre">
            <Form.Label>Ingrese su Nombre:</Form.Label>
            <Form.Control type="text" placeholder="Nombre" name="nombre" required />
          </Form.Group>

          <Form.Group controlId="apellido">
            <Form.Label>Ingrese su Apellido:</Form.Label>
            <Form.Control type="text" placeholder="Apellido" name="apellido" required />
          </Form.Group>

          <Form.Group controlId="compania">
            <Form.Label>Ingrese su Compañia:</Form.Label>
            <Form.Control type="text" placeholder="Nombre Compañia (Opcional)" name="compania" />
          </Form.Group>

          <Form.Group controlId="fono">
            <Form.Label>Ingrese su Teléfono:</Form.Label>
            <Form.Control type="tel" placeholder="Teléfono (Opcional)" name="fono" />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Ingrese su Email:</Form.Label>
            <Form.Control type="email" placeholder="Email" name="email" required />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </section>
    </Container>
  );
}

export default Contacto;