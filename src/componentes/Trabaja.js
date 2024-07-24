import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Form } from 'react-bootstrap';

const Trabaja = () => {
  const [registros, setRegistros] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fechaNacimiento: '',
    nivelEstudios: '',
    experiencia: ''
  });

  useEffect(() => {
    const savedRegistros = JSON.parse(localStorage.getItem('registros')) || [];
    setRegistros(savedRegistros);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedRegistros = registros.map((registro, index) =>
        index === editingIndex ? formData : registro
      );
      setRegistros(updatedRegistros);
      localStorage.setItem('registros', JSON.stringify(updatedRegistros));
    } else {
      setRegistros((prev) => [...prev, formData]);
      localStorage.setItem('registros', JSON.stringify([...registros, formData]));
    }
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      fechaNacimiento: '',
      nivelEstudios: '',
      experiencia: ''
    });
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    setFormData(registros[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedRegistros = registros.filter((_, i) => i !== index);
    setRegistros(updatedRegistros);
    localStorage.setItem('registros', JSON.stringify(updatedRegistros));
  };

  return (
    <Container>
      <section id="trabaja">
        <div id="titulo-seccion" className="row">
          <h2>Trabaja con Nosotros</h2>
        </div>
        <br />
        <h4>¡Forma parte de nuestra empresa!</h4>
        <p>Rellena el siguiente formulario para postularte:</p>
        <Form id="trabajaForm" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="nombre">Nombre:</Form.Label>
            <Form.Control
              type="text"
              id="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email">Email:</Form.Label>
            <Form.Control
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="telefono">Teléfono:</Form.Label>
            <Form.Control
              type="tel"
              id="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="fechaNacimiento">Fecha de Nacimiento:</Form.Label>
            <Form.Control
              type="date"
              id="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="nivelEstudios">Nivel de Estudios:</Form.Label>
            <Form.Control
              as="select"
              id="nivelEstudios"
              value={formData.nivelEstudios}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione una opción</option>
              <option value="Basica">Básica</option>
              <option value="Media">Media</option>
              <option value="Universitaria">Universitaria</option>
              <option value="Postgrado">Postgrado</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="experiencia">Experiencia:</Form.Label>
            <Form.Control
              as="textarea"
              id="experiencia"
              rows="3"
              value={formData.experiencia}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              id="confirma"
              label="Confirmo Datos ingresados"
              required
            />
          </Form.Group>
          <Button type="submit" variant="primary">
            {editingIndex !== null ? 'Actualizar' : 'Enviar'}
          </Button>
          {editingIndex !== null && (
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setFormData({
                  nombre: '',
                  email: '',
                  telefono: '',
                  fechaNacimiento: '',
                  nivelEstudios: '',
                  experiencia: ''
                });
                setEditingIndex(null);
              }}
            >
              Cancelar
            </Button>
          )}
        </Form>
        <br />
        <h4>Registros:</h4>
        <Container className="table-responsive">
          <Table bordered striped>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Fecha de Nacimiento</th>
                <th>Nivel de Estudios</th>
                <th>Experiencia</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {registros.map((registro, index) => (
                <tr key={index}>
                  <td>{registro.nombre}</td>
                  <td>{registro.email}</td>
                  <td>{registro.telefono}</td>
                  <td>{registro.fechaNacimiento}</td>
                  <td>{registro.nivelEstudios}</td>
                  <td>{registro.experiencia}</td>
                  <td>
                    <Button
                      variant="warning"
                      onClick={() => handleEdit(index)}
                    >
                      Editar
                    </Button>{' '}
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(index)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </section>
    </Container>
  );
};

export default Trabaja;
