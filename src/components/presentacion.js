import React, { Component } from "react";

const presentacion = () => {
  return (
    <div className="col-6 order-md-last">
      <div className="card text-center bg-primary">
        <h3>Web developer</h3>
      </div>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between">
          <div className="mx-auto d-block">
            <img
              src="https://img-21.ccm2.net/3QNmHyK05T4Uo5B6GN8anRlP8n8=/500x/1bf7d1aafc2c4ccd991f47365636ca6f/ccm-faq/forms.jpeg"
              className="col-3 col-md-12"
            />
          </div>
        </li>

        <li className="list-group-item d-flex justify-content-between">
          <div>
            <h6>Creador:</h6>
          </div>
          <span className="text-muted">Johann Casallas</span>
        </li>

        <li className="list-group-item d-flex justify-content-between">
          <div>
            <h6>Prueba:</h6>
          </div>
          <span className="text-muted">Promedio de Notas</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <div>
            <h6>Empresa:</h6>
          </div>
          <span className="text-muted">INFOTRACK</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <div>
            <h6>Fecha:</h6>
          </div>
          <span className="text-muted">15 de septiembre 2022</span>
        </li>
      </ul>
    </div>
  );
};

export default presentacion;
