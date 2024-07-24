import React from 'react';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <section id="home">
        <div id="titulo-seccion" className="row">
          <h2>Inicio</h2>
        </div>
        <h3>CEAL Rooms SOLUCIONES INFORMATICAS PARA HOTELERIA</h3>
        <article>
          <p>Bienvenidos... acá encontrará toda la información de nuestro Software</p>
        </article>
      </section>
    </Container>
  );
}

export default Home;


