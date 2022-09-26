import React, { Component, useState } from "react";

function Resultados(nombre,notaMatematicas,notaEspaniol,notaGeografia,Promedio,aprovado) {

  const [ObjEstudiante, setObjEstudiante] = useState([]);
  

  return (
    <>
      <hr />
      <div className="card bg-primary text-center">
        <h3>Resultados</h3>
      </div>
      <div className="car-footer p-2">
        <table className="table table-striped table-striped mt-3 ">
          <thead className="text-center font-weight-bold">
            <tr className="bg-secondary text-white">
              <td>Nombre</td>
              <td>Nota 1</td>
              <td>Nota 2</td>
              <td>Nota 3</td>
              <td>Promedio</td>
              <td>Observación</td>
            </tr>
          </thead>
          <tbody id="addtabla"></tbody>
        </table>
      </div>
    </>
  );
}

export default Resultados;
