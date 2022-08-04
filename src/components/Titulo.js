import React from "react";

const Titulo = (props) => {
  return (
    <div>
      <h1 className="text-center display-2">Lista de tareas {props.comision}</h1>
      <hr />
    </div>
  );
};

export default Titulo;
