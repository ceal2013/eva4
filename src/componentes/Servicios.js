import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Servicios() {
  return (
    <Container>
      <section id="servicios">
        <Row id="titulo-seccion">
          <Col>
            <h2>Servicios</h2>
          </Col>
        </Row>
        <Row id="cajaservicios">
          <Col md={12}>
            <h3>HotelMaster</h3>
            <img className="imagen-seccion" src="logohm.png" alt="logohm" />
            <p>Sistema amigable e intuitivo que ayuda a controlar y administrar todos los procesos de su hotel.<br />Agilice sus tareas diarias e invierta más tiempo en atender a sus huéspedes y clientes.</p>
          </Col>
        </Row>
        <Row id="cajaservicios">
          <Col md={12}>
            <h3>HotelCloud</h3>
            <img className="imagen-seccion" src="logohc.png" alt="logohc" />
            <p>Controle y administre toda la información de HotelMaster&copy; desde la Nube.<br />Acceda desde la Web a todas las herramientas que entrega HotelMaster&copy;, quien sincorniza toda la información en su HotelCloud&copy;</p>
          </Col>
        </Row>
        <br />
        <Container>
          <Row id="titulo-seccion">
            <Col>
              <h2>Otros Servicios:</h2>
            </Col>
          </Row>
          <Row id="otros-servicios">
            <Col>
              <ul id="otros-servicios-list">
                <li>Diseño Web</li>
                <br />
                <p>Para completar todos nuestros productos, tenemos una nueva sección dedicada al diseño gráfico y la confección de sitios webs. A la vez cumplir con el objetivo de entregar una nueva plataforma para comunicar, publicitar o vender lo que necesiten. Páginas web responsivas (adaptables a cualquier dispositivo) y con servicio de campañas publicitarias aplicables también a sus redes sociales.</p>
                <br />
                <li>GeHoWeb</li>
                <br />
                <p>Es un motor de reservas online 100% conectado al sistema de administración hotelera Hotelnew optimizando de forma automática sus tarifas aumentando así las utilidades de su hotel.</p>
                <br />
                <li>Facturación Electrónica</li>
                <br />
                <p>Conectados con varios proveedores de documentos electrónicos autorizados por el SII. Sin embargo, podemos realizar interfaz con cualquier otro proveedor que ustedes deseen o con el que actualmente trabajan. Sin procedimientos manuales complicados, simplemente presionando un botón se obtiene un PDF con la factura electrónica.</p>
                <br />
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
}

export default Servicios;
