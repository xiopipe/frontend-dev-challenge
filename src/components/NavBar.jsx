import React, { Fragment, useState } from "react";

export function NavBar() {
  let [showMenu, testfunct] = useState(false);

  return (
    <Fragment>
      <nav className="Header">
        <div className="d-flex container">
          <i
            className="bi-list Header__icon"
            onClick={() => testfunct(!showMenu)}
            style={{ fontSize: 24 }}
          ></i>

          <div className="d-flex mx-auto">
            <div className="Header__brand"></div>
          </div>
        </div>
      </nav>
      {showMenu && (
        <Fragment>
          <div className="Header__icon-menu ">
            <ul>
              <div className="Header__icon-titles">Nosotros</div>
              <hr />
              <li
                className="d-flex justify-content-between"
                style={{ cursor: "pointer" }}
              >
                <div>Contanto</div>
                <i className="bi bi-arrow-right align-self-end"></i>
              </li>
              <li
                className="d-flex justify-content-between"
                style={{ cursor: "pointer" }}
              >
                <div>Testimonios</div>
                <i className="bi bi-arrow-right align-self-end"></i>
              </li>
              <li
                className="d-flex justify-content-between"
                style={{ cursor: "pointer" }}
              >
                Preguntas Frecuentes{" "}
                <i className="bi bi-arrow-right align-self-end"></i>
              </li>
            </ul>
            <ul>
              <div className="Header__icon-titles">Educación</div>
              <hr />
              <li
                className="d-flex justify-content-between"
                style={{ cursor: "pointer" }}
              >
                <div>Aprende a ser mamá</div>
                <i className="bi bi-arrow-right align-self-end"></i>
              </li>
              <li
                className="d-flex justify-content-between"
                style={{ cursor: "pointer" }}
              >
                Educación para bebés
                <i className="bi bi-arrow-right align-self-end"></i>
              </li>
              <li
                className="d-flex justify-content-between"
                style={{ cursor: "pointer" }}
              >
                Educación para niños
                <i className="bi bi-arrow-right align-self-end"></i>
              </li>
            </ul>
            <ul>
              <div className="Header__icon-titles">Embarazo </div>
              <hr />
              <li
                className="d-flex justify-content-between"
                style={{ cursor: "pointer" }}
              >
                Quiero a ser mamá
                <i className="bi bi-arrow-right align-self-end"></i>
              </li>
              <li
                className="d-flex justify-content-between"
                style={{ cursor: "pointer" }}
              >
                Voy a ser mamá
                <i className="bi bi-arrow-right align-self-end"></i>
              </li>
              <li
                className="d-flex justify-content-between"
                style={{ cursor: "pointer" }}
              >
                Parto
                <i className="bi bi-arrow-right align-self-end"></i>
              </li>
            </ul>
          </div> 
        </Fragment>
      )}
    </Fragment>
  );
}
