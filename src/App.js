import React from 'react';
import Header from './componentes/Header';
import Home from './componentes/Home';
import Nosotros from './componentes/Nosotros';
import Servicios from './componentes/Servicios';
import Contacto from './componentes/Contacto';
import Trabaja from './componentes/Trabaja';
import EconomicIndicators from './componentes/IndicadorEconomico';
import Footer from './componentes/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Nosotros />
        <Servicios />
        <Contacto />
        <Trabaja />
        <EconomicIndicators /> {/* Agrega el nuevo componente */}
      </main>
      <Footer />
    </div>
  );
}

export default App;



