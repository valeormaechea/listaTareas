import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListaTareas from "./ListaTareas";

const Formulario = () => {
  // Logica

  // Crear un state
  const [arregloTareas, setArregloTareas] = useState([]);
  const [tarea, setTarea] = useState("");

  // const actualizarTarea = (e) => {
  //   // Obtener el value del input
  //   console.log(e.target.value);
  //   // Actualizar el state
  //   setTarea(e.target.value.trim());
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("prueba desde submit");
    // Actualizar la lista de tareas
    console.log([...arregloTareas, tarea]);
    setArregloTareas([...arregloTareas, tarea]);
    setTarea("");
  };

  // maquetado y algo de logica
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTarea(e.target.value.trimStart())}
            // Limpio el value junto con como limpio el state
            value={tarea}
          />
          <Button variant="primary" type="submit" className="ms-3">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      {/* Invoco a la lista de tareas */}
      <ListaTareas arregloTareas={arregloTareas}></ListaTareas>
    </div>
  );
};

export default Formulario;
