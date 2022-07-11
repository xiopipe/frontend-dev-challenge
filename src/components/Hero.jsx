import React, { Fragment } from "react";

export function Hero() {
  return (
    <Fragment>
      <div className="hero__slider">
        <ul>


            <h1>
              Su viaje de{" "}
              <span style={{ color: "#F778B9" }}>salud emocional</span>
              <br />
              empieza aquí
            </h1>
            <h4>
              Conoce nuestros <br /> profesionales con licencia
            </h4>
            <p>
              Todos se someten a un proceso seguro de verificación y
              acreditación, además de adherirse a estrictos códigos de ética y
              confidencialidad.
            </p>
            <button>Quiero empezar</button>
          <li>
            <img src="/images/hero2.png" alt="" />
          </li>
          <li>
            <img src="/images/hero3.png" alt="" />
          </li>
          <li>
            <img src="/images/hero4.png" alt="" />
          </li>
          <li>
            <img src="/images/hero1.png" alt="" />
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
