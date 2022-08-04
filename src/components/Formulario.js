import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListaTareas from "./ListaTareas";

const Formulario = () => {
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
