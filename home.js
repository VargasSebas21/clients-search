import React from 'react';
import { Button } from 'react-bootstrap';
import { Form, Input, Label } from 'react-bootstrap';
import { useState } from 'react';

const Home = () => {
  const [nombre, setNombre] = useState('');
  const [codigo, setCodigo] = useState('');
  const [status, setStatus] = useState('');

  const handleCrear = () => {
    const data = {
      nombre: nombre,
      codigo: codigo,
      status: status,
    };
  
    fetch(`/api/crear`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 201) {
          
        } else {
          
        }
      })
      .catch((error) => {
      
      });
  };
  const handleBuscar = () => {
    fetch(`/api/buscar`)
      .then((response) => {
        if (response.status === 200) {
        
          return response.json();
        } else {
          
        }
      })
      .then((datos) => {
        
      })
      .catch((error) => {
        
      });
  };

  return (
    <div>
      <h1>Home</h1>
      <div className="buttons">
        <Button variant="primary" onClick={handleCrear}>Crear</Button>
        <Button variant="primary" onClick={handleBuscar}>Buscar</Button>
      </div>
      <Form>
        <Label for="nombre">Nombre</Label>
        <Input type="text" name="nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <Label for="codigo">Código</Label>
        <Input type="text" name="codigo" id="codigo" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
        <Label for="status">Status</Label>
        <Input type="text" name="status" id="status" value={status} onChange={(e) => setStatus(e.target.value)} />
      </Form>
      <Button variant="primary" onClick={handleCrear}>Crear</Button>
    </div>
  );
};

export default Home;