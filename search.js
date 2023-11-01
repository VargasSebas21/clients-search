import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form, Input, Label } from 'react-bootstrap';

const Search = () => {
  const [codigo, setCodigo] = useState('');
  const [datos, setDatos] = useState([]);

  const handleBuscar = () => {
    fetch(`/api/buscar/${codigo}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
        }
      })
      .then((datos) => {
        setDatos(datos);
      })
      .catch((error) => {
      });
  };

  return (
    <div>
      <h1>Buscar</h1>
      <div className="buttons">
        <Button variant="primary" onClick={handleBuscar}>Buscar</Button>
        <Button variant="primary" onClick={() => {
          setCodigo('');
          setDatos([]);
        }}>Limpiar</Button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((registro) => (
            <tr key={registro.codigo}>
              <td>{registro.codigo}</td>
              <td>{registro.nombre}</td>
              <td>{registro.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Search;