import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListaTareas from "./ListaTareas";

const Formulario = () => {
  // Logica
  // Crear un state
  const [arregloTareas, setArregloTareas] = useState([]);
  const [tarea, setTarea] = useState("");

  // maquetado y algo de logica
  return (
    <div>
      <Form>
        <Form.Group className="mb-3 d-flex">
          <Form.Control type="text" placeholder="Ingrese una tarea" />
          <Button variant="primary" type="submit" className="ms-3">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      {/* Invoco a la lista de tareas */}
      <ListaTareas></ListaTareas>
    </div>
  );
};

export default Formulario;
