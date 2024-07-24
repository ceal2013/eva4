import React from 'react';
import { Container } from 'react-bootstrap';

function Confirmacion() {
  return (
    <Container className="text-center">
      <h1>¡Gracias por contactarnos!</h1>
      <img src="/gracias.jpg" alt="Imagen de confirmación" className="img-fluid" />
    </Container>
  );
}

export default Confirmacion;
