import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
export function Contact() {
  return (
    <Fragment>
      <Container className="contact">
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            alert(
              `Usted ha envidao la siguiente información: \n ${
                "Nombre Completo: " + ev.target.name.value
              }\n ${"Email: " + ev.target.email.value} \n ${
                "Mensaje: " + ev.target.message.value
              }`
            );
          }}
        >
          <Row>
            <Col md={6} sm={12}>
              <img
                src="images/info/Contacto.png"
                className="d-none d-md-block"
                alt=""
              />
            </Col>
            <Col md={6} sm={12}>
              <h4>Envíanos tus dudas</h4>
              <input type="text" name="name" placeholder="Nombre Completo" />
              <input
                type="text"
                name="email"
                placeholder="Correo Electrónico"
              />
              <textarea
                placeholder="Mensaje"
                name="message"
                display={{ md: "none" }}
                className=""
              ></textarea>

              <button className="d-flex mx-auto" type="submit" name="hola">
                Enviar
              </button>


            </Col>
          </Row>
        </form>
      </Container>
    </Fragment>
  );
}
