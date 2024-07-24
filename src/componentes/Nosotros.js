import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Nosotros() {
  return (
    <Container>
      <section id="nosotros">
        <div id="titulo-seccion" className="row">
          <h2>Nosotros</h2>
        </div>
        <Row id="lineaseccion">
          <Col md={6}>
            <img src="/ceallogo.png" alt="Imagen seccion" className="imagen-seccion" />
          </Col>
          <Col md={6} id="cajatexto">
            <h3>¿QUIENES SOMOS?</h3>
            <article>
              <p>CEAL Rooms PMS tiene sus inicios a comienzos del año 2024 desarrollando soluciones para el rubro hotelero en Chile. Siempre entregando un servicio post-venta serio y completo.</p>
            </article>
          </Col>
        </Row>
        <Row id="lineaseccion">
          <Col md={6} id="cajatexto">
            <h3>¿POR QUÉ PREFERIRNOS?</h3>
            <article>
              <p>Por qué somos una empresa chilena y nuestras soluciones están desarrolladas en base a la actualidad nacional. Además mantenemos una constante búsqueda de innovación y mejora de las tecnologías empleadas. Entregamos un servicio de calidad, personalizado y ágil, con el objeto de responder a las necesidades específicas de cada uno de nuestros clientes.</p>
            </article>
          </Col>
          <Col md={6}>
            <img src="/elegirnos.png" alt="elegirnos" className="imagen-seccion" />
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default Nosotros;

