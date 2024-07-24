import React, { useState, useEffect } from 'react';
import { Container, Table, Spinner } from 'react-bootstrap';
import { fetchEconomicIndicators } from '../servicios/economicService';

const EconomicIndicators = () => {
  const [indicators, setIndicators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadIndicators = async () => {
      const data = await fetchEconomicIndicators();
      setIndicators(data);
      setLoading(false);
    };

    loadIndicators();
  }, []);

  return (
    <Container>
      <section id="economic-indicators">
        <h2>Indicadores Económicos</h2>
        {loading ? (
          <Spinner animation="border" />
        ) : (
          <Table bordered striped>
            <thead>
              <tr>
                <th>De</th>
                <th>A</th>
                <th>Valor</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {indicators.map((indicator, index) => (
                <tr key={index}>
                  <td>{indicator.fromSymbol}</td>
                  <td>{indicator.toSymbol}</td>
                  <td>{indicator.value}</td>
                  <td>{indicator.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </section>
    </Container>
  );
};

export default EconomicIndicators;
