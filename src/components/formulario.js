import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Presentacion from "./presentacion";
import Swal from "sweetalert2";

//import Resultados from "./resultados";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [notaMatematicas, setNotaMatematicas] = useState("");
  const [notaEspaniol, setNotaEspaniol] = useState("");
  const [notaGeografia, setNotaGeografia] = useState("");
  let promedio = 0;
  let aprovado = false;
  // const [promedio, setPromedio] = useState(0);
  // const [aprovado, setArpovado] = useState(false);
  const [listaEstudiantes, setListaEstudiantes] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!nombre.trim()) {
      Swal.fire({
        icon: "error",
        title: "Nombre",
        text: "el campo Nombre no puede esta vacío",
      });
      return;
    }
    if (!notaMatematicas.trim()) {
      Swal.fire({
        icon: "error",
        title: "Nota Matematicas",
        text: "el campo Nota Matematicas no puede esta vacío",
      });
      return;
    }
    if (!notaEspaniol.trim()) {
      Swal.fire({
        icon: "error",
        title: "Nota Español",
        text: "el campo Nota Español no puede esta vacío",
      });
      return;
    }
    if (!notaGeografia.trim()) {
      Swal.fire({
        icon: "error",
        title: "Nota Geografia",
        text: "el campo Nota Geografia no puede esta vacío",
      });
      return;
    }

    if (parseInt(notaEspaniol) > 5 || parseInt(notaEspaniol) < 0) {
      Swal.fire({
        icon: "error",
        title: "No aplica",
        text: "Solo se aceptan numeros de 0 a 5",
      });
      return;
    }

    if (parseInt(notaMatematicas) > 5 || parseInt(notaMatematicas) < 0) {
      Swal.fire({
        icon: "error",
        title: "No aplica",
        text: "Solo se aceptan numeros de 0 a 5",
      });
      return;
    }

    if (parseInt(notaGeografia) > 5 || parseInt(notaGeografia) < 0) {
      Swal.fire({
        icon: "error",
        title: "No aplica",
        text: "Solo se aceptan numeros de 0 a 5",
      });
      return;
    }

    promedio = calcularPromedio(notaMatematicas, notaEspaniol, notaGeografia);
    aprovado = aprovo(promedio);

    const nuevoEstudiante = {
      nombre: nombre,
      notaMath: notaMatematicas,
      notaEsp: notaEspaniol,
      notGeo: notaGeografia,
      promedioN: promedio,
      aprovacion: aprovado,
    };

    setListaEstudiantes([...listaEstudiantes, nuevoEstudiante]);
    ReiniciarValores();
  };

  const calcularPromedio = (
    notaMatematicass,
    notaEspaniols,
    notaGeografias
  ) => {
    return (
      (parseInt(notaMatematicass) +
        parseInt(notaEspaniols) +
        parseInt(notaGeografias)) /
      3
    );
  };

  const aprovo = (promedio) => {
    return promedio >= 3.0 ? true : false;
  };

  const ReiniciarValores = () => {
    setNombre("");
    setNotaMatematicas("");
    setNotaEspaniol("");
    setNotaGeografia("");
    promedio = 0;
    aprovado = false;
  };

  return (
    <div className="App">
      <div className="container col-8 my-5 br-2 rounded">
        <div className="row g-3">
          <Presentacion />
          <div className="col-6">
            <div className="card bg-primary text-center">
              <h3>Notas</h3>
            </div>
            <form className="row g-3 needs-validation" onSubmit={submitForm}>
              <div className="row">
                <div className="col-12 mt-3">
                  <label className="form-label" htmlFor="firstname">
                    Nombre completo del estudiante
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="form-control"
                    onChange={(event) => setNombre(event.target.value)}
                    value={nombre}
                  />
                  <div className="invalid-feedback">
                    Ingrese el Nombre del Estudiante
                  </div>
                </div>

                <div className="col-4 mt-3">
                  <label className="form-label">Matematicas</label>
                  <input
                    type="number"
                    id="notaMat"
                    name="nomtaMat"
                    onChange={(event) => setNotaMatematicas(event.target.value)}
                    value={notaMatematicas}
                    min="0"
                    className="form-control"
                    required
                  />
                  <div className="invalid-feedback">Obligatorio</div>
                </div>
                <div className="col-4 mt-3">
                  <label className="form-label">Español</label>
                  <input
                    type="number"
                    id="notaEsp"
                    onChange={(event) => setNotaEspaniol(event.target.value)}
                    value={notaEspaniol}
                    min="0"
                    className="form-control"
                    required
                  />
                  <div className="invalid-feedback">Obligatorio</div>
                </div>
                <div className="col-4 mt-3">
                  <label className="form-label">Geografia</label>
                  <input
                    type="number"
                    min="0"
                    id="notaGeo"
                    onChange={(event) => setNotaGeografia(event.target.value)}
                    value={notaGeografia}
                    className="form-control"
                    required
                  />
                  <div className="invalid-feedback">Obligatorio</div>
                </div>
              </div>
              <div className="mt-5">
                <div className="form-check">
                  <label className="form-check-label">
                    Introduzca la nota correspondiente a cada materia, tenga en
                    cuenta que la casilla solo aceptara números de 1 a 10, el
                    botón promedio arrojara su nota final.
                  </label>
                </div>
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Promedio
                </button>
              </div>
            </form>
          </div>
        </div>
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
            <tbody id="addtabla">
              {listaEstudiantes.map((estudiante, index) => (
                <tr key={index}>
                  <td className="text-center">{estudiante.nombre}</td>
                  <td className="text-center">{estudiante.notaMath}</td>
                  <td className="text-center">{estudiante.notaEsp}</td>
                  <td className="text-center">{estudiante.notGeo}</td>
                  <td className="text-center">{estudiante.promedioN}</td>
                  <td className="text-center">
                    {estudiante.aprovacion ? (
                      <p className="bg-success text-white bg-opacity-75 ">
                        Aprovado &#10003;
                      </p>
                    ) : (
                      <p className="bg-danger text-white bg-opacity-75 ">
                        Reprovado &#215;
                      </p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
