import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <main>
      <Container>
        <section id="home">
          <Row id="titulo-seccion">
            <Col>
              <h2>Inicio</h2>
            </Col>
          </Row>
          <h3>CEAL Rooms SOLUCIONES INFORMATICAS PARA HOTELERIA</h3>
          <Row>
            <Col>
              <article>
                <p>Bienvenidos... acá encontrará toda la información de nuestro Software</p>
              </article>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
}

export default Home;
