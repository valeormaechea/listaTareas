import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListaTareas from "./ListaTareas";

const Formulario = () => {
  // Logica
  let tareasLocalStorage =
    JSON.parse(localStorage.getItem("listaTareas")) || [];
  // Crear un state
  const [arregloTareas, setArregloTareas] = useState(tareasLocalStorage);
  const [tarea, setTarea] = useState("");

  // Ciclo de vida
  useEffect(() => {
    console.log("prueba de ciclo de vida");
    localStorage.setItem("listaTareas", JSON.stringify(arregloTareas));
  }, [arregloTareas]);

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

  const borrarTarea = (nombre) => {
    let arregloModificado = arregloTareas.filter((valor) => {
      return valor != nombre;
    });
    setArregloTareas(arregloModificado);
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
      <ListaTareas
        arregloTareas={arregloTareas}
        borrarTarea={borrarTarea}
      ></ListaTareas>
    </div>
  );
};

export default Formulario;
